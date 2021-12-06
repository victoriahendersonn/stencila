use kernel_micro::{include_file, MicroKernel};

pub fn new() -> MicroKernel {
    MicroKernel::new(
        "ubash",
        &["bash"],
        ("bash", "*"),
        &["{{script}}"],
        include_file!("bash-kernel.sh"),
        &[],
        "{{name}}=\"{{json}}\"",
        "echo ${{name}}",
    )
}

#[cfg(test)]
mod tests {
    use super::*;
    use kernel::{eyre::Result, stencila_schema::Node, KernelTrait};
    use test_utils::{assert_json_eq, serde_json::json, skip_ci_os};

    /// Tests of basic functionality
    /// This test is replicated in all the microkernels.
    /// Other test should be written for language specific quirks and regressions.
    #[tokio::test]
    async fn basics() -> Result<()> {
        if skip_ci_os("windows", "Failing on Windows CI for unknown reasons")
            || skip_ci_os("macos", "Hanging on Mac CI?")
        {
            return Ok(());
        }

        let mut kernel = new();
        if !kernel.available().await {
            return Ok(());
        } else {
            kernel.start().await?;
        }

        // Assign a variable and output it
        let (outputs, messages) = kernel.exec("a=2\necho $a").await?;
        assert_json_eq!(messages, json!([]));
        assert_json_eq!(outputs, [2]);

        // Print the variable twice and then output it
        // For bash, we need to separate outputs manually using the Unicode separator character
        let (outputs, messages) = kernel
            .exec("echo $a\u{10ABBA}\necho $a\u{10ABBA}\necho $a")
            .await?;
        assert_json_eq!(messages, json!([]));
        assert_json_eq!(outputs, [2, 2, 2]);

        // Syntax error
        let (outputs, messages) = kernel.exec("if").await?;
        messages[0]
            .error_message
            .ends_with("syntax error: unexpected end of file\n");

        assert_json_eq!(outputs, json!([]));

        // Runtime error
        let (outputs, messages) = kernel.exec("foo").await?;
        messages[0]
            .error_message
            .ends_with("foo: command not found\n");
        assert_json_eq!(outputs, json!([]));

        // Set and get another variable
        kernel.set("b", Node::Integer(3)).await?;
        let b = kernel.get("b").await?;
        assert_json_eq!(b, 3);

        // Use both variables
        let (outputs, messages) = kernel.exec("echo $a$b").await?;
        assert_json_eq!(messages, json!([]));
        assert_json_eq!(outputs, [23]);

        Ok(())
    }
}

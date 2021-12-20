use kernel_micro::{include_file, MicroKernel};

/// A microkernel for Zsh
///
/// The `kernel-zsh.sh` script relies on `/dev/stdin`, `/dev/stdout`,
/// and `/dev/stderr` so this kernel is not available on Windows.
pub fn new() -> MicroKernel {
    MicroKernel::new(
        "zsh-micro",
        &["zsh"],
        true,
        false,
        false,
        ("zsh", "*"),
        &["{{script}}"],
        include_file!("zsh-kernel.sh"),
        &[],
        "{{name}}=\"{{json}}\"",
        "echo ${{name}}",
    )
}

#[cfg(test)]
mod tests {
    use super::*;
    use kernel::{eyre::Result, stencila_schema::Node, KernelTrait};
    use test_utils::{assert_json_eq, serde_json::json};

    /// Tests of basic functionality
    /// This test is replicated in all the microkernels.
    /// Other test should be written for language specific quirks and regressions.
    #[tokio::test]
    async fn basics() -> Result<()> {
        let mut kernel = new();
        if !kernel.is_forkable().await {
            return Ok(());
        } else {
            kernel.start().await?;
        }

        // Assign a variable and output it
        let (outputs, messages) = kernel.exec("a=2\necho $a").await?;
        assert_json_eq!(messages, json!([]));
        assert_json_eq!(outputs, [2]);

        // Syntax error
        let (outputs, messages) = kernel.exec("if").await?;
        assert!(messages[0]
            .error_message
            .ends_with("parse error near `if'\n"));
        assert_json_eq!(outputs, json!([]));

        // Runtime error
        let (outputs, messages) = kernel.exec("foo").await?;
        assert!(messages[0]
            .error_message
            .ends_with("command not found: foo\n"));
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

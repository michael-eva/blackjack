# Investigation Test

This file was created to test the GitService after fixing the token issue.

## Findings
- The issue was that the project had an old token stored
- The controller was using the project token instead of the request token
- After updating the project with the new token, everything works!

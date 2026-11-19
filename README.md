# Client-side sigmoid

ITMO lab for ISU 340116, Moodle login kiroo_rezkallah.

Reads integer query vectors A and B and integer bias C, computes the weighted sum and sigmoid, and writes the truncated result into the page title. The h4 contains the exact Moodle login.

Run tests with `node --test sigmoid.test.mjs`. Serve index.html and sigmoid.mjs together over HTTP.

Example query: `?A=2,4,6,8,1&B=1,-1,1,-1,1&C=4` produces title `0.731`.

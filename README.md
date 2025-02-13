# React Router Dom v6 Nested Route Parameter Matching Issue

This repository demonstrates a problem with nested routes and parameters in React Router Dom v6.  The nested route fails to match correctly, leading to unexpected behavior.

## Problem

When nesting routes with parameters, the nested route's parameters may not be correctly parsed or accessed. This can result in the wrong component being rendered or unexpected errors.

## Solution

The solution involves ensuring proper route parameter definition and potentially using the `useParams` hook in a more robust way.  The provided solution uses `useParams` hook to correctly access the parameters from the url.
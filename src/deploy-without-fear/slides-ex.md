---
title: "Deploy Without Fear Using Automated Tests"
description: A conference talk about the usefulness of different types of automated tests.
layout: reveal.njk
templateEngineOverride: false
---
# Deploy Without Fear Using Automated Tests

Atlanta Cloud Conference 2025

---

## Reasons to test

- Code coverage <!-- .element: class="fragment" data-fragment-index="2" -->
- Regression detector <!-- .element: class="fragment" data-fragment-index="1" -->
	- CI/CD
    - delete flaky tests, team should have faith in the test suite
- helps us write simple code
	- TDD
- executable documentation
	- comments can lie, tests will fail if they lie
	- delete tests that are no longer useful

---
<span>hello</span>
## Types of tests

- Unit
- Integration
- End-to-end

Note:
Hello

---

## Which type to pick

- pyramid and trophy
- explain, the lowest level that gives value
- show simple examples
	- test that business logic occurs where everything else passes through
		- we can test at all levels, but get all our value from the unit test
	- test that we write a good database query
		- we can make a unit test, but we need to use mocks, so we don't get value
		- integration is the lowest level with value
	- test that a user can record audio and submit a message
		- we could write various integration tests but how can we prove that one leads to another and everything feeds into one another?
	- test that... think about not having
		- hmm... I don't know, but the point is to convince that there are some ideas that don't have any testing value

---

<!-- .slide: data-auto-animate -->
<!-- .slide: data-background="#0000ff" -->
## how to get started?

- TDD - start new unit tests with
- scary area you're afraid to make changes in? start by making a test
- code all mixed up so it's tough to write simple unit or integration tests? maybe starting with an end-to-end would be good
    - maybe that really is the lowest level that gives you value until you can rearchitect the code
- Item 1 <!-- .element: class="fragment" -->
- Item 2 <!-- .element: class="fragment" -->

Note:
Something here


<!-- .slide: data-auto-animate -->
## how to get started?

- TDD - start new unit tests with
- scary area you're afraid to make changes in? start by making a test
- code all mixed up so it's tough to write simple unit or integration tests? maybe starting with an end-to-end would be good

Note:
Something else

---

## remember

- start small and get it in the CI/CD pipelines
- make a commitment to add to test suites over time

---

## Delete tests that no longer serve you

---

## Goals today

<div style="display: flex">
<div>

- Share an appreciation of automated tests
- Inspire writing tests

</div>
<div>

- Share an appreciation of automated tests1
- Inspire writing tests

</div>
</div>

---

## Test until fear turns into boredom

Kent Back

---

## Test where your code gives you fear

---

## Refactoring means not changing what happens

---

## unit integration and end to end test definitions

---

## you can use any of these tools to test anything, but you may not want to

- examples of tests with checkboxes
	- do we get value from this test?
	- let’s pick the fastest test that gives us value
	- unit test is no if mocking everything out makes it pass trivially

---

## Linters?

---

TDD

---

## test behavior, not implementation
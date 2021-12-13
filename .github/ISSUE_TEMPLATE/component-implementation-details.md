---
name: Component Implementation Details
about: Document the implementation of a component and standard verifications to go
  through before calling a component done.
title: "[ feature/<BRANCH_NAME> ] <COMPONENT_TITLE>"
labels: good first issue
assignees: ''

---

<COMPONENT_DESCRIPTION>

# Definition of Done

This section describes what needs to be done to consider this component's implementation complete.

## Component's Feature

Here, list all the feature your component should support.

- [] <COMPONENT_FEATURE_1>
- [] <COMPONENT_FEATURE_2>
- [] ...

## Standard Verifications

To maintain a quality standard, every component should pass through standard verifications. For example, most components implement standard props. That means that they have to support a few features by default. We also make sure that your component's props respects our __**standards**__.

- [] The component is responsive
- [] All the dynamic data displayed by the component is grouped under the `data` prop
- [] All behaviour related data (to control the state of the component and receive feedback) is grouped under the `config` prop
- [] If the component a default configuration, it is assigned directly in the destructuring of the props


### Standard Props

- [] The component support different sizes (`size` prop)
- [] The component support different variants (`variant` prop)
- [] The component's main parts support custom styling through `className` objects
- [] Hardcoded labels are localized and overrideable

## Documentation

In a UI library, a component really isn't really ready until well documented, therefore, we make some verifications here.

- [] The component is documented in Storybook's doc
- [] The props of the component are documented in Storybook's doc
- [] There are at least 2 examples of common component usage

## Testing

List the tests to be written for every feature of your component to ensure the robustness and predictability of your component.

- <FEATURE_1>
    - [] <FEATURE_1_TEST_1>
    - [] <FEATURE_1_TEST_2>
- <FEATURE_2>
    - [] <FEATURE_2_TEST_1>
    - [] <FEATURE_2_TEST_2>
- ...

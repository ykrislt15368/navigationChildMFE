# Contributing guidelines

Thank you for your interest in contributing to the Child-App-Template-UI repo! We believe in new approaches, partnerships, and technologies that will comfortably fork Child-App-Template-UI and make your repo copy to this and work as expected. People like you can help contribute to our mission, and we'd love your help!

## Table of contents

- **[What is this?](#what-is-this)**
- **[Contribute what?](#contribute-what)**
- **[Ground rules](#ground-rules)**
- **[Getting started](#getting-started)**
- **[Bug Reports and Other Issues](#bug-reports-other-issues)**
- **[Creating Issues](#creating-issues)**
- **[Feature Requests](#feature-requests)**
- **[Getting started](#getting-started)**
- **[Submitting Pull Requests](#submitting-pull-requests)**
- **[Writing Commit Messages](#writing-commit-messages)**
- **[Code Review](#code-review)**
- **[Coding Style](#coding-style)**
- **[Certificate of Origin](#certificate-of-origin)**
- **[Community](#community)**
- **[Credits](#credits)**

## What is this?<a name="what-is-this"></a>

These guidelines help contributors to our projects understand our workflow and how to contribute to the Child-App-Template-UI repo. Following these guidelines helps developers manage and develop this source project conveniently. In return, they should reciprocate that respect by addressing issues, assessing changes, and helping finalise pull requests with new features.

## Contribute what?

There are different ways to contribute to a project. Some ways to contribute
are…

- Writing code
- Submitting bug reports / feature requests
- Improving documentation

## Ground rules

These ground rules are the basic responsibilities for contributing to the
project.

- **DO's**
  - DO fork the Child-App-Template-UI repo into your newly created repo and these guidelines are documented in Readme file
  - Do trigger bitbucket pipeline with your new changes checks everything works expected
  - DO create branches for feature requests/bug fixes  from jira story which is linked
  - DO keep each pull request to _one_ feature / bug fix
    - If you want to submit multiple things, submit multiple pull requests
  - DO write unit tests for new features if applicable
  - DO write [good commit messages](http://tbaggery.com/2008/04/19/a-note-about-git-commit-messages.html)
- **DON'Ts**
  - DON'T commit changes to files irrelevant to your pull request (e.g.
    `gitignore`)

## Getting started

_Hint_: **Working on your first pull request on bitbucket?** Learn how from this _free_
series. [How to Contribute to the `platform-child-app-template-ui` on GitHub](https://actioner.com/blog/create-bitbucket-pull-requests)

1. Fork the project into your local environment.
   - If you are unable to fork, make sure you have write access to `platform-child-app-template-ui` or not. If you don't have access, raise a request to the Devops team that you need write access to this repo.
2. Create changes in your fork.
   - Run unit tests once you're done!
3. Create a pull request against bitbucker `platform-child-app-template-ui` repo.

## Report a bug

When filing an issue, check if you are using the latest version of the project. If you are not up-to-date, see if updating fixes your issue first and also make sure below

1. What version of NodeJS / npm are you using (`npm version`)?

```javascript
npm:  '8.16.0',
node: '18.15.0'
```

## Feature Requests

Make sure your Feature requests are made from JIRA story link `create branch `.

- **Do not create branch manually.** If you want to create a branch for POC, create it manually; if it's a feature request from the Jira story assigned, create it from there.

- Be precise about the proposed outcome of the feature and how it relates to existing features. Include implementation details if possible.

## Creating Issues

You can help create issues, which may include bug reports or asking for additional information, such as bugs in the existing Child-App-Template-UI app, to the product owner of the `Titans` pod. Based on bug importness, stroy will be groomed by the product owner, and it will be picked by developer availability.

## Submitting Pull Requests

We **love** pull requests! Before [cloning the repo](https://bitbucket.org/teachingstrategies/platform-child-app-template-ui/src/master/) and [creating a pull request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/proposing-changes-to-your-work-with-pull-requests) make sure you have latest code from master.

- **Smaller is better.** Submit **one** pull request per bug fix or feature. A pull request should contain isolated changes pertaining to a single bug fix or feature implementation. **Do not** refactor or reformat code that is unrelated to your change.

- **Coordinate bigger changes.** For large and non-trivial changes, raise small PR's collectively. Otherwise, you risk doing a lot of work for nothing!

- **Prioritize understanding over cleverness.** Write code clearly and concisely. Remember that source code usually gets written once and read often. Ensure the code is clear to the reader. The purpose and logic should be obvious to a reasonably skilled developer, otherwise you should add a comment that explains it.

- **Follow existing coding style and conventions.** Keep your code consistent with the style, formatting, and conventions in the rest of the code base. For this repo before pushing code linter applies to commit and make consistent style, formatting, and conventions. Consistency makes it easier to review and modify in the future.

- **Include test coverage.** Add unit tests screenshot of sonarqube report of TS in when rasing PR.

- **Add documentation.** Document your changes with code doc comments and add new envirnoment varaibles in Readme file and contributing file during your code refactoring.

- **[Resolve any merge conflicts](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/resolving-a-merge-conflict-on-github)** that occur.

- **Promptly address any CI failures**. If your pull request fails to build or pass tests, please push another commit to fix it.

- When writing comments, use properly constructed sentences, including punctuation.

- Use spaces, not tabs.

## Writing Commit Messages

Please [write a great commit message](https://chris.beams.io/posts/git-commit/) and follow these [guidelines](https://www.conventionalcommits.org/en/v1.0.0/) when commiting

1. Separate subject from body with a blank line
1. Limit the subject line to 50 characters
1. Capitalize the subject line
1. Do not end the subject line with a period
1. Use the imperative mood in the subject line (example: "Fix networking issue")
1. Wrap the body at about 72 characters
1. Use the body to explain **why**, _not what and how_ (the code shows that!)
1. Prefix the title with the relevant component name by following guidelines link. (examples: "[Docs] Fix typo", "[Profile] Fix missing avatar")

```
[TAG] Short summary of changes in 50 chars or less

Add a more detailed explanation here, if necessary. Possibly give
some background about the issue being fixed, etc. The body of the
commit message can be several paragraphs. Further paragraphs come
after blank lines and please do proper word-wrap.

Wrap it to about 72 characters or so. In some contexts,
the first line is treated as the subject of the commit and the
rest of the text as the body. The blank line separating the summary
from the body is critical (unless you omit the body entirely);
various tools like `log`, `shortlog` and `rebase` can get confused
if you run the two together.

Explain the problem that this commit is solving. Focus on why you
are making this change as opposed to how or what. The code explains
how or what. Reviewers and your future self can read the patch,
but might not understand why a particular solution was implemented.
Are there side effects or other unintuitive consequences of this
change? Here's the place to explain them.

 - Bullet points are okay, too

 - A hyphen or asterisk should be used for the bullet, preceded
   by a single space, with blank lines in between

Note the fixed or relevant GitHub issues at the end:

Resolves: #123
See also: #456, #789
```

## Code Review

Add reviewers as frontend leads and Titans POD members. Leave the PR in the `Frontend Developers` Microsoft Teams group. Expect a response to new pull requests within a day. If you don't receive any feedback, please follow up with a new comment in the `Frontend Developers` Microsoft Teams group!

- **Review the code, not the author.** Look for and suggest improvements without disparaging or insulting the author. Provide actionable feedback and explain your reasoning.

- **You are not your code.** When your code is critiqued, questioned, or constructively criticized, remember that you are not your code. Do not take code review personally.

- **Always do your best.** No one writes bugs on purpose. Do your best, and learn from your mistakes.

- Kindly note any violations to the guidelines specified in this document.

## Coding Style

Consistency is the most important. Following the existing style, formatting, and naming conventions of the file you are modifying and of the overall project. Failure to do so will result in a prolonged review process that has to focus on updating the superficial aspects of your code, rather than improving its functionality and performance.

For example, if all private properties are prefixed with an underscore `_`, then new ones you add should be prefixed in the same way. Or, if methods are named using camelcase, like `thisIsMyNewMethod`, then do not diverge from that by writing `this_is_my_new_method`. You get the idea. If in doubt, please ask or search the codebase for something similar.

When possible, style and format will be enforced with a linter.

## Certificate of Origin

_Developer's Certificate of Origin 1.1_

By making a contribution to this project, I certify that:

> 1. The contribution was created in whole or in part by me and I have the right to submit it under the open source license indicated in the file; or
> 1. The contribution is based upon previous work that, to the best of my knowledge, is covered under an appropriate open source license and I have the right under that license to submit that work with modifications, whether created in whole or in part by me, under the same open source license (unless I am permitted to submit under a different license), as indicated in the file; or
> 1. The contribution was provided directly to me by some other person who certified (1), (2) or (3) and I have not modified it.
> 1. I understand and agree that this project and the contribution are part of `Teaching Strategies` workspace and that a record of the contribution (including all personal information I submit with it, including my sign-off) is maintained indefinitely and may be redistributed consistent with this project or the open source license(s) involved.

## Community

1. `Frontend Developers` microsoft teams group
2. `Titans- UI Pod 1` microsoft teams channel

## Credits

Written by [yelleti](mailto:krishna.yelleti@teachingstrategies.com).

**Please feel free to adopt this guide in your own projects. Fork it wholesale or remix it for your needs.**

_Many of the ideas and prose for the statements in this document were based on or inspired by work from the following communities:_

- [frontend](https://gitlab-public.quanti.cz/humansis/web-platform/frontend/-/blob/develop/CONTRIBUTING.md?plain=0)
- [bms_front](https://github.com/ReliefApplications/bms_front/blob/dev/CONTRIBUTING.md?plain=1#community)

_We commend them for their efforts to facilitate collaboration in their projects._

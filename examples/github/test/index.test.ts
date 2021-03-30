import {
  OrderDirection,
  query,
  RepositoryOrderField,
  resolved,
} from '../src/gqless';
import assert from 'assert';
import { getFields, getArrayFields } from 'gqless';

test('works', async () => {
  expect(
    await resolved(() => {
      const user = query.user({
        login: 'PabloSzx',
      });

      assert(user, 'User Not Found');

      const repos = user.repositoriesContributedTo({
        first: 10,
        orderBy: {
          field: RepositoryOrderField.STARGAZERS,
          direction: OrderDirection.DESC,
        },
      });

      return {
        pageInfo: getFields(repos.pageInfo),
        nodes: getArrayFields(repos.nodes),
      };
    })
  ).toMatchInlineSnapshot(`
    Object {
      "nodes": Array [
        Object {
          "__typename": "Repository",
          "createdAt": "2016-10-05T23:32:51Z",
          "databaseId": 70107786,
          "deleteBranchOnMerge": true,
          "description": "The React Framework",
          "descriptionHTML": "<div>The React Framework</div>",
          "diskUsage": 59879,
          "forkCount": 11762,
          "hasIssuesEnabled": true,
          "hasProjectsEnabled": false,
          "hasWikiEnabled": false,
          "homepageUrl": "https://nextjs.org",
          "id": "MDEwOlJlcG9zaXRvcnk3MDEwNzc4Ng==",
          "isArchived": false,
          "isBlankIssuesEnabled": false,
          "isDisabled": false,
          "isEmpty": false,
          "isFork": false,
          "isInOrganization": true,
          "isLocked": false,
          "isMirror": false,
          "isPrivate": false,
          "isSecurityPolicyEnabled": true,
          "isTemplate": false,
          "isUserConfigurationRepository": false,
          "lockReason": null,
          "mergeCommitAllowed": false,
          "mirrorUrl": null,
          "name": "next.js",
          "nameWithOwner": "vercel/next.js",
          "openGraphImageUrl": "https://repository-images.githubusercontent.com/70107786/6532af00-82ea-11ea-9d1a-7fcded8ac5d3",
          "projectsResourcePath": "/vercel/next.js/projects",
          "projectsUrl": "https://github.com/vercel/next.js/projects",
          "pushedAt": "2021-03-30T20:34:48Z",
          "rebaseMergeAllowed": false,
          "resourcePath": "/vercel/next.js",
          "securityPolicyUrl": "https://github.com/vercel/next.js/security/policy",
          "squashMergeAllowed": true,
          "sshUrl": "git@github.com:vercel/next.js.git",
          "stargazerCount": 65047,
          "tempCloneToken": "",
          "updatedAt": "2021-03-30T22:47:18Z",
          "url": "https://github.com/vercel/next.js",
          "usesCustomOpenGraphImage": true,
          "viewerCanAdminister": false,
          "viewerCanCreateProjects": false,
          "viewerCanSubscribe": true,
          "viewerCanUpdateTopics": false,
          "viewerDefaultCommitEmail": "pablo.saez@hotmail.com",
          "viewerDefaultMergeMethod": "SQUASH",
          "viewerHasStarred": true,
          "viewerPermission": "READ",
          "viewerPossibleCommitEmails": Array [
            "pablo.saez@hotmail.com",
            "pablo.saez01@alumnos.uach.cl",
            "pablosaez1995@gmail.com",
          ],
          "viewerSubscription": null,
        },
        Object {
          "__typename": "Repository",
          "createdAt": "2012-10-05T16:39:45Z",
          "databaseId": 6093316,
          "deleteBranchOnMerge": false,
          "description": "The repository for high quality TypeScript type definitions.",
          "descriptionHTML": "<div>The repository for high quality TypeScript type definitions.</div>",
          "diskUsage": 669642,
          "forkCount": 24329,
          "hasIssuesEnabled": true,
          "hasProjectsEnabled": true,
          "hasWikiEnabled": true,
          "homepageUrl": "",
          "id": "MDEwOlJlcG9zaXRvcnk2MDkzMzE2",
          "isArchived": false,
          "isBlankIssuesEnabled": true,
          "isDisabled": false,
          "isEmpty": false,
          "isFork": false,
          "isInOrganization": true,
          "isLocked": false,
          "isMirror": false,
          "isPrivate": false,
          "isSecurityPolicyEnabled": false,
          "isTemplate": false,
          "isUserConfigurationRepository": false,
          "lockReason": null,
          "mergeCommitAllowed": false,
          "mirrorUrl": null,
          "name": "DefinitelyTyped",
          "nameWithOwner": "DefinitelyTyped/DefinitelyTyped",
          "openGraphImageUrl": "https://avatars.githubusercontent.com/u/3637556?s=400&v=4",
          "projectsResourcePath": "/DefinitelyTyped/DefinitelyTyped/projects",
          "projectsUrl": "https://github.com/DefinitelyTyped/DefinitelyTyped/projects",
          "pushedAt": "2021-03-30T23:16:33Z",
          "rebaseMergeAllowed": false,
          "resourcePath": "/DefinitelyTyped/DefinitelyTyped",
          "securityPolicyUrl": null,
          "squashMergeAllowed": true,
          "sshUrl": "git@github.com:DefinitelyTyped/DefinitelyTyped.git",
          "stargazerCount": 32958,
          "tempCloneToken": "",
          "updatedAt": "2021-03-30T23:16:58Z",
          "url": "https://github.com/DefinitelyTyped/DefinitelyTyped",
          "usesCustomOpenGraphImage": false,
          "viewerCanAdminister": false,
          "viewerCanCreateProjects": false,
          "viewerCanSubscribe": true,
          "viewerCanUpdateTopics": false,
          "viewerDefaultCommitEmail": "pablo.saez@hotmail.com",
          "viewerDefaultMergeMethod": "SQUASH",
          "viewerHasStarred": true,
          "viewerPermission": "READ",
          "viewerPossibleCommitEmails": Array [
            "pablo.saez@hotmail.com",
            "pablo.saez01@alumnos.uach.cl",
            "pablosaez1995@gmail.com",
          ],
          "viewerSubscription": "UNSUBSCRIBED",
        },
        Object {
          "__typename": "Repository",
          "createdAt": "2016-09-28T19:10:14Z",
          "databaseId": 69495170,
          "deleteBranchOnMerge": true,
          "description": "Fast and low overhead web framework, for Node.js",
          "descriptionHTML": "<div>Fast and low overhead web framework, for Node.js</div>",
          "diskUsage": 4458,
          "forkCount": 1323,
          "hasIssuesEnabled": true,
          "hasProjectsEnabled": true,
          "hasWikiEnabled": false,
          "homepageUrl": "https://www.fastify.io",
          "id": "MDEwOlJlcG9zaXRvcnk2OTQ5NTE3MA==",
          "isArchived": false,
          "isBlankIssuesEnabled": false,
          "isDisabled": false,
          "isEmpty": false,
          "isFork": false,
          "isInOrganization": true,
          "isLocked": false,
          "isMirror": false,
          "isPrivate": false,
          "isSecurityPolicyEnabled": true,
          "isTemplate": false,
          "isUserConfigurationRepository": false,
          "lockReason": null,
          "mergeCommitAllowed": false,
          "mirrorUrl": null,
          "name": "fastify",
          "nameWithOwner": "fastify/fastify",
          "openGraphImageUrl": "https://repository-images.githubusercontent.com/69495170/8125e100-61bc-11e9-8d9f-eb01f522f962",
          "projectsResourcePath": "/fastify/fastify/projects",
          "projectsUrl": "https://github.com/fastify/fastify/projects",
          "pushedAt": "2021-03-30T15:58:58Z",
          "rebaseMergeAllowed": true,
          "resourcePath": "/fastify/fastify",
          "securityPolicyUrl": "https://github.com/fastify/fastify/security/policy",
          "squashMergeAllowed": true,
          "sshUrl": "git@github.com:fastify/fastify.git",
          "stargazerCount": 18082,
          "tempCloneToken": "",
          "updatedAt": "2021-03-30T21:42:52Z",
          "url": "https://github.com/fastify/fastify",
          "usesCustomOpenGraphImage": true,
          "viewerCanAdminister": false,
          "viewerCanCreateProjects": false,
          "viewerCanSubscribe": true,
          "viewerCanUpdateTopics": false,
          "viewerDefaultCommitEmail": "pablosaez1995@gmail.com",
          "viewerDefaultMergeMethod": "SQUASH",
          "viewerHasStarred": true,
          "viewerPermission": "READ",
          "viewerPossibleCommitEmails": Array [
            "pablo.saez@hotmail.com",
            "pablo.saez01@alumnos.uach.cl",
            "pablosaez1995@gmail.com",
          ],
          "viewerSubscription": "UNSUBSCRIBED",
        },
        Object {
          "__typename": "Repository",
          "createdAt": "2019-08-17T14:27:54Z",
          "databaseId": 202890778,
          "deleteBranchOnMerge": true,
          "description": "⚡️ Simple, Modular & Accessible UI Components for your React Applications",
          "descriptionHTML": "<div>
    <g-emoji class=\\"g-emoji\\" alias=\\"zap\\" fallback-src=\\"https://github.githubassets.com/images/icons/emoji/unicode/26a1.png\\">⚡️</g-emoji> Simple, Modular &amp; Accessible UI Components for your React Applications</div>",
          "diskUsage": 87439,
          "forkCount": 1303,
          "hasIssuesEnabled": true,
          "hasProjectsEnabled": true,
          "hasWikiEnabled": false,
          "homepageUrl": "https://chakra-ui.com",
          "id": "MDEwOlJlcG9zaXRvcnkyMDI4OTA3Nzg=",
          "isArchived": false,
          "isBlankIssuesEnabled": false,
          "isDisabled": false,
          "isEmpty": false,
          "isFork": false,
          "isInOrganization": true,
          "isLocked": false,
          "isMirror": false,
          "isPrivate": false,
          "isSecurityPolicyEnabled": false,
          "isTemplate": false,
          "isUserConfigurationRepository": false,
          "lockReason": null,
          "mergeCommitAllowed": true,
          "mirrorUrl": null,
          "name": "chakra-ui",
          "nameWithOwner": "chakra-ui/chakra-ui",
          "openGraphImageUrl": "https://repository-images.githubusercontent.com/202890778/85840180-ec15-11e9-883c-82d28e34babc",
          "projectsResourcePath": "/chakra-ui/chakra-ui/projects",
          "projectsUrl": "https://github.com/chakra-ui/chakra-ui/projects",
          "pushedAt": "2021-03-30T21:04:21Z",
          "rebaseMergeAllowed": true,
          "resourcePath": "/chakra-ui/chakra-ui",
          "securityPolicyUrl": null,
          "squashMergeAllowed": true,
          "sshUrl": "git@github.com:chakra-ui/chakra-ui.git",
          "stargazerCount": 16470,
          "tempCloneToken": "",
          "updatedAt": "2021-03-30T22:14:57Z",
          "url": "https://github.com/chakra-ui/chakra-ui",
          "usesCustomOpenGraphImage": true,
          "viewerCanAdminister": false,
          "viewerCanCreateProjects": false,
          "viewerCanSubscribe": true,
          "viewerCanUpdateTopics": false,
          "viewerDefaultCommitEmail": "pablosaez1995@gmail.com",
          "viewerDefaultMergeMethod": "MERGE",
          "viewerHasStarred": true,
          "viewerPermission": "READ",
          "viewerPossibleCommitEmails": Array [
            "pablo.saez@hotmail.com",
            "pablo.saez01@alumnos.uach.cl",
            "pablosaez1995@gmail.com",
          ],
          "viewerSubscription": null,
        },
        Object {
          "__typename": "Repository",
          "createdAt": "2020-07-17T07:59:00Z",
          "databaseId": 280363952,
          "deleteBranchOnMerge": false,
          "description": "Umami is a simple, fast, website analytics alternative to Google Analytics.",
          "descriptionHTML": "<div>Umami is a simple, fast, website analytics alternative to Google Analytics.</div>",
          "diskUsage": 2749,
          "forkCount": 544,
          "hasIssuesEnabled": true,
          "hasProjectsEnabled": true,
          "hasWikiEnabled": true,
          "homepageUrl": "https://umami.is",
          "id": "MDEwOlJlcG9zaXRvcnkyODAzNjM5NTI=",
          "isArchived": false,
          "isBlankIssuesEnabled": true,
          "isDisabled": false,
          "isEmpty": false,
          "isFork": false,
          "isInOrganization": false,
          "isLocked": false,
          "isMirror": false,
          "isPrivate": false,
          "isSecurityPolicyEnabled": false,
          "isTemplate": false,
          "isUserConfigurationRepository": false,
          "lockReason": null,
          "mergeCommitAllowed": true,
          "mirrorUrl": null,
          "name": "umami",
          "nameWithOwner": "mikecao/umami",
          "openGraphImageUrl": "https://repository-images.githubusercontent.com/280363952/82f40500-003c-11eb-98a8-8652191d17fc",
          "projectsResourcePath": "/mikecao/umami/projects",
          "projectsUrl": "https://github.com/mikecao/umami/projects",
          "pushedAt": "2021-03-30T11:04:26Z",
          "rebaseMergeAllowed": true,
          "resourcePath": "/mikecao/umami",
          "securityPolicyUrl": null,
          "squashMergeAllowed": true,
          "sshUrl": "git@github.com:mikecao/umami.git",
          "stargazerCount": 6568,
          "tempCloneToken": "",
          "updatedAt": "2021-03-30T21:52:21Z",
          "url": "https://github.com/mikecao/umami",
          "usesCustomOpenGraphImage": true,
          "viewerCanAdminister": false,
          "viewerCanCreateProjects": false,
          "viewerCanSubscribe": true,
          "viewerCanUpdateTopics": false,
          "viewerDefaultCommitEmail": "pablosaez1995@gmail.com",
          "viewerDefaultMergeMethod": "MERGE",
          "viewerHasStarred": true,
          "viewerPermission": "READ",
          "viewerPossibleCommitEmails": Array [
            "pablo.saez@hotmail.com",
            "pablo.saez01@alumnos.uach.cl",
            "pablosaez1995@gmail.com",
          ],
          "viewerSubscription": null,
        },
        Object {
          "__typename": "Repository",
          "createdAt": "2016-12-05T19:15:11Z",
          "databaseId": 75657790,
          "deleteBranchOnMerge": false,
          "description": "A tool for generating code based on a GraphQL schema and GraphQL operations (query/mutation/subscription), with flexible support for custom plugins. ",
          "descriptionHTML": "<div>A tool for generating code based on a GraphQL schema and GraphQL operations (query/mutation/subscription), with flexible support for custom plugins. </div>",
          "diskUsage": 72650,
          "forkCount": 659,
          "hasIssuesEnabled": true,
          "hasProjectsEnabled": false,
          "hasWikiEnabled": false,
          "homepageUrl": "https://graphql-code-generator.com",
          "id": "MDEwOlJlcG9zaXRvcnk3NTY1Nzc5MA==",
          "isArchived": false,
          "isBlankIssuesEnabled": false,
          "isDisabled": false,
          "isEmpty": false,
          "isFork": false,
          "isInOrganization": false,
          "isLocked": false,
          "isMirror": false,
          "isPrivate": false,
          "isSecurityPolicyEnabled": false,
          "isTemplate": false,
          "isUserConfigurationRepository": false,
          "lockReason": null,
          "mergeCommitAllowed": false,
          "mirrorUrl": null,
          "name": "graphql-code-generator",
          "nameWithOwner": "dotansimha/graphql-code-generator",
          "openGraphImageUrl": "https://repository-images.githubusercontent.com/75657790/08db0980-c050-11e9-9924-d343fd5a3ddd",
          "projectsResourcePath": "/dotansimha/graphql-code-generator/projects",
          "projectsUrl": "https://github.com/dotansimha/graphql-code-generator/projects",
          "pushedAt": "2021-03-30T21:15:52Z",
          "rebaseMergeAllowed": false,
          "resourcePath": "/dotansimha/graphql-code-generator",
          "securityPolicyUrl": null,
          "squashMergeAllowed": true,
          "sshUrl": "git@github.com:dotansimha/graphql-code-generator.git",
          "stargazerCount": 6562,
          "tempCloneToken": "",
          "updatedAt": "2021-03-30T21:15:53Z",
          "url": "https://github.com/dotansimha/graphql-code-generator",
          "usesCustomOpenGraphImage": true,
          "viewerCanAdminister": false,
          "viewerCanCreateProjects": false,
          "viewerCanSubscribe": true,
          "viewerCanUpdateTopics": false,
          "viewerDefaultCommitEmail": "pablosaez1995@gmail.com",
          "viewerDefaultMergeMethod": "SQUASH",
          "viewerHasStarred": true,
          "viewerPermission": "READ",
          "viewerPossibleCommitEmails": Array [
            "pablo.saez@hotmail.com",
            "pablo.saez01@alumnos.uach.cl",
            "pablosaez1995@gmail.com",
          ],
          "viewerSubscription": "UNSUBSCRIBED",
        },
        Object {
          "__typename": "Repository",
          "createdAt": "2017-03-25T21:08:30Z",
          "databaseId": 86188653,
          "deleteBranchOnMerge": true,
          "description": "✨⚡️ A beautiful feature-rich GraphQL Client for all platforms.",
          "descriptionHTML": "<div>
    <g-emoji class=\\"g-emoji\\" alias=\\"sparkles\\" fallback-src=\\"https://github.githubassets.com/images/icons/emoji/unicode/2728.png\\">✨</g-emoji><g-emoji class=\\"g-emoji\\" alias=\\"zap\\" fallback-src=\\"https://github.githubassets.com/images/icons/emoji/unicode/26a1.png\\">⚡️</g-emoji> A beautiful feature-rich GraphQL Client for all platforms.</div>",
          "diskUsage": 25894,
          "forkCount": 136,
          "hasIssuesEnabled": true,
          "hasProjectsEnabled": true,
          "hasWikiEnabled": true,
          "homepageUrl": "https://altair.sirmuel.design/",
          "id": "MDEwOlJlcG9zaXRvcnk4NjE4ODY1Mw==",
          "isArchived": false,
          "isBlankIssuesEnabled": true,
          "isDisabled": false,
          "isEmpty": false,
          "isFork": false,
          "isInOrganization": false,
          "isLocked": false,
          "isMirror": false,
          "isPrivate": false,
          "isSecurityPolicyEnabled": true,
          "isTemplate": false,
          "isUserConfigurationRepository": false,
          "lockReason": null,
          "mergeCommitAllowed": true,
          "mirrorUrl": null,
          "name": "altair",
          "nameWithOwner": "imolorhe/altair",
          "openGraphImageUrl": "https://repository-images.githubusercontent.com/86188653/dca14d00-9d6f-11e9-9542-f3b7ae7f4bc7",
          "projectsResourcePath": "/imolorhe/altair/projects",
          "projectsUrl": "https://github.com/imolorhe/altair/projects",
          "pushedAt": "2021-03-27T01:03:04Z",
          "rebaseMergeAllowed": true,
          "resourcePath": "/imolorhe/altair",
          "securityPolicyUrl": "https://github.com/imolorhe/altair/security/policy",
          "squashMergeAllowed": true,
          "sshUrl": "git@github.com:imolorhe/altair.git",
          "stargazerCount": 3196,
          "tempCloneToken": "",
          "updatedAt": "2021-03-30T15:53:14Z",
          "url": "https://github.com/imolorhe/altair",
          "usesCustomOpenGraphImage": true,
          "viewerCanAdminister": false,
          "viewerCanCreateProjects": false,
          "viewerCanSubscribe": true,
          "viewerCanUpdateTopics": false,
          "viewerDefaultCommitEmail": "pablosaez1995@gmail.com",
          "viewerDefaultMergeMethod": "MERGE",
          "viewerHasStarred": true,
          "viewerPermission": "READ",
          "viewerPossibleCommitEmails": Array [
            "pablo.saez@hotmail.com",
            "pablo.saez01@alumnos.uach.cl",
            "pablosaez1995@gmail.com",
          ],
          "viewerSubscription": "UNSUBSCRIBED",
        },
        Object {
          "__typename": "Repository",
          "createdAt": "2019-01-30T03:14:23Z",
          "databaseId": 168271241,
          "deleteBranchOnMerge": false,
          "description": "a GraphQL client built for rapid iteration.",
          "descriptionHTML": "<div>a GraphQL client built for rapid iteration.</div>",
          "diskUsage": 8023,
          "forkCount": 38,
          "hasIssuesEnabled": true,
          "hasProjectsEnabled": true,
          "hasWikiEnabled": false,
          "homepageUrl": "https://gqless.com",
          "id": "MDEwOlJlcG9zaXRvcnkxNjgyNzEyNDE=",
          "isArchived": false,
          "isBlankIssuesEnabled": true,
          "isDisabled": false,
          "isEmpty": false,
          "isFork": false,
          "isInOrganization": true,
          "isLocked": false,
          "isMirror": false,
          "isPrivate": false,
          "isSecurityPolicyEnabled": false,
          "isTemplate": false,
          "isUserConfigurationRepository": false,
          "lockReason": null,
          "mergeCommitAllowed": true,
          "mirrorUrl": null,
          "name": "gqless",
          "nameWithOwner": "gqless/gqless",
          "openGraphImageUrl": "https://repository-images.githubusercontent.com/168271241/10f11880-8ba6-11eb-8817-8d4dbe79a822",
          "projectsResourcePath": "/gqless/gqless/projects",
          "projectsUrl": "https://github.com/gqless/gqless/projects",
          "pushedAt": "2021-03-30T17:58:52Z",
          "rebaseMergeAllowed": false,
          "resourcePath": "/gqless/gqless",
          "securityPolicyUrl": null,
          "squashMergeAllowed": true,
          "sshUrl": "git@github.com:gqless/gqless.git",
          "stargazerCount": 2934,
          "tempCloneToken": "",
          "updatedAt": "2021-03-30T17:58:55Z",
          "url": "https://github.com/gqless/gqless",
          "usesCustomOpenGraphImage": true,
          "viewerCanAdminister": true,
          "viewerCanCreateProjects": true,
          "viewerCanSubscribe": true,
          "viewerCanUpdateTopics": true,
          "viewerDefaultCommitEmail": "pablosaez1995@gmail.com",
          "viewerDefaultMergeMethod": "MERGE",
          "viewerHasStarred": true,
          "viewerPermission": "ADMIN",
          "viewerPossibleCommitEmails": Array [
            "pablo.saez@hotmail.com",
            "pablo.saez01@alumnos.uach.cl",
            "pablosaez1995@gmail.com",
          ],
          "viewerSubscription": "SUBSCRIBED",
        },
        Object {
          "__typename": "Repository",
          "createdAt": "2014-04-16T08:08:37Z",
          "databaseId": 18831920,
          "deleteBranchOnMerge": false,
          "description": "Self-hosted, Node.js based analytics tool for those who care about privacy.",
          "descriptionHTML": "<div>Self-hosted, Node.js based analytics tool for those who care about privacy.</div>",
          "diskUsage": 5653,
          "forkCount": 141,
          "hasIssuesEnabled": true,
          "hasProjectsEnabled": false,
          "hasWikiEnabled": false,
          "homepageUrl": "https://ackee.electerious.com",
          "id": "MDEwOlJlcG9zaXRvcnkxODgzMTkyMA==",
          "isArchived": false,
          "isBlankIssuesEnabled": true,
          "isDisabled": false,
          "isEmpty": false,
          "isFork": false,
          "isInOrganization": false,
          "isLocked": false,
          "isMirror": false,
          "isPrivate": false,
          "isSecurityPolicyEnabled": false,
          "isTemplate": false,
          "isUserConfigurationRepository": false,
          "lockReason": null,
          "mergeCommitAllowed": true,
          "mirrorUrl": null,
          "name": "Ackee",
          "nameWithOwner": "electerious/Ackee",
          "openGraphImageUrl": "https://repository-images.githubusercontent.com/18831920/db1a3580-c5f8-11e9-9405-d570093475aa",
          "projectsResourcePath": "/electerious/Ackee/projects",
          "projectsUrl": "https://github.com/electerious/Ackee/projects",
          "pushedAt": "2021-03-20T12:36:52Z",
          "rebaseMergeAllowed": true,
          "resourcePath": "/electerious/Ackee",
          "securityPolicyUrl": null,
          "squashMergeAllowed": true,
          "sshUrl": "git@github.com:electerious/Ackee.git",
          "stargazerCount": 2457,
          "tempCloneToken": "",
          "updatedAt": "2021-03-30T20:26:54Z",
          "url": "https://github.com/electerious/Ackee",
          "usesCustomOpenGraphImage": true,
          "viewerCanAdminister": false,
          "viewerCanCreateProjects": false,
          "viewerCanSubscribe": true,
          "viewerCanUpdateTopics": false,
          "viewerDefaultCommitEmail": "pablosaez1995@gmail.com",
          "viewerDefaultMergeMethod": "MERGE",
          "viewerHasStarred": false,
          "viewerPermission": "READ",
          "viewerPossibleCommitEmails": Array [
            "pablo.saez@hotmail.com",
            "pablo.saez01@alumnos.uach.cl",
            "pablosaez1995@gmail.com",
          ],
          "viewerSubscription": "UNSUBSCRIBED",
        },
        Object {
          "__typename": "Repository",
          "createdAt": "2017-02-27T11:26:55Z",
          "databaseId": 83302827,
          "deleteBranchOnMerge": false,
          "description": "🎲 Mock or extend your GraphQL API with faked data. No coding required.",
          "descriptionHTML": "<div>
    <g-emoji class=\\"g-emoji\\" alias=\\"game_die\\" fallback-src=\\"https://github.githubassets.com/images/icons/emoji/unicode/1f3b2.png\\">🎲</g-emoji> Mock or extend your GraphQL API with faked data. No coding required.</div>",
          "diskUsage": 2791,
          "forkCount": 179,
          "hasIssuesEnabled": true,
          "hasProjectsEnabled": true,
          "hasWikiEnabled": true,
          "homepageUrl": "",
          "id": "MDEwOlJlcG9zaXRvcnk4MzMwMjgyNw==",
          "isArchived": false,
          "isBlankIssuesEnabled": true,
          "isDisabled": false,
          "isEmpty": false,
          "isFork": false,
          "isInOrganization": true,
          "isLocked": false,
          "isMirror": false,
          "isPrivate": false,
          "isSecurityPolicyEnabled": false,
          "isTemplate": false,
          "isUserConfigurationRepository": false,
          "lockReason": null,
          "mergeCommitAllowed": true,
          "mirrorUrl": null,
          "name": "graphql-faker",
          "nameWithOwner": "APIs-guru/graphql-faker",
          "openGraphImageUrl": "https://avatars.githubusercontent.com/u/10975548?s=400&v=4",
          "projectsResourcePath": "/APIs-guru/graphql-faker/projects",
          "projectsUrl": "https://github.com/APIs-guru/graphql-faker/projects",
          "pushedAt": "2021-03-23T14:46:29Z",
          "rebaseMergeAllowed": true,
          "resourcePath": "/APIs-guru/graphql-faker",
          "securityPolicyUrl": null,
          "squashMergeAllowed": true,
          "sshUrl": "git@github.com:APIs-guru/graphql-faker.git",
          "stargazerCount": 2124,
          "tempCloneToken": "",
          "updatedAt": "2021-03-30T20:38:45Z",
          "url": "https://github.com/APIs-guru/graphql-faker",
          "usesCustomOpenGraphImage": false,
          "viewerCanAdminister": false,
          "viewerCanCreateProjects": false,
          "viewerCanSubscribe": true,
          "viewerCanUpdateTopics": false,
          "viewerDefaultCommitEmail": "pablosaez1995@gmail.com",
          "viewerDefaultMergeMethod": "MERGE",
          "viewerHasStarred": false,
          "viewerPermission": "READ",
          "viewerPossibleCommitEmails": Array [
            "pablo.saez@hotmail.com",
            "pablo.saez01@alumnos.uach.cl",
            "pablosaez1995@gmail.com",
          ],
          "viewerSubscription": "UNSUBSCRIBED",
        },
      ],
      "pageInfo": Object {
        "__typename": "PageInfo",
        "endCursor": "Y3Vyc29yOnYyOpLNCEzOBPcZqw==",
        "hasNextPage": true,
        "hasPreviousPage": false,
        "startCursor": "Y3Vyc29yOnYyOpLN_hfOBC3Cig==",
      },
    }
  `);
});

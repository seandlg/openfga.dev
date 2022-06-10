"use strict";(self.webpackChunkopenfga_dev=self.webpackChunkopenfga_dev||[]).push([[7571],{82428:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return d},default:function(){return h},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return k}});var n=a(87462),i=a(63366),l=(a(67294),a(3905)),o=a(6737),r=a(65488),p=a(85162),s=["components"],u={title:"Update Relationship Tuples",sidebar_position:3,slug:"/integration/update-tuples"},d="Update Relationship Tuples",c={unversionedId:"content/integration/update-tuples",id:"content/integration/update-tuples",title:"Update Relationship Tuples",description:"This section will illustrate how to update .",source:"@site/docs/content/integration/update-tuples.mdx",sourceDirName:"content/integration",slug:"/integration/update-tuples",permalink:"/integration/update-tuples",draft:!1,editUrl:"https://github.com/openfga/openfga.dev/edit/main/docs/content/integration/update-tuples.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Update Relationship Tuples",sidebar_position:3,slug:"/integration/update-tuples"},sidebar:"docs",previous:{title:"Setup SDK Client for Store",permalink:"/integration/setup-sdk-client"},next:{title:"Perform a Check",permalink:"/integration/perform-check"}},m={},k=[{value:"Before you start",id:"before-you-start",level:2},{value:"Step by Step",id:"step-by-step",level:2},{value:"01. Configure the <ProductName format={ProductNameFormat.ShortForm}/> API client",id:"01-configure-the--api-client",level:3},{value:"02. Calling Write API to Add New Relationship Tuples",id:"02-calling-write-api-to-add-new-relationship-tuples",level:3},{value:"03. Calling Write API to Delete Relationship Tuples",id:"03-calling-write-api-to-delete-relationship-tuples",level:3},{value:"Related Sections",id:"related-sections",level:2}],g={toc:k};function h(e){var t=e.components,a=(0,i.Z)(e,s);return(0,l.kt)("wrapper",(0,n.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"update-relationship-tuples"},"Update Relationship Tuples"),(0,l.kt)(o.AH,{mdxType:"DocumentationNotice"}),(0,l.kt)("p",null,"This section will illustrate how to update ",(0,l.kt)("em",{parentName:"p"},(0,l.kt)(o.uH,{section:"what-is-a-relationship-tuple",linkName:"relationship tuples",mdxType:"ProductConcept"})),"."),(0,l.kt)("h2",{id:"before-you-start"},"Before you start"),(0,l.kt)(r.Z,{groupId:"languages",mdxType:"Tabs"},[o.eU.JS_SDK,o.eU.GO_SDK,o.eU.DOTNET_SDK].map((function(e){return(0,l.kt)(p.Z,{value:e,label:o.UB.get(e),mdxType:"TabItem"},(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)(o.YY,{mdxType:"SdkSetupPrerequisite"})),(0,l.kt)("li",{parentName:"ol"},"You have ",(0,l.kt)("a",{parentName:"li",href:"/integration/install-sdk"},"installed the SDK"),"."),(0,l.kt)("li",{parentName:"ol"},"You have ",(0,l.kt)("a",{parentName:"li",href:"../modeling"},"configured the ",(0,l.kt)("em",{parentName:"a"},"authorization model")),"."),(0,l.kt)("li",{parentName:"ol"},"You have loaded ",(0,l.kt)("inlineCode",{parentName:"li"},"FGA_ENVIRONMENT"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"FGA_STORE_ID"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"FGA_CLIENT_ID")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"FGA_CLIENT_SECRET")," as environment variables.")))})),(0,l.kt)(p.Z,{value:o.eU.CURL,label:o.UB.get(o.eU.CURL),mdxType:"TabItem"},(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)(o.YY,{mdxType:"SdkSetupPrerequisite"})),(0,l.kt)("li",{parentName:"ol"},"You have ",(0,l.kt)("a",{parentName:"li",href:"../modeling"},"configured the ",(0,l.kt)("em",{parentName:"a"},"authorization model")),"."),(0,l.kt)("li",{parentName:"ol"},"You have loaded ",(0,l.kt)("inlineCode",{parentName:"li"},"FGA_ENVIRONMENT"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"FGA_BEARER_TOKEN")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"FGA_STORE_ID")," as environment variables.")))),(0,l.kt)("h2",{id:"step-by-step"},"Step by Step"),(0,l.kt)("p",null,"Assume that you want to add user ",(0,l.kt)("inlineCode",{parentName:"p"},"anne")," to have relationship ",(0,l.kt)("inlineCode",{parentName:"p"},"reader")," with object ",(0,l.kt)("inlineCode",{parentName:"p"},"document:Z")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json5"},"{\n  user: 'anne',\n  relation: 'reader',\n  object: 'document:Z',\n}\n")),(0,l.kt)("h3",{id:"01-configure-the--api-client"},"01. Configure the ",(0,l.kt)(o.rZ,{format:o.v7.ShortForm,mdxType:"ProductName"})," API client"),(0,l.kt)("p",null,"Before calling the write API, you will need to configure the API client."),(0,l.kt)(r.Z,{groupId:"languages",mdxType:"Tabs"},(0,l.kt)(p.Z,{value:o.eU.JS_SDK,label:o.UB.get(o.eU.JS_SDK),mdxType:"TabItem"},(0,l.kt)(o.j3,{lang:o.eU.JS_SDK,mdxType:"SdkSetupHeader"})),(0,l.kt)(p.Z,{value:o.eU.GO_SDK,label:o.UB.get(o.eU.GO_SDK),mdxType:"TabItem"},(0,l.kt)(o.j3,{lang:o.eU.GO_SDK,mdxType:"SdkSetupHeader"})),(0,l.kt)(p.Z,{value:o.eU.DOTNET_SDK,label:o.UB.get(o.eU.DOTNET_SDK),mdxType:"TabItem"},(0,l.kt)(o.j3,{lang:o.eU.DOTNET_SDK,mdxType:"SdkSetupHeader"})),(0,l.kt)(p.Z,{value:o.eU.CURL,label:o.UB.get(o.eU.CURL),mdxType:"TabItem"},(0,l.kt)("p",null,"To obtain the ",(0,l.kt)("a",{parentName:"p",href:"https://auth0.com/docs/authorization/flows/call-your-api-using-the-client-credentials-flow"},"access token"),":"),(0,l.kt)(o.j3,{lang:o.eU.CURL,mdxType:"SdkSetupHeader"}))),(0,l.kt)("h3",{id:"02-calling-write-api-to-add-new-relationship-tuples"},"02. Calling Write API to Add New Relationship Tuples"),(0,l.kt)("p",null,"To add the relationship tuples, we can invoke the write API."),(0,l.kt)(o.Gb,{relationshipTuples:[{user:"anne",relation:"reader",object:"document:Z"}],skipSetup:!0,allowedLanguages:[o.eU.JS_SDK,o.eU.GO_SDK,o.eU.DOTNET_SDK,o.eU.CURL],mdxType:"WriteRequestViewer"}),(0,l.kt)("h3",{id:"03-calling-write-api-to-delete-relationship-tuples"},"03. Calling Write API to Delete Relationship Tuples"),(0,l.kt)("p",null,"To delete relationship tuples, we can invoke the write API."),(0,l.kt)("p",null,"Assume that you want to delete user ",(0,l.kt)("inlineCode",{parentName:"p"},"anne"),"'s ",(0,l.kt)("inlineCode",{parentName:"p"},"reader")," relationship with object ",(0,l.kt)("inlineCode",{parentName:"p"},"document:Z")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json5"},"{\n  user: 'anne',\n  relation: 'reader',\n  object: 'document:Z',\n}\n")),(0,l.kt)(o.Gb,{deleteRelationshipTuples:[{user:"anne",relation:"reader",object:"document:Z"}],skipSetup:!0,allowedLanguages:[o.eU.JS_SDK,o.eU.GO_SDK,o.eU.DOTNET_SDK,o.eU.CURL],mdxType:"WriteRequestViewer"}),(0,l.kt)("h2",{id:"related-sections"},"Related Sections"),(0,l.kt)(o.$q,{description:"Check the following sections for more on how to write your authorization data",relatedLinks:[{title:"Managing User Access",description:"Learn about how to give a user access to a particular object.",link:"/writing-data/managing-user-access",id:"../writing-data/managing-user-access.mdx"},{title:"Managing Group Access",description:"Learn about how to give a group of users access to a particular object.",link:"/writing-data/managing-group-access",id:"../writing-data/managing-group-access.mdx"},{title:"Transactional Writes",description:"Learn about how to update multiple relations within the same API call.",link:"/writing-data/transactional-writes",id:"../writing-data/transactional-writes.mdx"}],mdxType:"RelatedSection"}))}h.isMDXComponent=!0}}]);
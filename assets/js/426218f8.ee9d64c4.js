"use strict";(self.webpackChunkopenfga_dev=self.webpackChunkopenfga_dev||[]).push([[9367],{37247:function(e,t,o){o.r(t),o.d(t,{assets:function(){return u},contentTitle:function(){return d},default:function(){return h},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return m}});var n=o(87462),i=o(63366),a=(o(67294),o(3905)),s=o(6737),r=["components"],l={sidebar_position:8,slug:"/modeling/basics/blocklists"},d="Modeling Blocklists",c={unversionedId:"content/modeling/basics/blocklists",id:"content/modeling/basics/blocklists",title:"Modeling Blocklists",description:"In this guide you'll see how to model preventing users from accessing objects using . For example, blocking users from accessing a document, even if it has been already shared with them.",source:"@site/docs/content/modeling/basics/blocklists.mdx",sourceDirName:"content/modeling/basics",slug:"/modeling/basics/blocklists",permalink:"/modeling/basics/blocklists",draft:!1,editUrl:"https://github.com/openfga/openfga.dev/edit/main/docs/content/modeling/basics/blocklists.mdx",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8,slug:"/modeling/basics/blocklists"},sidebar:"docs",previous:{title:"Modeling Parent-Child Objects",permalink:"/modeling/basics/parent-child"},next:{title:"Modeling Public Access",permalink:"/modeling/basics/public-access"}},u={},m=[{value:"Before you start",id:"before-you-start",level:2},{value:"Modeling User Groups",id:"modeling-user-groups",level:3},{value:"<ProductName format={ProductNameFormat.ShortForm} /> Concepts",id:"-concepts",level:3},{value:"Step by Step",id:"step-by-step",level:2},{value:"01. Modify our model so users can be blocked from accessing a document",id:"01-modify-our-model-so-users-can-be-blocked-from-accessing-a-document",level:3},{value:"02. Modify our model so users who are blocked can no longer edit the document",id:"02-modify-our-model-so-users-who-are-blocked-can-no-longer-edit-the-document",level:3},{value:"03. Verify our solution works",id:"03-verify-our-solution-works",level:3},{value:"a. Indicate that Carl is blocked from the planning document",id:"a-indicate-that-carl-is-blocked-from-the-planning-document",level:4},{value:"b. Carl (now blocked) can no longer edit the document",id:"b-carl-now-blocked-can-no-longer-edit-the-document",level:4},{value:"c. Becky still has edit access",id:"c-becky-still-has-edit-access",level:4},{value:"Related Sections",id:"related-sections",level:2}],p={toc:m};function h(e){var t=e.components,o=(0,i.Z)(e,r);return(0,a.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"modeling-blocklists"},"Modeling Blocklists"),(0,a.kt)(s.AH,{mdxType:"DocumentationNotice"}),(0,a.kt)("p",null,"In this guide you'll see how to model preventing users from accessing objects using ",(0,a.kt)(s.rZ,{format:s.v7.ProductLink,mdxType:"ProductName"}),". For example, ",(0,a.kt)("inlineCode",{parentName:"p"},"blocking")," users from accessing a ",(0,a.kt)("inlineCode",{parentName:"p"},"document"),", even if it has been already shared with them."),(0,a.kt)(s.S1,{title:"When to use",appearance:"filled",description:(0,a.kt)("div",null,(0,a.kt)("p",null,"Exclusion is useful while building applications. You may need to support access patterns like granting access to some users, but excluding specific people or groups, similar to how users can block others from following them on social media, or prevent them from sharing documents on Google Drive."),(0,a.kt)("p",null,"This is useful when:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'Implementing the "blocking" feature, such as the profile blocking commonly present on social media platforms (e.g. Instagram and Twitter).'),(0,a.kt)("li",{parentName:"ul"},"Reduce a user's access if they are part of a particular group (e.g. restricting access to members who are also guests, or restricting access to users in a certain locality)."))),mdxType:"CardBox"}),(0,a.kt)("h2",{id:"before-you-start"},"Before you start"),(0,a.kt)("p",null,"Before you start this guide, make sure you're familiar with some ",(0,a.kt)(s.uH,{mdxType:"ProductConcept"})," and know how to develop the things listed below."),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("p",null,"You will start with the ",(0,a.kt)("em",{parentName:"p"},(0,a.kt)(s.uH,{section:"what-is-an-authorization-model",linkName:"authorization model",mdxType:"ProductConcept"}))," below, it represents a ",(0,a.kt)("inlineCode",{parentName:"p"},"document")," ",(0,a.kt)("em",{parentName:"p"},(0,a.kt)(s.uH,{section:"what-is-a-type",linkName:"type",mdxType:"ProductConcept"}))," that can have users ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)(s.uH,{section:"what-is-a-relation",linkName:"related",mdxType:"ProductConcept"}))," as ",(0,a.kt)("inlineCode",{parentName:"p"},"editor"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"team")," type that can have users related as ",(0,a.kt)("inlineCode",{parentName:"p"},"member"),"."),(0,a.kt)("p",null,"Let us also assume that we have a ",(0,a.kt)("inlineCode",{parentName:"p"},"document"),' called "planning", shared for editing within the product ',(0,a.kt)("inlineCode",{parentName:"p"},"team")," (comprised of becky and carl).")),(0,a.kt)(s.lG,{configuration:{type_definitions:[{type:"document",relations:{editor:{this:{}}}},{type:"team",relations:{member:{this:{}}}}]},mdxType:"AuthzModelSnippetViewer"}),(0,a.kt)("p",null,"The current state of the system is represented by the following relationship tuples being in the system already:"),(0,a.kt)(s.Wz,{relationshipTuples:[{_description:"Members of the product team can edit the planning document",user:"team:product#member",relation:"editor",object:"document:planning"},{_description:"Becky is a member of the product team",user:"becky",relation:"member",object:"team:product"},{_description:"Carl is a member of the product team",user:"carl",relation:"member",object:"team:product"}],mdxType:"RelationshipTuplesViewer"}),(0,a.kt)("hr",null),(0,a.kt)("p",null,"In addition, you will need to know the following:"),(0,a.kt)("h3",{id:"modeling-user-groups"},"Modeling User Groups"),(0,a.kt)("p",null,"You need to know how to add users to groups and grant groups access to resources. ",(0,a.kt)("a",{parentName:"p",href:"/modeling/basics/user-groups"},"Learn more \u2192")),(0,a.kt)("h3",{id:"-concepts"},(0,a.kt)(s.rZ,{format:s.v7.ShortForm,mdxType:"ProductName"})," Concepts"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A ",(0,a.kt)(s.uH,{section:"what-is-a-type",linkName:"Type",mdxType:"ProductConcept"}),": a class of objects that have similar characteristics"),(0,a.kt)("li",{parentName:"ul"},"A ",(0,a.kt)(s.uH,{section:"what-is-a-user",linkName:"User",mdxType:"ProductConcept"}),": an entity in the system that can be related to an object"),(0,a.kt)("li",{parentName:"ul"},"A ",(0,a.kt)(s.uH,{section:"what-is-a-relation",linkName:"Relation",mdxType:"ProductConcept"}),": is a string defined in the type definition of an authorization model that defines the possibility of a relationship between objects of this type and other users in the system"),(0,a.kt)("li",{parentName:"ul"},"An ",(0,a.kt)(s.uH,{section:"what-is-an-object",linkName:"Object",mdxType:"ProductConcept"}),": represents an entity in the system. Users' relationships to it can be define through relationship tuples and the authorization model"),(0,a.kt)("li",{parentName:"ul"},"A ",(0,a.kt)(s.uH,{section:"what-is-a-relationship-tuple",linkName:"Relationship Tuple",mdxType:"ProductConcept"}),": a grouping consisting of a user, a relation and an object stored in ",(0,a.kt)(s.rZ,{format:s.v7.ShortForm,mdxType:"ProductName"})),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/modeling/configuration-language#the-exclusion-operator"},"Exclusion Operator"),": the exclusion operator can be used to exclude certain usersets from being related to an object"))),(0,a.kt)(s.XQ,{mdxType:"Playground"}),(0,a.kt)("h2",{id:"step-by-step"},"Step by Step"),(0,a.kt)("p",null,"With the above authorization model and relationship tuples, ",(0,a.kt)(s.rZ,{format:s.v7.LongForm,mdxType:"ProductName"})," will correctly respond with ",(0,a.kt)("inlineCode",{parentName:"p"},'{"allowed":true}')," when ",(0,a.kt)(s.uH,{section:"what-is-a-check-request",linkName:"check",mdxType:"ProductConcept"})," is called to see if Carl and Becky can edit this ",(0,a.kt)("inlineCode",{parentName:"p"},"document"),"."),(0,a.kt)("p",null,"We can verify that by issuing two check requests:"),(0,a.kt)(s.uT,{user:"becky",relation:"editor",object:"document:planning",allowed:!0,mdxType:"CheckRequestViewer"}),(0,a.kt)(s.uT,{user:"carl",relation:"editor",object:"document:planning",allowed:!0,mdxType:"CheckRequestViewer"}),(0,a.kt)("p",null,"We want to share a document with the product team and also have the ability to deny certain users access, even if they have the document shared with them already. We can verify this by blocking Carl (who we have seen already has edit access) from editing the document."),(0,a.kt)("p",null,"In order to do that, we need to:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#01-modify-our-model-to-allow-indicating-that-users-can-be-blocked-from-accessing-a-document"},"Modify our model to allow indicating that users can be blocked from accessing a document")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#02-modify-our-model-to-indicate-that-users-who-are-blocked-can-no-longer-edit-the-document"},"Modify our model to indicate that users who are blocked can no longer edit the document")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#03-verify-that-our-solution-works"},"Verify that our solution works"),":")),(0,a.kt)("p",null,"a. ",(0,a.kt)("a",{parentName:"p",href:"#a-indicate-that-carl-is-blocked-from-the-planning-document"},"Indicate that Carl is blocked from the planning document")),(0,a.kt)("p",null,"b. ",(0,a.kt)("a",{parentName:"p",href:"#b-carl-now-blocked-can-no-longer-edit-the-document"},"Carl (now blocked) can no longer edit the document")),(0,a.kt)("p",null,"c. ",(0,a.kt)("a",{parentName:"p",href:"#c-becky-still-has-edit-access"},"Becky still has edit access")),(0,a.kt)("h3",{id:"01-modify-our-model-so-users-can-be-blocked-from-accessing-a-document"},"01. Modify our model so users can be blocked from accessing a document"),(0,a.kt)("p",null,'To allow users to be "blocked" from accessing a ',(0,a.kt)("inlineCode",{parentName:"p"},"document"),", we first need to allow this relation. We'll update our store model to add a ",(0,a.kt)("inlineCode",{parentName:"p"},"blocked")," ",(0,a.kt)(s.uH,{section:"what-is-a-relation",linkName:"relation",mdxType:"ProductConcept"})," to the ",(0,a.kt)("inlineCode",{parentName:"p"},"document")," type."),(0,a.kt)("p",null,"The authorization model becomes this:"),(0,a.kt)(s.lG,{configuration:{type_definitions:[{type:"document",relations:{blocked:{this:{}},editor:{this:{}}}},{type:"team",relations:{member:{this:{}}}}]},mdxType:"AuthzModelSnippetViewer"}),(0,a.kt)("p",null,"Now we can add relationship tuples indicating that a certain user is ",(0,a.kt)("inlineCode",{parentName:"p"},"blocked")," from editing a ",(0,a.kt)("inlineCode",{parentName:"p"},"document"),"."),(0,a.kt)("h3",{id:"02-modify-our-model-so-users-who-are-blocked-can-no-longer-edit-the-document"},"02. Modify our model so users who are blocked can no longer edit the document"),(0,a.kt)("p",null,"Now that we can mark users as ",(0,a.kt)("inlineCode",{parentName:"p"},"blocked")," from editing documents, we need to support denying the ",(0,a.kt)("inlineCode",{parentName:"p"},"editor")," relationship when a user is ",(0,a.kt)("inlineCode",{parentName:"p"},"blocked"),". We do that by modifying the relation definition of ",(0,a.kt)("inlineCode",{parentName:"p"},"editor"),", and making use of the ",(0,a.kt)("a",{parentName:"p",href:"/modeling/configuration-language#the-exclusion-operator"},(0,a.kt)("strong",{parentName:"a"},"the exclusion operator"))," to exclude the set of ",(0,a.kt)("inlineCode",{parentName:"p"},"blocked")," users, as we can see here:"),(0,a.kt)(s.lG,{configuration:{type_definitions:[{type:"document",relations:{blocked:{this:{}},editor:{difference:{base:{this:{}},subtract:{computedUserset:{relation:"blocked"}}}}}},{type:"team",relations:{member:{this:{}}}}]},mdxType:"AuthzModelSnippetViewer"}),(0,a.kt)("h3",{id:"03-verify-our-solution-works"},"03. Verify our solution works"),(0,a.kt)("p",null,"To check if our new model works, we'll add a relationship tuple with Carl as ",(0,a.kt)("inlineCode",{parentName:"p"},"blocked")," from ",(0,a.kt)("inlineCode",{parentName:"p"},"document:planning")," and then verify that Carl no longer has ",(0,a.kt)("inlineCode",{parentName:"p"},"editor")," access to that document."),(0,a.kt)("h4",{id:"a-indicate-that-carl-is-blocked-from-the-planning-document"},"a. Indicate that Carl is blocked from the planning document"),(0,a.kt)("p",null,"With our modified authorization model, we can indicate that Carl is blocked by adding this ",(0,a.kt)("em",{parentName:"p"},(0,a.kt)(s.uH,{section:"what-is-a-relationship-tuple",linkName:"relationship tuple",mdxType:"ProductConcept"})),"."),(0,a.kt)(s.Gb,{relationshipTuples:[{_description:"Carl is blocked from editing the planning document",user:"carl",relation:"blocked",object:"document:planning"}],mdxType:"WriteRequestViewer"}),(0,a.kt)("h4",{id:"b-carl-now-blocked-can-no-longer-edit-the-document"},"b. Carl (now blocked) can no longer edit the document"),(0,a.kt)("p",null,"We have modified the authorization model and added relationship tuples to indicate that Carl is ",(0,a.kt)("inlineCode",{parentName:"p"},"blocked"),". Now let's make sure our solution works as expected."),(0,a.kt)("p",null,"To check if Carl still has access to the document, we can issue a check request with Carl as the user."),(0,a.kt)(s.uT,{user:"carl",relation:"editor",object:"document:planning",allowed:!1,mdxType:"CheckRequestViewer"}),(0,a.kt)("p",null,"The response is ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),", so our solution is working as expected."),(0,a.kt)("h4",{id:"c-becky-still-has-edit-access"},"c. Becky still has edit access"),(0,a.kt)("p",null,"To check if Becky still has access to the document, we'll issue another check request with Becky as the user."),(0,a.kt)(s.uT,{user:"becky",relation:"editor",object:"document:planning",allowed:!0,mdxType:"CheckRequestViewer"}),(0,a.kt)("p",null,"The response is ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),", indicating our model change did not inadvertently deny access for users who have access but are not blocked."),(0,a.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},(0,a.kt)("strong",{parentName:"p"},"Note:")," When creating tuples for ",(0,a.kt)(s.rZ,{format:s.v7.LongForm,mdxType:"ProductName"})," make sure to use unique ids for each object and user within your application domain. We are using first names and human-readable identifiers to make this task easier to read."))),(0,a.kt)("h2",{id:"related-sections"},"Related Sections"),(0,a.kt)(s.$q,{description:"Check the following sections for more on how to model with {ProductName}.",relatedLinks:[{title:"Modeling: Getting Started",description:"Learn about how to get started with modeling.",link:"/modeling/getting-started",id:"../getting-started"},{title:"Configuration Language",description:"Learn about {ProductName} Configuration Language.",link:"/modeling/configuration-language",id:"../configuration-language"},{title:"Public Access",description:"Learn about model public access.",link:"/modeling/basics/public-access",id:"./public-access"}],mdxType:"RelatedSection"}))}h.isMDXComponent=!0}}]);
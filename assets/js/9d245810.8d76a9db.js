"use strict";(self.webpackChunkopenfga_dev=self.webpackChunkopenfga_dev||[]).push([[6272],{9254:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return g},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return m}});var a=n(87462),o=n(63366),i=(n(67294),n(3905)),r=n(80566),s=["components"],l={sidebar_position:1,slug:"/writing-data/managing-group-membership"},p="Managing Group Membership",d={unversionedId:"content/writing-data/managing-group-membership",id:"content/writing-data/managing-group-membership",title:"Managing Group Membership",description:"In this guide you will learn how to update a user's membership to a group by adding and removing them from it.",source:"@site/docs/content/writing-data/managing-group-membership.mdx",sourceDirName:"content/writing-data",slug:"/writing-data/managing-group-membership",permalink:"/writing-data/managing-group-membership",draft:!1,editUrl:"https://github.com/openfga/openfga.dev/edit/main/docs/content/writing-data/managing-group-membership.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"/writing-data/managing-group-membership"},sidebar:"docs",previous:{title:"Managing Group Access",permalink:"/writing-data/managing-group-access"},next:{title:"Managing Relationships Between Objects",permalink:"/writing-data/managing-relationships-between-objects"}},u={},m=[{value:"Before you start",id:"before-you-start",level:2},{value:"Modeling User Groups",id:"modeling-user-groups",level:3},{value:"Managing Group Access",id:"managing-group-access",level:3},{value:"<ProductName format={ProductNameFormat.ShortForm}/> Concepts",id:"-concepts",level:3},{value:"Step by Step",id:"step-by-step",level:2},{value:"01. Revoking group membership",id:"01-revoking-group-membership",level:3},{value:"02. Validating revoked member no longer has access",id:"02-validating-revoked-member-no-longer-has-access",level:3},{value:"Related Sections",id:"related-sections",level:2}],c={toc:m};function g(e){var t=e.components,n=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"managing-group-membership"},"Managing Group Membership"),(0,i.kt)(r.AH,{mdxType:"DocumentationNotice"}),(0,i.kt)("p",null,"In this guide you will learn how to update a user's membership to a group by adding and removing them from it."),(0,i.kt)(r.S1,{title:"When to use",appearance:"filled",description:(0,i.kt)("div",null,(0,i.kt)("p",null,"Suppose:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"An employee is hired at a company and thus gains access to all of the company's resources."),(0,i.kt)("li",{parentName:"ul"},"An employee quits and thus loses access to all of the company's resources."),(0,i.kt)("li",{parentName:"ul"},"A user joins a GitHub organization and gains access to the organizations private repositories."),(0,i.kt)("li",{parentName:"ul"},"A student graduates from school and loses access to the school's facilities.")),(0,i.kt)("p",null,"These are cases where using group membership can be helpful as you do not need to iterate over all of the group's resources to add or revoke access to particular objects. You can add a relationship tuple indicating that a user belongs to a group, or delete a tuple to indicate that a user is no longer part of the group.")),mdxType:"CardBox"}),(0,i.kt)("h2",{id:"before-you-start"},"Before you start"),(0,i.kt)("p",null,"In order to understand this guide correctly you must be familiar with some ",(0,i.kt)(r.uH,{mdxType:"ProductConcept"})," and know how to develop the things that we will list below."),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("p",null,"Assume that you have the following ",(0,i.kt)(r.uH,{section:"what-is-an-authorization-model",linkName:"authorization model",mdxType:"ProductConcept"}),".",(0,i.kt)("br",null),"\nYou have two ",(0,i.kt)(r.uH,{section:"what-is-a-type",linkName:"types",mdxType:"ProductConcept"}),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"org")," that can have a ",(0,i.kt)("inlineCode",{parentName:"li"},"member")," relation"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"document")," that can have a ",(0,i.kt)("inlineCode",{parentName:"li"},"reader")," relation."))),(0,i.kt)(r.lG,{configuration:{type_definitions:[{type:"org",relations:{member:{this:{}}}},{type:"document",relations:{reader:{this:{}}}}]},mdxType:"AuthzModelSnippetViewer"}),(0,i.kt)("p",null,"Let us also assume that we have an ",(0,i.kt)("inlineCode",{parentName:"p"},"org"),' called "contoso" and a ',(0,i.kt)("inlineCode",{parentName:"p"},"document")," called ",(0,i.kt)("inlineCode",{parentName:"p"},"planning"),", and every ",(0,i.kt)("inlineCode",{parentName:"p"},"member")," of that ",(0,i.kt)("inlineCode",{parentName:"p"},"org")," can read the document. That is represented by having the following ",(0,i.kt)("em",{parentName:"p"},(0,i.kt)(r.uH,{section:"what-is-a-relationship-tuple",linkName:"relationship tuple",mdxType:"ProductConcept"}))," in the store:"),(0,i.kt)(r.Wz,{relationshipTuples:[{_description:"Members of the contoso org can read the planning document",user:"org:contoso#member",relation:"reader",object:"document:planning"}],mdxType:"RelationshipTuplesViewer"}),(0,i.kt)("p",null,"With the above authorization model and relationship tuples, ",(0,i.kt)(r.rZ,{format:r.v7.ShortForm,mdxType:"ProductName"})," will respond with ",(0,i.kt)("inlineCode",{parentName:"p"},'{"allowed":false}')," when ",(0,i.kt)("em",{parentName:"p"},(0,i.kt)(r.uH,{section:"what-is-a-check-request",linkName:"check",mdxType:"ProductConcept"}))," is called to see if Anne can read ",(0,i.kt)("inlineCode",{parentName:"p"},"document:planning"),"."),(0,i.kt)(r.uT,{user:"anne",relation:"reader",object:"document:planning",allowed:!1,mdxType:"CheckRequestViewer"}),(0,i.kt)("p",null,"Now let's make Anne a ",(0,i.kt)("inlineCode",{parentName:"p"},"member")," of ",(0,i.kt)("inlineCode",{parentName:"p"},"org:contoso")," by adding another tuple:"),(0,i.kt)(r.Gb,{relationshipTuples:[{_description:"Anne is a member of the contoso org",user:"anne",relation:"member",object:"org:contoso"}],mdxType:"WriteRequestViewer"}),(0,i.kt)("p",null,"The ",(0,i.kt)(r.rZ,{format:r.v7.ShortForm,mdxType:"ProductName"})," service will now correctly respond with ",(0,i.kt)("inlineCode",{parentName:"p"},'{"allowed":true}')," when check is called to see if Anne can read ",(0,i.kt)("inlineCode",{parentName:"p"},"document:planning"),", but it will still respond with ",(0,i.kt)("inlineCode",{parentName:"p"},'{"allowed":false}')," if we ask the same question for another user called Becky, who is not a member of the group ",(0,i.kt)("inlineCode",{parentName:"p"},"org:contoso"),"."),(0,i.kt)(r.uT,{user:"anne",relation:"reader",object:"document:planning",allowed:!0,mdxType:"CheckRequestViewer"}),(0,i.kt)(r.uT,{user:"becky",relation:"reader",object:"document:planning",allowed:!1,mdxType:"CheckRequestViewer"}),(0,i.kt)("h3",{id:"modeling-user-groups"},"Modeling User Groups"),(0,i.kt)("p",null,"You need to know how to add users to groups and grant groups access to an object. ",(0,i.kt)("a",{parentName:"p",href:"/modeling/basics/user-groups"},"Learn more \u2192")),(0,i.kt)("h3",{id:"managing-group-access"},"Managing Group Access"),(0,i.kt)("p",null,"You need to know how to manage group access to an object. ",(0,i.kt)("a",{parentName:"p",href:"/writing-data/managing-group-access"},"Learn more \u2192")),(0,i.kt)("h3",{id:"-concepts"},(0,i.kt)(r.rZ,{format:r.v7.ShortForm,mdxType:"ProductName"})," Concepts"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A ",(0,i.kt)(r.uH,{section:"what-is-a-type",linkName:"Type",mdxType:"ProductConcept"}),": a class of objects that have similar characteristics"),(0,i.kt)("li",{parentName:"ul"},"A ",(0,i.kt)(r.uH,{section:"what-is-a-user",linkName:"User",mdxType:"ProductConcept"}),": an entity in the system that can be related to an object"),(0,i.kt)("li",{parentName:"ul"},"A ",(0,i.kt)(r.uH,{section:"what-is-a-relation",linkName:"Relation",mdxType:"ProductConcept"}),": is a string defined in the type definition of an authorization model that defines the possibility of a relationship between objects of this type and other users in the system"),(0,i.kt)("li",{parentName:"ul"},"An ",(0,i.kt)(r.uH,{section:"what-is-an-object",linkName:"Object",mdxType:"ProductConcept"}),": represents an entity in the system. Users' relationships to it can be define through relationship tuples and the authorization model"),(0,i.kt)("li",{parentName:"ul"},"A ",(0,i.kt)(r.uH,{section:"what-is-a-relationship-tuple",linkName:"Relationship Tuple",mdxType:"ProductConcept"}),": a grouping consisting of a user, a relation and an object stored in ",(0,i.kt)(r.rZ,{format:r.v7.ShortForm,mdxType:"ProductName"})))),(0,i.kt)("h2",{id:"step-by-step"},"Step by Step"),(0,i.kt)("h3",{id:"01-revoking-group-membership"},"01. Revoking group membership"),(0,i.kt)("p",null,"Imagine that every member of ",(0,i.kt)("inlineCode",{parentName:"p"},"org:contoso")," has a ",(0,i.kt)("inlineCode",{parentName:"p"},"reader")," relationship to 1000 documents. Now imagine that ",(0,i.kt)("inlineCode",{parentName:"p"},"anne")," is no longer a member of ",(0,i.kt)("inlineCode",{parentName:"p"},"org:contoso"),", so we want to revoke her access to all those documents, including ",(0,i.kt)("inlineCode",{parentName:"p"},"document:planning"),". To accomplish this, we can simply ",(0,i.kt)("strong",{parentName:"p"},"delete")," the tuple in ",(0,i.kt)(r.rZ,{format:r.v7.ShortForm,mdxType:"ProductName"})," that specifies that Anne is a ",(0,i.kt)("inlineCode",{parentName:"p"},"member")," of ",(0,i.kt)("inlineCode",{parentName:"p"},"org:contoso"),"."),(0,i.kt)(r.Gb,{deleteRelationshipTuples:[{user:"anne",relation:"member",object:"org:contoso"}],mdxType:"WriteRequestViewer"}),(0,i.kt)("h3",{id:"02-validating-revoked-member-no-longer-has-access"},"02. Validating revoked member no longer has access"),(0,i.kt)("p",null,"Once the above relationship tuple is deleted, we can check if Anne can read ",(0,i.kt)("inlineCode",{parentName:"p"},"document:planning"),". ",(0,i.kt)(r.rZ,{format:r.v7.ShortForm,mdxType:"ProductName"})," will return ",(0,i.kt)("inlineCode",{parentName:"p"},'{ "allowed": false }'),"."),(0,i.kt)(r.uT,{user:"anne",relation:"reader",object:"document:planning",allowed:!1,mdxType:"CheckRequestViewer"}),(0,i.kt)("h2",{id:"related-sections"},"Related Sections"),(0,i.kt)(r.$q,{description:"Check the following sections for more on how to model group.",relatedLinks:[{title:"Modeling User Groups",description:"Learn about how to model users and groups.",link:"/modeling/basics/user-groups",id:"../modeling/basics/user-groups.mdx"},{title:"Managing Group Access",description:"Learn about managing group access.",link:"/writing-data/managing-group-access",id:"./managing-group-access.mdx"}],mdxType:"RelatedSection"}))}g.isMDXComponent=!0}}]);
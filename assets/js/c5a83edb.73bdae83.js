"use strict";(self.webpackChunkopenfga_dev=self.webpackChunkopenfga_dev||[]).push([[1026],{30800:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var a=n(87462),o=n(63366),i=(n(67294),n(3905)),r=n(6737),l=["components"],s={sidebar_position:9,slug:"/modeling/basics/organization-context-authorization"},c="Authorization Through Organization Context",u={unversionedId:"content/modeling/basics/organization-context-authorization",id:"content/modeling/basics/organization-context-authorization",title:"Authorization Through Organization Context",description:"This section tackles cases where a user may have access to a particular resource through their presence in a particular organization, and they should have that access only when logged in within the context of that organization.",source:"@site/docs/content/modeling/basics/organization-context-authorization.mdx",sourceDirName:"content/modeling/basics",slug:"/modeling/basics/organization-context-authorization",permalink:"/modeling/basics/organization-context-authorization",draft:!1,editUrl:"https://github.com/openfga/openfga.dev/edit/main/docs/content/modeling/basics/organization-context-authorization.mdx",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9,slug:"/modeling/basics/organization-context-authorization"},sidebar:"docs",previous:{title:"Contextual and Time-Based Authorization",permalink:"/modeling/basics/contextual-time-based-authorization"},next:{title:"Direct Relationships",permalink:"/modeling/concepts/direct-relationships"}},d={},p=[{value:"Before you start",id:"before-you-start",level:2},{value:"Scenario",id:"scenario",level:3},{value:"Requirements",id:"requirements",level:3},{value:"Step by Step",id:"step-by-step",level:2},{value:"Checking Access (Excluding Contextual Data)",id:"checking-access-excluding-contextual-data",level:3},{value:"Take Organization Context into Consideration",id:"take-organization-context-into-consideration",level:3},{value:"Extend the Authorization Model",id:"extend-the-authorization-model",level:5},{value:"Add the required tuples to mark that anne is in an approved context",id:"add-the-required-tuples-to-mark-that-anne-is-in-an-approved-context",level:5},{value:"Using contextual tuples",id:"using-contextual-tuples",level:3},{value:"Summary",id:"summary",level:2},{value:"Related Sections",id:"related-sections",level:2}],h={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"authorization-through-organization-context"},"Authorization Through Organization Context"),(0,i.kt)(r.AH,{mdxType:"DocumentationNotice"}),(0,i.kt)("p",null,"This section tackles cases where a user may have access to a particular resource through their presence in a particular organization, and they should have that access only when logged in within the context of that organization."),(0,i.kt)(r.S1,{title:"When to use",appearance:"filled",description:(0,i.kt)("div",null,"Contextual Tuples should be used when modeling cases where a user's access to an object depends on the context of their request. For example:",(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"An employee\u2019s ability to access a document when they are connected to the organization VPN or the api call is originating from an internal IP address."),(0,i.kt)("li",{parentName:"ul"},"A support engineer is only able to access a user's account during office hours."),(0,i.kt)("li",{parentName:"ul"},"If a user belongs to multiple organizations, they are only able to access a resource if they set a specific organization in their current context."))),mdxType:"CardBox"}),(0,i.kt)("h2",{id:"before-you-start"},"Before you start"),(0,i.kt)("p",null,"To follow this guide, you should be familiar with some ",(0,i.kt)(r.uH,{mdxType:"ProductConcept"}),"."),(0,i.kt)("p",null,"You also need to be familiar with:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Modeling Object-to-Object Relationships"),": You need to know how to create relationships between objects and how that might affect a user's relationships to those objects. ",(0,i.kt)("a",{parentName:"li",href:"/modeling/concepts/object-to-object-relationships"},"Learn more \u2192")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Modeling Multiple Restrictions"),": You need to know how to model requiring multiple authorizations before allowing users to perform certain actions. ",(0,i.kt)("a",{parentName:"li",href:"/modeling/basics/multiple-restrictions"},"Learn more \u2192"))),(0,i.kt)(r.XQ,{mdxType:"Playground"}),(0,i.kt)("h3",{id:"scenario"},"Scenario"),(0,i.kt)("p",null,"For the scope of this guide, we are going to consider the following scenario."),(0,i.kt)("p",null,"Consider you are building the authorization model for a multi-tenant project management system."),(0,i.kt)("p",null,"In this particular system,"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"projects are owned and managed by companies"),(0,i.kt)("li",{parentName:"ul"},"users can be members of multiple companies"),(0,i.kt)("li",{parentName:"ul"},"project access is governed by the user's role in the organization that manages the project")),(0,i.kt)("p",null,"In order for a user to access a project:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The project needs to be managed by an organization the user is a member of"),(0,i.kt)("li",{parentName:"ul"},"A project is owned by a single organization"),(0,i.kt)("li",{parentName:"ul"},"A project can be shared with partner companies (that are able to view, edit but not perform admin actions, such as deletion, on the project)"),(0,i.kt)("li",{parentName:"ul"},"The user should have a role that grants access to the project"),(0,i.kt)("li",{parentName:"ul"},"The user should be logged in within the context of that organization")),(0,i.kt)("p",null,"We will start with the following authorization model:"),(0,i.kt)(r.lG,{configuration:{type_definitions:[{type:"organization",relations:{member:{this:{}},project_manager:{this:{}},project_editor:{this:{}}}},{type:"project",relations:{owner:{this:{}},partner:{this:{}},manager:{tupleToUserset:{tupleset:{object:"",relation:"owner"},computedUserset:{object:"",relation:"project_manager"}}},editor:{union:{child:[{tupleToUserset:{tupleset:{object:"",relation:"owner"},computedUserset:{object:"",relation:"project_editor"}}},{tupleToUserset:{tupleset:{object:"",relation:"partner"},computedUserset:{object:"",relation:"project_editor"}}},{computedUserset:{object:"",relation:"manager"}}]}},can_delete:{computedUserset:{object:"",relation:"manager"}},can_edit:{computedUserset:{object:"",relation:"editor"}},can_view:{computedUserset:{object:"",relation:"editor"}}}}]},mdxType:"AuthzModelSnippetViewer"}),(0,i.kt)("details",null,(0,i.kt)("summary",null,"We are considering the case that: - Anne has a project manager role at organizations A, B and C - Beth has a project manager role at organization B - Carl has a project manager role at organization C - Project X is owned by organization A - Project X is shared with organization B"),(0,i.kt)("p",null,"The above state translates to the following relationship tuples:"),(0,i.kt)(r.Gb,{relationshipTuples:[{_description:"Anne has a `project manager` role at organization A",user:"anne",relation:"project_manager",object:"organization:A"},{_description:"Anne has a `project manager` role at organization B",user:"anne",relation:"project_manager",object:"organization:B"},{_description:"Anne has a `project manager` role at organization C",user:"anne",relation:"project_manager",object:"organization:C"},{_description:"Beth has a `project manager` role at organization B",user:"anne",relation:"project_manager",object:"organization:B"},{_description:"Carl has a `project manager` role at organization C",user:"carl",relation:"project_manager",object:"organization:C"},{_description:"Organization A owns Project X",user:"organization:A",relation:"owner",object:"project:X"},{_description:"Project X is shared with Organization B",user:"organization:B",relation:"partner",object:"project:X"}],skipSetup:!0,mdxType:"WriteRequestViewer"})),(0,i.kt)("h3",{id:"requirements"},"Requirements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"When logging in within the context of organization A, Anne should be able to view and delete project X."),(0,i.kt)("li",{parentName:"ul"},"When logging in within the context of organization B, Anne should be able to view, but not delete, project X."),(0,i.kt)("li",{parentName:"ul"},"When logging in within the context of organization C, Anne should not be able to view nor delete project X."),(0,i.kt)("li",{parentName:"ul"},"When logging in within the context of organization B, Beth should be able to view, but not delete, project X."),(0,i.kt)("li",{parentName:"ul"},"Carl should not be able to view nor delete project X")),(0,i.kt)("h2",{id:"step-by-step"},"Step by Step"),(0,i.kt)("p",null,"In order to solve for the requirements above, we will break the problem down into three steps:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Understand the authorization checks can be done with the existing model")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'Ensure that Anne can view and delete "Project X"')),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Extend the authorization model to take time and ip address into consideration"),(0,i.kt)("li",{parentName:"ol"},"Use contextual tuples for context related checks")),(0,i.kt)("h3",{id:"checking-access-excluding-contextual-data"},"Checking Access (Excluding Contextual Data)"),(0,i.kt)("p",null,"With the authorization model and relationship tuples shown above, ",(0,i.kt)(r.rZ,{format:r.v7.ShortForm,mdxType:"ProductName"}),' has all the information needed to ensure that Anne can view and delete "Project X".'),(0,i.kt)("p",null,"We can verify that using the following checks:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Anne can view Project X",(0,i.kt)(r.uT,{user:"anne",relation:"can_view",object:"project:X",allowed:!0,skipSetup:!0,mdxType:"CheckRequestViewer"}))),(0,i.kt)("details",null,(0,i.kt)("summary",null,"More checks"),"* Anne can delete Project X",(0,i.kt)(r.uT,{user:"anne",relation:"can_delete",object:"project:X",allowed:!0,skipSetup:!0,mdxType:"CheckRequestViewer"}),"* Beth can view Project X",(0,i.kt)(r.uT,{user:"beth",relation:"can_view",object:"project:X",allowed:!0,skipSetup:!0,mdxType:"CheckRequestViewer"}),"* Beth cannot delete Project X",(0,i.kt)(r.uT,{user:"beth",relation:"can_delete",object:"project:X",allowed:!1,skipSetup:!0,mdxType:"CheckRequestViewer"}),"* Carl cannot view Project X",(0,i.kt)(r.uT,{user:"carl",relation:"can_view",object:"project:X",allowed:!1,skipSetup:!0,mdxType:"CheckRequestViewer"}),"* Carl cannot delete Project X",(0,i.kt)(r.uT,{user:"carl",relation:"can_delete",object:"project:X",allowed:!1,skipSetup:!0,mdxType:"CheckRequestViewer"})),(0,i.kt)("p",null,'Note that so far, we have not prevented Anne from viewing "Project X" even if Anne is viewing it from the context of Organization C.'),(0,i.kt)("h3",{id:"take-organization-context-into-consideration"},"Take Organization Context into Consideration"),(0,i.kt)("h5",{id:"extend-the-authorization-model"},"Extend the Authorization Model"),(0,i.kt)("p",null,"In order to add a restriction based on the current organization context, we will make use of ",(0,i.kt)(r.rZ,{format:r.v7.ShortForm,mdxType:"ProductName"})," configuration language's support for ",(0,i.kt)("a",{parentName:"p",href:"/modeling/configuration-language#the-intersection-operator"},"intersection")," to specify that a user has to both have access ",(0,i.kt)("em",{parentName:"p"},"and")," be in the correct context in order to be authorized."),(0,i.kt)("p",null,"We can do that by introducing some new relations and updating existing relation definitions:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},'On the "organization" type')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'Add "user_in_context" relation to mark that a user\'s access is being evaluated within that particular context'),(0,i.kt)("li",{parentName:"ul"},'Update the "project_manager" relation to require that the user be in the correct context (by adding ',(0,i.kt)("inlineCode",{parentName:"li"},"and user_in_context")," to the relation definition)"),(0,i.kt)("li",{parentName:"ul"},"Considering that ",(0,i.kt)(r.rZ,{format:r.v7.ShortForm,mdxType:"ProductName"}),' does not yet support multiple logical operations within the same definition, we will split "project_editor" into two:',(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},'"base_project_editor" editor which will contain the original relation definition (',(0,i.kt)("inlineCode",{parentName:"li"},"self or project_manager"),")"),(0,i.kt)("li",{parentName:"ul"},'"project_editor" which will require that a user has both the "base_project_editor" and the "user_in_context" relations')))),(0,i.kt)("p",null,'The "organization" type definition then becomes:'),(0,i.kt)(r.lG,{configuration:{type:"organization",relations:{member:{this:{}},project_manager:{intersection:{child:[{this:{}},{computedUserset:{object:"",relation:"user_in_context"}}]}},base_project_editor:{union:{child:[{this:{}},{computedUserset:{object:"",relation:"project_manager"}}]}},project_editor:{intersection:{child:[{computedUserset:{object:"",relation:"base_project_editor"}},{computedUserset:{object:"",relation:"user_in_context"}}]}},user_in_context:{this:{}}}},mdxType:"AuthzModelSnippetViewer"}),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},'On the "project" type:'),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},'Nothing will need to be done, as it will inherit the updated "project_manager" and "project_editor" relation definitions from "organization"')))),(0,i.kt)("h5",{id:"add-the-required-tuples-to-mark-that-anne-is-in-an-approved-context"},"Add the required tuples to mark that anne is in an approved context"),(0,i.kt)("p",null,"Now that we have updated our authorization model to take the current user's organization context into consideration, you will notice that anne has lost access because nothing indicates that anne is authorizing from the context of an organization. You can verify that by issuing the following check:"),(0,i.kt)(r.uT,{user:"anne",relation:"can_view",object:"project:X",allowed:!1,skipSetup:!0,mdxType:"CheckRequestViewer"}),(0,i.kt)("p",null,"In order for Anne to be authorized a tuple indicating Anne's current organization context will need to be present:"),(0,i.kt)(r.Gb,{relationshipTuples:[{_description:"Anne is authorizing from the context of organization:A",user:"anne",relation:"user_in_context",object:"organization:A"}],mdxType:"WriteRequestViewer"}),(0,i.kt)(r.uT,{user:"anne",relation:"can_view",object:"project:X",allowed:!0,skipSetup:!0,mdxType:"CheckRequestViewer"}),(0,i.kt)("h3",{id:"using-contextual-tuples"},"Using contextual tuples"),(0,i.kt)("p",null,"Now that we know we can authorize based on present state, we have a different problem to solve. We are storing the tuples in the state in order for ",(0,i.kt)(r.rZ,{format:r.v7.ShortForm,mdxType:"ProductName"})," to evaluate them, which fails in certain use-cases where Anne can be connected to two different contexts in different browser windows at the same time, as each has a different context at the same time, so if they are written to the state, which will ",(0,i.kt)(r.rZ,{format:r.v7.ShortForm,mdxType:"ProductName"})," use to compute Anne's access to the project?"),(0,i.kt)("p",null,"For Check calls, ",(0,i.kt)(r.rZ,{format:r.v7.ShortForm,mdxType:"ProductName"}),' has a concept called "',(0,i.kt)(r.uH,{section:"what-are-contextual-tuples",linkName:"Contextual Tuples",mdxType:"ProductConcept"}),'". Contextual Tuples are tuples that do ',(0,i.kt)("strong",{parentName:"p"},"not")," exist in the system state and are not written beforehand to ",(0,i.kt)(r.rZ,{format:r.v7.ShortForm,mdxType:"ProductName"}),". They are tuples that are sent alongside the Check request and will be treated as ",(0,i.kt)("em",{parentName:"p"},"if")," they already exist in the state for the context of that particular Check call. That means that Anne can be using two different sessions, each within a different organization context, and ",(0,i.kt)(r.rZ,{format:r.v7.ShortForm,mdxType:"ProductName"})," will correctly respond to each one with the correct authorization decision."),(0,i.kt)("p",null,"When Anne is connecting from the context of organization A, ",(0,i.kt)(r.rZ,{format:r.v7.ShortForm,mdxType:"ProductName"})," will return ",(0,i.kt)("inlineCode",{parentName:"p"},'{"allowed":true}'),":"),(0,i.kt)(r.uT,{user:"anne",relation:"can_view",object:"project:X",allowed:!0,skipSetup:!0,contextualTuples:[{_description:"Anne is authorizing from the context of organization:A",user:"anne",relation:"user_in_context",object:"organization:A"}],mdxType:"CheckRequestViewer"}),(0,i.kt)("p",null,"When Anne is connecting from the context of organization C, ",(0,i.kt)(r.rZ,{format:r.v7.ShortForm,mdxType:"ProductName"})," will return ",(0,i.kt)("inlineCode",{parentName:"p"},'{"allowed":false}'),":"),(0,i.kt)(r.uT,{user:"anne",relation:"can_view",object:"project:X",allowed:!1,skipSetup:!0,contextualTuples:[{_description:"Anne is authorizing from the context of organization:A",user:"anne",relation:"user_in_context",object:"organization:C"}],mdxType:"CheckRequestViewer"}),(0,i.kt)("p",null,"Using this, you can check that the following requirements are satisfied:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"User"),(0,i.kt)("th",{parentName:"tr",align:null},"Organization Context"),(0,i.kt)("th",{parentName:"tr",align:null},"Action"),(0,i.kt)("th",{parentName:"tr",align:null},"Allowed"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Anne"),(0,i.kt)("td",{parentName:"tr",align:null},"Organization A"),(0,i.kt)("td",{parentName:"tr",align:null},"View"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Anne"),(0,i.kt)("td",{parentName:"tr",align:null},"Organization B"),(0,i.kt)("td",{parentName:"tr",align:null},"View"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Anne"),(0,i.kt)("td",{parentName:"tr",align:null},"Organization C"),(0,i.kt)("td",{parentName:"tr",align:null},"View"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Anne"),(0,i.kt)("td",{parentName:"tr",align:null},"Organization A"),(0,i.kt)("td",{parentName:"tr",align:null},"Delete"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Anne"),(0,i.kt)("td",{parentName:"tr",align:null},"Organization B"),(0,i.kt)("td",{parentName:"tr",align:null},"Delete"),(0,i.kt)("td",{parentName:"tr",align:null},"No")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Anne"),(0,i.kt)("td",{parentName:"tr",align:null},"Organization C"),(0,i.kt)("td",{parentName:"tr",align:null},"Delete"),(0,i.kt)("td",{parentName:"tr",align:null},"No")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Beth"),(0,i.kt)("td",{parentName:"tr",align:null},"Organization B"),(0,i.kt)("td",{parentName:"tr",align:null},"View"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Beth"),(0,i.kt)("td",{parentName:"tr",align:null},"Organization B"),(0,i.kt)("td",{parentName:"tr",align:null},"Delete"),(0,i.kt)("td",{parentName:"tr",align:null},"No")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Carl"),(0,i.kt)("td",{parentName:"tr",align:null},"Organization C"),(0,i.kt)("td",{parentName:"tr",align:null},"View"),(0,i.kt)("td",{parentName:"tr",align:null},"No")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Carl"),(0,i.kt)("td",{parentName:"tr",align:null},"Organization C"),(0,i.kt)("td",{parentName:"tr",align:null},"Delete"),(0,i.kt)("td",{parentName:"tr",align:null},"No")))),(0,i.kt)("h2",{id:"summary"},"Summary"),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Final version of the Authorization Model and Relationship tuples"),(0,i.kt)(r.lG,{configuration:{type_definitions:[{type:"organization",relations:{member:{this:{}},project_manager:{intersection:{child:[{this:{}},{computedUserset:{object:"",relation:"user_in_context"}}]}},base_project_editor:{union:{child:[{this:{}},{computedUserset:{object:"",relation:"project_manager"}}]}},project_editor:{intersection:{child:[{computedUserset:{object:"",relation:"base_project_editor"}},{computedUserset:{object:"",relation:"user_in_context"}}]}},user_in_context:{this:{}}}},{type:"project",relations:{owner:{this:{}},partner:{this:{}},manager:{tupleToUserset:{tupleset:{object:"",relation:"owner"},computedUserset:{object:"",relation:"project_manager"}}},editor:{union:{child:[{computedUserset:{object:"",relation:"manager"}},{tupleToUserset:{tupleset:{object:"",relation:"owner"},computedUserset:{object:"",relation:"project_editor"}}},{tupleToUserset:{tupleset:{object:"",relation:"partner"},computedUserset:{object:"",relation:"project_editor"}}}]}},can_delete:{computedUserset:{object:"",relation:"manager"}},can_edit:{computedUserset:{object:"",relation:"editor"}},can_view:{computedUserset:{object:"",relation:"editor"}}}}]},mdxType:"AuthzModelSnippetViewer"}),(0,i.kt)(r.Gb,{relationshipTuples:[{_description:"Anne has a `project manager` role at organization A",user:"anne",relation:"project_manager",object:"organization:A"},{_description:"Anne has a `project manager` role at organization B",user:"anne",relation:"project_manager",object:"organization:B"},{_description:"Anne has a `project manager` role at organization C",user:"anne",relation:"project_manager",object:"organization:C"},{_description:"Beth has a `project manager` role at organization B",user:"beth",relation:"project_manager",object:"organization:B"},{_description:"Carl has a `project manager` role at organization C",user:"carl",relation:"project_manager",object:"organization:C"},{_description:"Organization A owns Project X",user:"organization:A",relation:"owner",object:"project:X"},{_description:"Project X is shared with Organization B",user:"organization:B",relation:"partner",object:"project:X"}],skipSetup:!0,mdxType:"WriteRequestViewer"})),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Warning")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Contextual tuples:"),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"Are not persisted in the store."),(0,i.kt)("li",{parentName:"ul"},"Are only supported on the ",(0,i.kt)(r.DC,{link:"/api/service#/Relationship%20Queries/Check",name:"Check API endpoint",mdxType:"UpdateProductNameInLinks"}),". They are not supported on read, expand and other endpoints."),(0,i.kt)("li",{parentName:"ul"},"If you are using the ",(0,i.kt)(r.DC,{link:"/api/service#/Relationship%20Tuples/ReadChanges",name:"Read Changes API endpoint",mdxType:"UpdateProductNameInLinks"})," to build a permission aware search index, note that it will not be trivial to take contextual tuples into account.")))),(0,i.kt)("h2",{id:"related-sections"},"Related Sections"),(0,i.kt)(r.$q,{description:"Check the following sections for more on how user groups can be used.",relatedLinks:[{title:"Modeling with Multiple Restrictions",description:"Learn how to model requiring multiple relationships before users are authorized to perform certain actions.",link:"/modeling/basics/multiple-restrictions",id:"./multiple-restrictions.mdx"},{title:"Contextual and Time-Based Authorization",description:"Learn how to authorize access that depends on dynamic or contextual criteria.",link:"/modeling/basics/contextual-time-based-authorization",id:"./contextual-time-based-authorization.mdx"},{title:"{ProductName} Check API",description:"Details on the Check API in the {ProductName} reference guide.",link:"/api/service#/Relationship%20Queries/Check"}],mdxType:"RelatedSection"}))}m.isMDXComponent=!0}}]);
import{a as b}from"./chunk-FP6U4NYC.js";import{a as S,b as h,c as C,d}from"./chunk-GH4UQHOO.js";import{a as i,b as v,f}from"./chunk-ONA3PISV.js";import{A as u,f as m,ha as g,na as l}from"./chunk-SWO22U5H.js";var a=class{partitionKey;rowKey;user_id;conversation_id;feedback;sentiment;bot_name;title;timestamp;getEmojiPerSetiment(){switch(this.sentiment){case"negative":return"\u{1F61F}";case"mixed":return"\u{1F615}";case"positive":return"\u{1F60A}";case"neutral":return"\u{1F610}";default:return"\u2753"}}};var p=class extends d{partitionKey;rowKey;constructor(){super()}};var n=class n{http=l(v);urlService=l(f);getAllConversations(r){let e=`${this.urlService.URLS.CHAT_HISTORY}/all-conversations`,t=new i;return r&&(t=t.set("bot_name",r)),this.http.get(e,{params:t})}getConversationsByUserId(r){let e=`${this.urlService.URLS.CHAT_HISTORY}/conversations`,t=new i().set("user_id",r);return this.http.get(e,{params:t})}getChatByConversationId(r){let e=`${this.urlService.URLS.CHAT_HISTORY}/chat`,t=new i().set("conv_id",r);return this.http.get(e,{params:t}).pipe(u(c=>c.map(o=>{let s=new p;return s.context=JSON.parse(o.context),s.content=h(C(o.content,s)),s.partitionKey=o.partitionKey,s.rowKey=o.rowKey,s.role=o.role,s}))).pipe(S())}applyAnalysis(){let r=`${this.urlService.URLS.CHAT_HISTORY}/sentiment-analysis`;return this.http.post(r,null)}addFeedback(r,e){let t=`${this.urlService.URLS.CHAT_HISTORY}/add-feedback`,c=new i().set("conv_id",r).set("feedback",e);return this.http.post(t,null,{params:c})}getAllBotNames(){let r=`${this.urlService.URLS.CHAT_HISTORY}/bot-names`;return this.http.get(r)}static \u0275fac=function(e){return new(e||n)};static \u0275prov=g({token:n,factory:n.\u0275fac,providedIn:"root"})};m([b(()=>a)],n.prototype,"getAllConversations",1);var y=n;var I=(t=>(t[t.LIKE=1]="LIKE",t[t.UNSPECIFIED=0]="UNSPECIFIED",t[t.DISLIKE=-1]="DISLIKE",t))(I||{});export{y as a,I as b};

"use strict";(self.webpackChunkphoenix_app=self.webpackChunkphoenix_app||[]).push([[289],{4289:(d,_,o)=>{o.r(_),o.d(_,{drawPolyLine3D:()=>y,drawPolyMarker3D:()=>P});var l=o(4882),m=o(8872),f=o(3847),c=o(2454),D=o(643);function g(n){const t=n.getFramePainter();if(!t?.mode3d||!n.getObject())return null;if(t?.toplevel)return t;const e=n.getMainPainter();return e&&!(0,m.isFunc)(e.drawExtras)?null:(e?Promise.resolve(e):(0,c.drawDummy3DGeom)(n)).then(s=>{const i=n.getPadPainter();return i&&(i._disable_dragging=!0),s._dummy&&(0,m.isFunc)(n.get3DBox)&&s.extendCustomBoundingBox(n.get3DBox()),s.drawExtras(n.getObject(),"",!0,!0)})}function h(){const n=this.getObject();if(!n?.fP.length)return null;const t={min:{x:0,y:0,z:0},max:{x:0,y:0,z:0}};for(let e=0;e<n.fP.length;e+=3){const r=n.fP[e],s=n.fP[e+1],i=n.fP[e+2];0===e?(t.min.x=t.max.x=r,t.min.y=t.max.y=s,t.min.z=t.max.z=i):(t.min.x=Math.min(r,t.min.x),t.max.x=Math.max(r,t.max.x),t.min.y=Math.min(s,t.min.y),t.max.y=Math.max(s,t.max.y),t.min.z=Math.min(i,t.min.z),t.max.z=Math.max(i,t.max.z))}return t}function P(){return u.apply(this,arguments)}function u(){return(u=(0,l.A)(function*(){this.get3DBox=h;const n=g(this);return(0,m.isObject)(n)&&n.grx&&n.gry&&n.grz?(this.$fp=n,D.Y.bind(this)()):n})).apply(this,arguments)}function y(){return x.apply(this,arguments)}function x(){return(x=(0,l.A)(function*(){this.get3DBox=h;const n=this.getObject(),t=g(this);if(!((0,m.isObject)(t)&&t.grx&&t.gry&&t.grz))return t;const e=3*n.fN,r=n.fP,s=[];for(let a=3;a<e;a+=3)s.push(t.grx(r[a-3]),t.gry(r[a-2]),t.grz(r[a-1]),t.grx(r[a]),t.gry(r[a+1]),t.grz(r[a+2]));const i=(0,f.Fc)(s,(0,f.DH)(this,n));return t.add3DMesh(i,this,!0),t.render3D(100),!0})).apply(this,arguments)}}}]);
//# sourceMappingURL=289.1b82cc7eb8ab9cba.js.map
import styled from "styled-components";

export const Container = styled.div`
position: fixed; 
z-index: 999;
left: 0;
top: 0;
width: 100%;
height: 100%;
background-color: rgba(0, 0, 0, 0.4);
display: flex;
justify-content: center;
align-items: center;
`;

export const Modal = styled.div`
display: flex;
align-items: center;
column-gap: 30px;
padding: 30px;
background-color: #fefefe;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

export const Loader = styled.div`
width:50px;
  height:50px;
  border-radius:50%;
  background:conic-gradient(#0000 10%,#766DF4);
  -webkit-mask:radial-gradient(farthest-side,#0000 calc(100% - 8px),#000 0);
  animation:s3 1s infinite linear;
}
@keyframes s3 {to{transform: rotate(1turn)}
`;

export const Text = styled.div`
font-family: "IBM Plex Sans", "sans-serif";
font-size: 20px;
`;
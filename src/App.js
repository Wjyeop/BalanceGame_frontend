import styled from "styled-components";

const Board = styled.div`
 background-color: #f0f8ff;
 padding: 20px;
 border: 1px solid #ccc;

 /* 반응형 */

 @media (max-width: 768px) {
  width: 100%;
  margin: 0 20px;
 }
`;

const LeftColumn = styled.div`
 float: left;
 width: 50%;

 /* 반응형 */

 @media (max-width: 768px) {
  width: 100%;
  margin-bottom: 20px;
 }
`;

const RightColumn = styled.div`
 float: right;
 width: 50%;

 /* 반응형 */

 @media (max-width: 768px) {
  width: 100%;
  margin-bottom: 20px;
 }
`;

const Heading = styled.h1`
 font-size: 18px;
 font-weight: bold;
 color: #333;

 /* 반응형 */

 @media (max-width: 768px) {
  font-size: 16px;
 }
`;

const Paragraph = styled.p`
 font-size: 16px;
 line-height: 1.5;
 color: #666;

 /* 반응형 */

 @media (max-width: 768px) {
  font-size: 14px;
 }
`;

const TopBar = styled.div`
 background-color: #337ab7;
 color: #fff;
 padding: 20px;

 /* 반응형 */

 @media (max-width: 768px) {
  height: 40px;
  padding: 0;
 }
`;

const TopBarTitle = styled.h1`
 font-size: 18px;
 font-weight: bold;
`

const Image = styled.img`
 width: 100%;
 height: 100%;
`

const Button = styled.button`
 background-color: #337ab7;
 color: #fff;
 font-size: 16px;
 font-weight: bold;
 padding: 10px;
 cursor: pointer;
`

const App = () => {
 return (
  <Board>
   <TopBar>
    <TopBarTitle>게시판</TopBarTitle>
   </TopBar>
   <LeftColumn>
    <Heading>왼쪽 열</Heading>
    <Image src="https://picsum.photos/id/45/600/400" />
    <Paragraph>왼쪽 열에 들어갈 내용</Paragraph>
    <Button>추천</Button>
   </LeftColumn>
   <RightColumn>
    <Heading>오른쪽 열</Heading>
    <Image src="https://picsum.photos/id/46/600/400" />
    <Paragraph>오른쪽 열에 들어갈 내용</Paragraph>
    <Button>추천</Button>
   </RightColumn>
  </Board>
 );
};

export default App;
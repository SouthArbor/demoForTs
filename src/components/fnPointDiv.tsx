function fnPointDic(slots: { one?: JSX.Element, two?: JSX.Element }) {
  
function move(event:any) {
  console.log(event.clientX);
}

  return <div onMousemove={move} style="width:500px; height: 500px; border:1px red solid;">
    {slots?.one}
    {slots?.two}
  </div>
}

export default fnPointDic;
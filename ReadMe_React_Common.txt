I. useState() :        =>  const [ state , setState ] = useState();
1/.Array destructoring : 
	const [ a, b ] = [ 'Hello' , 'Boy' ];  //=> a='Hello' , b='Boy'.
=======
2/. Khi làm việc với State , nhớ phải Clone State cũ ra State mới , sau đó mới làm việc với State mới .và cuối cùng cập nhật State mới và State : setSate(newState);
=> const   newState =  [ ... state ] ; 
         ....
=> setState(newState);
========
3/.  const [ person, setPerson  ] = useState({ name:'Jacky' , age:18 });
      setPerson({ ...person , age: 25 });
      // => { name: ''Jacky' , age: 25 } ;
========
4/.initalState callback chỉ chạy được một lần đầu ,những lần sau render sẽ ko còn dùng nữa:
const [ color , setColor ] = userState(() => {
           const  initColor = getComplicatedColor();
           return initColor ;
});


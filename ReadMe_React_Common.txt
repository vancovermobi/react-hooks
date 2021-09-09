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
=====================================================
II. useEffect() : 
1.SideEffect :  
- Effects không cần clean up :
         + Gọi API lấy dữ liệu
         + Tương tác với DOM
- Effects cần clean up :
         + Subcriptión
         + setTimeout , setInterval
2.Hooks useEfect() :
- là một Hook cơ bản trong React hooks
- Sử dụng cho side effects
- Mỗi hook gồm 2 thành phần : Side Effect và Clean Up (optional)
- Được thực thi sau mỗi lần render
- Được thực thi ít nhất một lần sau lần render đầu tiên
- Những lần render sau , chỉ được thực thi nếu co dependencies thay đổi
- Effect cleanup sẽ được thực thi trước run Effect lần tiếp theo hoặc unmount
* Cú pháp : function useEffect( callback , dependencies );
useEffect(() => {
      // do your side effect here..
     
    return () => {
       // clean up here..
       // Exeuted before the next render or unmount
    };
},[dependencies] );
=> B1: MOUNTING
               - rendering
               - run useEffect()
=> B2: UPDATING
               - rendering
               - run `useEffect() cleanup` nếu dependencies thay đổi
               - run `useEffect()` nếu dependencies thay đổi 
=> B3: UNMOUNTING
               - run `useEffect() cleanup` .
* dependencies :
         + Không có dependencies : useEffect luôn luôn chạy sau mỗi lần render
         + dependencies là mãng rỗng [] : useEffect chỉ chạy lần đầu tiên
         + dependencies là biến hoặc array, object thay đổi thì useEffect sẽ rendering lại .
*Example : Clock()
function Clock(){
     const [timeString, setTimeString] = useState(null);
     const intervalRef = useRef(null);

     useEffect(() => {
          intervalRef.current = setInterval(() => {
                 const  now   = new Date();
                 const  hours = `0${now.getHours()}`.slice(-2);
                 const  minutes = `0${now.getMinutes()}`.slice(-2) ;
                 const  seconds = `0${now.getSeconds()}`.slice(-2);
                 const  currentTimeString = `${hours}:${minutes}:${seconds}`;

                 setTimeString(currentTimeString);
           }, 1000 );

           reuturn () => {
                 clearInterval(intervalRef.current);
           };
     }, []);

      return (
           <div style={{ fontSize: '48px' }} >{ timeString }</div>
      )
}
** Example2 : Lấy danh sách Post từ server và hiển thị lên UI
GET:  http://js-post-api.herokuapp.com/api/post?_limit=10&_page=1
- _limit : số phần tử hiện mỗi trang .
- _page: số trang hiện tại 
- npm i --save query-string
=>  
const [filters, setFilters] = useState({
    _limit: 10,
    _page: 1,
});
const paramsString = queryString.stringify(filters);  // -> _limit=10&_page=1
const requestUrl = `http://js-post-api.herokuapp.com/api/posts?${paramsString}`;
** useRef() : tạo 1 object được giữ nguên giá trị sau những lần render , hay tử lúc component sinh ra đến khi mất đi , giá trị object useRef() không bị thay đổi.

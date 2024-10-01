export default function Home() {
  // const [windowWidth, setWindowWidth] = useState(0);

  // useEffect(() => {
  //   if (typeof window !== undefined) {
  //     setWindowWidth(window.scrollY);
  //   }
  // }, []);

  // console.log(windowWidth);

  return (
    <>
      <div className="bg-custom-bg bg-cover bg-center h-screen">
        {/* content */}
        <div className="fixed bg-black right-0 top-64 p-6 rounded-l-xl border-b-2">
          GitHub
        </div>
        <div className="text-black">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          aspernatur eligendi asperiores delectus dignissimos, quam cumque
          ratione nam, necessitatibus impedit molestias quisquam nobis hic
          laudantium. Ratione modi ad pariatur aspernatur expedita eum?
        </div>
      </div>
      <div className="bg-slate-700 h-screen"></div>
    </>
  );
}

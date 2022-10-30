export default function NewSection() {
  let [dataSource, setDataSource] = useState([]);
  const [selectMovie, setSelectMovie] = useState(false);

  return (

      <div className="new-movie-grid">
        {for (i=0, i<10, i++) { 
          return (
                <>
                    <img
                      src={`https://picsum.photos/200/300`}
                      alt="fail"
                      onClick={() => setSelectMovie(!selectMovie)}
                    />

                    <div className={selectMovie ? "modal" : "closed-box"}>
                      <div>
                        <img
                          src={`https://picsum.photos/200/300`}
                          alt="fail"
                          style={{ width: "100%", height: "19rem", borderRadius: 10 }}
                        />
                        <p>{overview}</p>
                        <span>{`User Rating: 9`}</span>
                      </div>
                    </div>
                </>
        )
      }}
      </div>
      )
    }

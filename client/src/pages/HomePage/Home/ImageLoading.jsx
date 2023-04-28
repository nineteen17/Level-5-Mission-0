const ImageLoading = ({ item }) => {
    return [...Array(item).keys()].map((i) => (
      <div key={i} className="animate-pulse">
        <div className="bg-purple-300 rounded-lg h-72"></div>
      </div>
    ))
  }
  
  export default ImageLoading
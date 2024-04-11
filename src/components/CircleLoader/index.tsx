import "./style.css";

const CircleLoader = ({ color }: { color: string }) => {
  return (
    <div className="circle-loader-container">
      <div className="circle-loader" style={{ borderTopColor: color }}></div>
    </div>
  );
};

export default CircleLoader;

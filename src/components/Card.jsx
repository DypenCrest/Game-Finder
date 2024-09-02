function Card(props) {
  const { data } = props;
  return (
    <div>
        <a
          href="#"
          className="flex flex-col text-center w-80 p-6 rounded-lg shadow hover:bg-zinc-800 "
        >
          <img src={data.image} alt={data.name} />
          <h4 className="mt-5 text-xl font-bold  text-white">{data.name}</h4>
        </a>
    </div>
  );
}

export default Card;

export default function ProductTile({
  url = "https://shopee.vn/leblurshop",
  imgUrl,
  title = "Mua tại Shopee",
}) {
  return (
    <div className="w-60 mx-auto">
      <img className="w-full h-60" src={imgUrl} />
      <a
        href={url}
        target="_blank"
        rel="noreferrer"
        className="w-full block text-center bg-shopee text-white font-semibold px-2 py-2 mt-8"
      >
        {title}
      </a>
    </div>
  );
}

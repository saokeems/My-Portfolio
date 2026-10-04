const BrandIcon = ({ name, className = "h-5 w-5" }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <use href={`/icons.svg#${name}-icon`} />
  </svg>
);

export default BrandIcon;
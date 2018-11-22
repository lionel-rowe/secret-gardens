const cloudinarify = (imgName) => {
  return `https://res.cloudinary.com/drgdpdviq/image/upload/w_500,c_scale,r_10/v1/${imgName}`;
};

export default cloudinarify;

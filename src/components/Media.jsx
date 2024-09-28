import React from "react";

const Media = () => {
  const imageArray = [
    {
      id: 1,
      src: "https://s3-alpha-sig.figma.com/img/5be7/b30f/1023e0bec0dfa8fb71138b45f6a9580f?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HaF4OqKOqWK31n7iNf2pUzIzm1K3sJachWvt4r7ThUQLHC9ZWzKqTcc-jE5HWvjwClzMSrU5TThUc9m-i96OkNOZV5oPu2-sIsWAe94xVMz197mhs77zLjWQvOW2v94At6w2htEWqAY8WtiJRhEC8DN1GpvMQEkgQxGQxpUZig-G3UotJ6PO0CWMeNpA995xb5Mx3UbFdJi8hLmQp0ymvAxleG3YkzLvMxO4DVr9TdKPsTmS1Z49H57VUrKuRO~GII1uXoWtPqU9uJnCy3I2YzcaTAjqZUY-KDpw-F56AD-GN66JXWORb2S3in8bPNTTvxrMChZ2~WrTIle~mpgcIg__",
    },
    { id: 2, src: "https://s3-alpha-sig.figma.com/img/3e44/cc82/c69df7b9e4b510c71fff0a209463d571?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gbM6veocsfotd6r3W32PhLd0Jj3hnam2hktAniTkzmFQGZDXKyJtFdijhpafYu2wjTO4gDHPI2StWyhQn6k8zFIQwf65jyTULnV4uzOu3DrbMhjI8mV~PIcFLuVJT9Vys6SnltRjNITo~BYk3pTxALUgXm52cKFVhSA1cMLtswfH5K67F5NYgwPYq3qG54zjXnrNQxO91R2f2BDpZxRP7gbQMGeuUbI8LT~v0xbH4rJ5cceYWl62SuMV4gJYh1HOchQ-G-pC9g3sJrpMZh8o8Wurs4FpysNJ5oCMXR1~5D70ywItEGN78lWt4xB2z9BXezA7LRuhf0oNGbBwqJF-gA__" },
    { id: 3, src: "https://s3-alpha-sig.figma.com/img/97bc/1b6a/a953956f53f6c2781b82f9950a4609b9?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=A~6qbr4WPFNnnkxijsVJ4WdPOGpnLBbCAQqMNev~nmgZy3Lhg2EzDw~XGWctyOTcj1QLsPdrOKiJ1DiMLhUeev5F58mUmZ3h5wV7vS3EdLYSqgYvaIRs2a8O0DWy4pUUT0J4hOF9kg5jdaV1yLCJeoQXuJstKF~DtPuRM2tZAW1Bd6~557yungzUU40mR8Qep5qv5fY7FYRc6shXKsCPTyI-ya4CQiYaEyzL9nAC06chwJPrv~M-HwF8rAnQTAA1sCAj~9t9tVbQ1b-MbSxr1d-oHUbbL3TzxdL6mcjwUivoyycOVaGGxzT2wYwsTTLf6ThLl8oJ4t7fnAGsr-73Mg__" },
    { id: 4, src: "https://s3-alpha-sig.figma.com/img/93ea/b2e4/591129a0da8f52c9f1a7d572f9687906?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UmnO1hE9yr8kcP-zJIm7b3OLmyQ8XTc9HOVeWz3JyLosJtb-wNQ5bX8LRkAtiiJiOmZKCdfSYgiyZTS~7I282BEoHFe6Qcls~33dCnl8vMVm8sB9FI9jzQYVmBGMae8VMdufG6l7A1ka66~6s4oKVIOHo0~MC76F~ppi6q2QJm29lsmoA52vsHkA0-UEtdEY94ofY~5Wdbog4Xl1cpyKym38ey5eij6KkySSzWpsf-~ZIzER-pvni1TqTAEOoA5VwR04Hb8GHCxqP2bONmkgT-pGOUjsyzxrlQMob05-cVhyiy32gfj9FhtHmeqc0qnr0lXMn1EBc2GUUNbL5dLdIQ__" },
    { id: 5, src: "https://s3-alpha-sig.figma.com/img/4f24/65da/fa9cf98505aee683a11cee00c358c509?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MXoKieY~7R6w0Nuwz6pFGolchI-epZHx93Wpk2AEuHNyGJZ20LS3dLGk0pWvyJE2oPtJQBWz1GNFXICsj~wYiKtZYKsNpTGmGOkdnpdPxIC6W2NeUO5wW8SO6Voes0LUOIIdK2vPc1~Trl~X9mXM~eEkPdRDhFwPMIyYlyc6GaMGkMKKyHtwL9jZpFFCBvtZBhiRWWrdUS93gBsRilz-XWU8t9Mf~~5AHXQjHp5RK5h6rP03U-OgttTD5iMoXFlsphmrvNxFQ8kqPhXAV1LbcwxSaqtOfAx12pVUNrEEmK8WlnPLnOtQ8OKL18YxA3W4qJZ-taH7LV-Q1enZCMrshA__" },
  ];
  return (
    <div className="grid  grid-cols-2 md:grid-cols-4 lg:grid-cols-5 items-center gap-10 ">
      {imageArray.map((image) => (
        <img
          key={image.id}
          src={image.src}
          alt={`Image ${image.id}`}
          className="w-full h-[40px] md:h-auto cursor-pointer object-cover"
        />
      ))}
    </div>
  );
};

export default Media;

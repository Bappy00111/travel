import React from "react";
import navegation from '../../src/assets/iceon/navigation 1.svg'

const SellingSection = () => {
  const products = [
    {
      image:
        "https://s3-alpha-sig.figma.com/img/32e1/459a/e49e57046b9c9bf320fe245919168bb0?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VPic1YRFewEf9pBEFg2BZL5PMKvaLHZ1TA82-fSYeTWmhp8zLE-Po3wLPPhCzFHcuxp4lHKixnC5C8SRzcuKKj0M00XGSwslMvl6-s6zhvM33uFdJaCd0hu25Pb7~mOwIdTIM5OoCAHCDOmZN3lL6rtmE~XqnSGPQgvzWFTLnQxp-zhQUFKIMcmZkOu2nbG4uPIld9tQyXFkghqZkqsMfhWlcMlwM825hWg22f8QlSyQ4NeUwNlOA33BJi8vS6pO0RyaGSy1SwERq-n8xNbJ18YVzHYyijJkPSW0pyY1lKhiFcVMjOaj5T7gyxzqQKAgh0KJJyTNUq5WrA9kJ8XGcw__",
      name: "Product 1",
      location: "Dhaka, Bangladesh",
      price: 1200,
      deliveryInDays: 3,
    },
    {
      image:
        "https://s3-alpha-sig.figma.com/img/599d/5437/ff6f71a7522170940c3ac66332ac8d2f?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I2FXPkoQgp-4JK~w-9JQo8IoD-zQcaUqMSREfiaTMbUgBxR5eXBOeO9xje65sJLucCb5jb72664dbPBtegznkCa9nEGTA3-MCwTd0Vm-GPARbVApX~nWqKQ0BElRDx4arVilTDxrFOQ121XBkRoxqXBwt7FpFkxSiOrX3cqCAziQKTXiGlLgdkrCFVeUsUmZxHlKYo7sa7HbqqnBgBCqaEGZO-bnUNRu9c4peS~~t0JuzUzJcSusuld4598dsl8yQQP4xi7HmKzsoj6JcfCRcY9O69SGh6XIz1n753NeDzdrNmSU-OEK~~8gAn7LVvvOMjDfI~LCshObQ5J7TlzXyw__",
      name: "Product 2",
      location: "Mumbai, India",
      price: 1500,
      deliveryInDays: 5,
    },
    {
      image:
        "https://s3-alpha-sig.figma.com/img/1119/f8e8/79b2e4cb46bd33155639a62530f9a579?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DXAdclyQukBr0WayutfrYfRbhMhUVXhaCHpeBscnsc9qJulucJrRwGZxYXbeJ5tWcXifb1rVaWjoMbnN6P0orrE3YO6zCcGtUdII~Y225uDybrzgeq07gTeVmK~nFKnOoeN-luWt4am6EmpLeKEkixYq4Q2eotD~-Gk2lFQOrmD4rzc2~fdqYGu-VHF7Xd1TUV1JyY4y7EGSldmQ-Et~861ztkDp7ia1rVdd2kNkyt59WSJVXv5L9gYaZwxb97bClyolzZRzD3oK~1hfeFv2TsWRAxYF4KXznCkP4TH7N0cb3cEPjvcIMSuU86ZLfExs1KnaNFeBaDpfBviuPRnTXw__",
      name: "Product 3",
      location: "New York, USA",
      price: 2000,
      deliveryInDays: 7,
    },
  ];

  console.log(products);

  return (
    <div className="my-20 text-base">
      <div className="text-center space-y-2">
        <p className="font-bold text-[#5E6282]">Top Selling</p>
        <h2 className="text-4xl text-[#14183E] font-bold">Top Destinations</h2>
      </div>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10">
        {products.map((product, index) => (
          <div key={index} className="border rounded-lg shadow-lg p-4">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-[400px] object-cover rounded-lg mb-4"
            />
            <div className="flex justify-between items-center mb-2">
              <p className="text-gray-600">{product.location}</p>
              <p className="text-lg font-semibold text-gray-900">
                ${product.price}
              </p>
            </div>
            <div className="text-gray-500 flex items-center ">
              <span className="pr-2"><img src={navegation} alt="" /></span>
              Delivery in {product.deliveryInDays} days
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SellingSection;

import React from "react";

const Modal = ({ id, title, options }) => {
    return (
        <div className="modal fade" id={id} tabIndex="-1" aria-labelledby={`${id}Label`} aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id={`${id}Label`}>{title}</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <ul>
                            {options.map((option, index) => (
                                <li key={index}>{option.text}</li>
                            ))}
                        </ul>
                        <figure className="figure">
                            {options.map((option, index) => (
                                <img
                                    key={index}
                                    src={option.image}
                                    className="figure-img img-fluid rounded"
                                    alt={option.text}
                                    height={100}
                                    width={100}
                                    style={{ marginLeft: '10px' }} />
                            ))}
                            <figcaption className="figure-caption">Images are taken from Google</figcaption>
                        </figure>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

const NutritionPlans = ({scrollspyHeading4}) => {
    const breakfastVegOptions = [
        { text: "Poha with vegetables: A light, nutritious dish made from flattened rice and mixed vegetables.", image: "https://palatesdesire.com/wp-content/uploads/2022/07/Vegetable-diet-poha-recipe@palates-desire.jpg" },
        { text: "Paneer Paratha: Indian flatbread stuffed with cottage cheese, providing a good source of protein.", image: "https://www.livingsmartandhealthy.com/wp-content/uploads/2024/01/palak-paneer-paratha3-500x500.jpg" },
        { text: "Idli with sambar: Steamed rice cakes served with a lentil and vegetable stew.", image: "https://www.vegrecipesofindia.com/wp-content/uploads/2019/01/oats-idli-recipe-1.jpg" },
        { text: "Oats with fruits and nuts: Rolled oats topped with a variety of fruits and nuts.", image: "https://www.whiskaffair.com/wp-content/uploads/2017/07/Beetroot-Oats-Idli-2-3.jpg" },
    ];

    const breakfastNonVegOptions = [
        { text: "Scrambled eggs with spinach: Eggs scrambled with fresh spinach, providing a nutritious start to the day.", image: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/basil-scramble-with-wilted-spinach-seared-tomatoes-619f05a.jpg" },
        { text: "Chicken sausage with whole grain toast: Lean chicken sausage served with toasted whole grain bread for a protein-packed breakfast.", image: "https://fastfoodnutrition.org/item-photos/full/9400.jpg" },
        { text: "Omelette with whole wheat toast: Eggs cooked with vegetables served with toast, a balanced and filling meal.", image: "https://mediavine-res.cloudinary.com/image/upload/s--YYXEUuuL--/c_limit,f_auto,fl_lossy,h_1080,q_auto,w_1920/v1619225171/hgjyklf3c0i3mc50twvz.jpg" },
        { text: "Chicken sandwich: Whole grain bread with lean chicken and vegetables, perfect for a quick and healthy breakfast.", image: "https://cdn.sanity.io/images/g1s4qnmz/production/f8de3529e401762005059c9bdf7938fd06bd2b53-1500x1500.jpg" },
    ];

    const lunchVegOptions = [
        { text: "Chole Masala: Spicy chickpea curry, commonly served with rice or flatbreads.", image: "https://whatscookingmom.in/wp-content/uploads/2017/11/lunch-plate.jpg" },
        { text: "Panchmel Dal: A mix of five different lentils cooked with spices, often paired with roti or rice.", image: "https://whatscookingmom.in/wp-content/uploads/2017/11/lunch-plate-1.jpg" },
        { text: "Parathas: Whole wheat flatbreads, sometimes stuffed with vegetables or paneer, served with curd or pickle.", image: "https://whatscookingmom.in/wp-content/uploads/2017/11/lunch-ideas.jpg" },
        { text: "Rajma Masala: Kidney beans cooked in a rich, spiced tomato gravy, best enjoyed with steamed rice.", image: "https://whatscookingmom.in/wp-content/uploads/2017/11/rajma-chawal.jpg" },
    ];

    const lunchNonVegOptions = [
        { text: "Ande Ka Salan Recipe: Tangy egg curry cooked in a flavorful peanut gravy.", image: "https://c.ndtvimg.com/2022-03/cj43djh8_coconut-curry_625x300_17_March_22.jpg?im=FaceCrop,algorithm=dnn,width=384,height=384" },
        { text: "Kalmi Kabab Recipe: Mughlai-style chicken drumsticks marinated in spices and grilled to perfection.", image: "https://c.ndtvimg.com/2024-01/fkaaisag_kebabs_625x300_22_January_24.jpg?im=FeatureCrop,algorithm=dnn,width=384,height=384" },
        { text: "Meen Varuthathu Recipe: Kerala-style fish fry, marinated in spices and shallow fried.", image: "https://c.ndtvimg.com/2022-12/p0b9dv6g_paya-curry_625x300_27_December_22.jpg?im=FaceCrop,algorithm=dnn,width=384,height=384" },
        { text: "Andaman Style Steamed Garlic Prawns Recipe: Fresh prawns steamed with garlic and spices, offering a delightful seafood experience.", image: "https://c.ndtvimg.com/2023-07/ju9dh5ko_chicken-_625x300_12_July_23.jpg?im=FaceCrop,algorithm=dnn,width=384,height=384" },
    ];

    const dinnerVegOptions = [
        { text: "Rajasthani Sabzi: A traditional Rajasthani mixed vegetable curry, spiced with local herbs and spices.", image: "https://c.ndtvimg.com/2023-09/cnj1t9vo_rajasthani-sabzi_625x300_14_September_23.jpg?im=FeatureCrop,algorithm=dnn,width=384,height=384" },
        { text: "South Indian Thali: A platter of various South Indian dishes including sambar, rasam, curd, and a variety of vegetable curries.", image: "https://c.ndtvimg.com/2023-01/n0aamqh_south-indian-food_625x300_17_January_23.jpg?im=FeatureCrop,algorithm=dnn,width=384,height=384" },
        { text: "Mixed Vegetable Curry: A hearty and nutritious curry made with a variety of fresh vegetables cooked in a flavorful gravy.", image: "https://c.ndtvimg.com/2022-05/lktbe7no_dinner-indian-food_625x300_11_May_22.jpg?im=FeatureCrop,algorithm=dnn,width=384,height=384" },
        { text: "Chole Masala: A popular North Indian dish made with chickpeas cooked in a spicy and tangy tomato-based gravy.", image: "https://c.ndtvimg.com/2024-03/rn0h58q8_chhole-generic_625x300_20_March_24.jpg?im=FeatureCrop,algorithm=dnn,width=384,height=384" },
    ];

    const dinnerNonVegOptions = [
        { text: "Maharashtra Thali: A traditional Maharashtrian platter that includes various dishes such as chicken curry, bhakri (flatbread), rice, and pickles.", image: "https://c.ndtvimg.com/2022-09/so894bio_maharashtra-thali_625x300_19_September_22.jpg?im=FaceCrop,algorithm=dnn,width=384,height=384" },
        { text: "Chicken Biryani: A fragrant and flavorful rice dish made with marinated chicken, spices, and basmati rice, often served with raita and salad.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm9BO9bIrse5UgSxSH32UGPcGSvRHV6_Gf0A&s" },
        { text: "Butter Chicken: A creamy and mildly spiced tomato-based curry made with tender pieces of chicken, often served with naan or rice.", image: "https://c.ndtvimg.com/2021-05/1459bjp8_keto-butter-chicken_625x300_13_May_21.jpg?im=FaceCrop,algorithm=dnn,width=384,height=384" },
        { text: "Chicken Chettinad: A spicy and aromatic South Indian chicken curry made with a blend of freshly ground spices and coconut.", image: "https://c.ndtvimg.com/2022-03/vei6rmdo_chicken-chettinad_625x300_14_March_22.jpg?im=FaceCrop,algorithm=dnn,width=384,height=384"},
    ];

    const snacksVegOptions = [
        { text: "Roasted Makhana: A healthy and crunchy snack made from roasted fox nuts, lightly spiced for flavor.", image: "https://c.ndtvimg.com/2022-05/pc89bb2o_makhana_625x300_25_May_22.jpg?im=FeatureCrop,algorithm=dnn,width=384,height=384" },
        { text: "Roasted Chickpeas: A nutritious and protein-packed snack made from chickpeas, roasted to perfection with spices.", image: "https://c.ndtvimg.com/2023-06/2g3h6vo8_chickpeas_625x300_07_June_23.jpg?im=FaceCrop,algorithm=dnn,width=384,height=384" },
        { text: "Banana Chips: Crispy and delicious chips made from thinly sliced raw bananas, fried until golden and salted.", image: "https://c.ndtvimg.com/2021-08/olsuq1f_chips_625x300_03_August_21.jpg?im=FaceCrop,algorithm=dnn,width=384,height=384" },
        { text: "Samosa: A popular Indian snack consisting of a crispy pastry filled with spiced potatoes and peas.", image: "https://c.ndtvimg.com/2022-09/lpcnb0g8_samosa_625x300_29_September_22.jpg?im=FeatureCrop,algorithm=dnn,width=384,height=384" },
    ];

    const snacksNonVegOptions = [
        { text: "Chicken Pakoda: Crispy, deep-fried chicken fritters made with spiced gram flour batter.", image: "https://c.ndtvimg.com/2022-04/nr69g1b_aloo-pakoda_625x300_07_April_22.jpg?im=FaceCrop,algorithm=dnn,width=384,height=384" },
        { text: "Chicken Spring Roll: Delicious rolls filled with a mix of chicken, vegetables, and spices, wrapped in a thin pastry and deep-fried.", image: "https://c.ndtvimg.com/2023-01/9n2haqi8_spring-roll_625x300_20_January_23.jpg?im=FeatureCrop,algorithm=dnn,width=384,height=384" },
        { text: "Chicken Cutlet: Spiced chicken patties, coated with breadcrumbs and fried until golden and crispy.", image: "https://c.ndtvimg.com/2022-03/n5t86eqg_cutlet_625x300_09_March_22.jpg?im=FaceCrop,algorithm=dnn,width=384,height=384" },
        { text: "Fish Cutlet: Flavorful and crispy fish cutlets made with spiced fish, potatoes, and breadcrumbs, fried to perfection.", image: "https://c.ndtvimg.com/2020-05/tgl1cv0o_fish-cutlet_625x300_05_May_20.jpg?im=FaceCrop,algorithm=dnn,width=384,height=384" },
    ];
    
    return (
        <div id="scrollspyHeading4" className="container py-5 col-xs-6">
            <h2 className="text-center mb-5">Nutrition Plans</h2>

            <div className="row">
                <div className="col-md-6">
                    <h3 className="mb-4 text-center">Breakfast</h3>
                    <div className="row">
                        <div className="col-6 mb-3">
                            <button type="button" className="btn btn-outline-success w-100" data-bs-toggle="modal" data-bs-target="#breakfastVegModal">
                                Vegetarian Options
                            </button>
                        </div>
                        <div className="col-6 mb-3">
                            <button type="button" className="btn w-100 btn-outline-danger" data-bs-toggle="modal" data-bs-target="#breakfastNonVegModal">
                                Non-Vegetarian Options
                            </button>
                        </div>
                    </div>
                </div>

                <div className="col-md-6">
                    <h3 className="mb-4 text-center">Lunch</h3>
                    <div className="row">
                        <div className="col-6 mb-3">
                            <button type="button" className="btn btn-outline-success w-100" data-bs-toggle="modal" data-bs-target="#lunchVegModal">
                                Vegetarian Options
                            </button>
                        </div>
                        <div className="col-6 mb-3">
                            <button type="button" className="btn w-100 btn-outline-danger" data-bs-toggle="modal" data-bs-target="#lunchNonVegModal">
                                Non-Vegetarian Options
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row mt-4">
                <div className="col-md-6">
                    <h3 className="mb-4 text-center">Dinner</h3>
                    <div className="row">
                        <div className="col-6 mb-3">
                            <button type="button" className="btn btn-outline-success w-100" data-bs-toggle="modal" data-bs-target="#dinnerVegModal">
                                Vegetarian Options
                            </button>
                        </div>
                        <div className="col-6 mb-3">
                            <button type="button" className="btn w-100 btn-outline-danger" data-bs-toggle="modal" data-bs-target="#dinnerNonVegModal">
                                Non-Vegetarian Options
                            </button>
                        </div>
                    </div>
                </div>

                <div className="col-md-6">
                    <h3 className="mb-4 text-center">Snacks</h3>
                    <div className="row">
                        <div className="col-6 mb-3">
                            <button type="button" className="btn btn-outline-success w-100" data-bs-toggle="modal" data-bs-target="#snacksVegModal">
                                Vegetarian Options
                            </button>
                        </div>
                        <div className="col-6 mb-3">
                            <button type="button" className="btn w-100 btn-outline-danger" data-bs-toggle="modal" data-bs-target="#snacksNonVegModal">
                                Non-Vegetarian Options
                            </button>
                        </div>
                    </div>
                </div>
            </div>

          
            
            {/* Modals */}
            <Modal id="breakfastVegModal" title="Vegetarian Breakfast Options" options={breakfastVegOptions} />
            <Modal id="breakfastNonVegModal" title="Non-Vegetarian Breakfast Options" options={breakfastNonVegOptions} />
            <Modal id="lunchVegModal" title="Vegetarian Lunch Options" options={lunchVegOptions} />
            <Modal id="lunchNonVegModal" title="Non-Vegetarian Lunch Options" options={lunchNonVegOptions} />
            <Modal id="dinnerVegModal" title="Vegetarian Dinner Options" options={dinnerVegOptions} />
            <Modal id="dinnerNonVegModal" title="Non-Vegetarian Dinner Options" options={dinnerNonVegOptions} />
            <Modal id="snacksVegModal" title="Vegetarian Snacks Options" options={snacksVegOptions} />
            <Modal id="snacksNonVegModal" title="Non-Vegetarian Snacks Options" options={snacksNonVegOptions} />

            <div className="container py-5">
  <h2 className="text-center mb-5">Supplements</h2>
  <div className="row justify-content-between">
    <div className="card mb-3 col-sm-3" style={{ width: '15rem', height: '32rem'}}>
      <img className="card-img-top" src="https://www.getsupp.com/static/media/__resized/images/products/SI8PNAE7EP6K7MS9H-f8f64806-2e4b-4e62-b463-386d96ad184a-thumbnail_webp-1080x1080-70.webp" alt="Whey Protein" />
      <div className="card-body">
        <h5 className="card-title">Whey Protein</h5>
        <p className="card-text">Whey protein is the protein from whey, the watery portion of milk that separates from the curds when making cheese.</p>
        <a target="_blank" rel="noopener noreferrer" href="https://www.getsupp.com/muscleblaze-beginners-whey-protein-_-skimmed-milk-powder-whey-protein-concentrate-for-faster-muscle-recovery-and-improved-strength/RODHGFS4OE/sp?gad_source=1&gclid=CjwKCAjw-O6zBhASEiwAOHeGxUeA1V8Re7ko42DIfkZfepnkr1CtVHriw4lmTznbSXo5PJfvudKMWxoCSRQQAvD_BwE" className="btn btn-primary">Buy Now</a>
      </div>
    </div>
    <div className="card mb-3 col-sm-3" style={{ width: '15rem',height: '32rem' }}>
      <img className="card-img-top" src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTb5-ULaBAiEo1_FjBFJ1mznx3Vr5VhV4tupohRGyPq8-YW8_NZcY3_GqWjNp2KVoG-WZVzNiNvEjlo5S0d70yC-KNCzuV97Ji_j3r0U-F2Ffa9pSPeoNvdAp_3ypfv8h_nYJQcZnqT6g&usqp=CAc" alt="Creatine Monohydrate" />
      <div className="card-body">
        <h5 className="card-title">Creatine Monohydrate</h5>
        <p className="card-text">The monohydrate form of creatine similar or identical to endogenous creatine produced in the liver, kidneys, and pancreas.</p>
        <a target="_blank" rel="noopener noreferrer" href="https://www.muscleblaze.com/sv/muscleblaze-creatine-monohydrate-creamp/SP-33852?navKey=VRNT-63864&utm_source=google&utm_medium=cpc&utm_campaign=MB.com_Creatine_ATL_PMAX_06052024&gad_source=1&gclid=CjwKCAjw-O6zBhASEiwAOHeGxctA0E6pah3kSICw2PLMUcJ0PmWctu4Ae5oyjGL7pFgUbaat8AtGqBoCzS4QAvD_BwE" className="btn btn-primary">Buy Now</a>
      </div>
    </div>
    <div className="card mb-3 col-sm-3" style={{ width: '15rem', height: '32rem'}}>
      <img className="card-img-top" src="https://img7.hkrtcdn.com/20569/prd_2056826-HealthKart-HK-Vitals-Multivitamin-with-MultimineralTaurine-Ginseng-Extract-90-tablets-Unflavoured_o.jpg" alt="Multivitamins Tablets" />
      <div className="card-body">
        <h5 className="card-title">Multivitamins Tablets</h5>
        <p className="card-text">Whey protein is the protein from whey, the watery portion of milk that separates from the curds when making cheese.</p>
        <a target="_blank" rel="noopener noreferrer" href="https://www.healthkart.com/sv/healthkart-hk-vitals-multivitamin-with-multimineral/SP-39873?navKey=VRNT-77418&utm_source=google&utm_medium=cpc&utm_campaign=_BR_HK.com_MB_BTL_PMAX_11052023&gad_source=1&gclid=CjwKCAjw-O6zBhASEiwAOHeGxQAFMpJfDLXl6mu5Zmi0xBEX9HkL8RBpAMz8YXoVFcrjtClYjiORrhoCijwQAvD_BwE" className="btn btn-primary">Buy Now</a>
      </div>
    </div>
    <div className="card mb-3 col-sm-3" style={{ width: '15rem',height: '32rem' }}>
      <img className="card-img-top" src="https://nisupplements.com/cdn/shop/products/bc1_800x.png?v=1669727789" alt="Branched-chain amino acids (BCAAs)" />
      <div className="card-body">
        <h5 className="card-title">Branched-chain amino acids (BCAAs)</h5>
        <p className="card-text">This is essential amino acids (leucine, isoleucine, and valine) that are vital for muscle protein synthesis.</p>
        <a target="_blank" rel="noopener noreferrer" href="https://boltnutritions.com/products/bcaa?variant=47684240867602&currency=INR&utm_medium=product_sync&utm_source=google&utm_content=sag_organic&utm_campaign=sag_organic&gad_source=1&gclid=CjwKCAjw-O6zBhASEiwAOHeGxc7ekF8-Ubqp8pLJMrevDHXvhDESl3hmID6EzWrdDJrDIg0UGbHp4hoCSFwQAvD_BwE" className="btn btn-primary">Buy Now</a>
      </div>
    </div>
    <div className="card mb-3 col-sm-6" style={{ width: '15rem',height: '32rem' }}>
      <img className="card-img-top" src="https://bigmusclesnutrition.com/cdn/shop/files/Front_1.png?v=1697707469c" alt="Beta-alanine" />
      <div className="card-body">
        <h5 className="card-title">Beta-alanine</h5>
        <p className="card-text">Beta-alanine is an amino acid that increases carnosine levels in muscles, buffering acid and delaying fatigue.</p>
        <a target="_blank" rel="noopener noreferrer" href="https://bigmusclesnutrition.com/products/beta-alanine?variant=33430176956515&currency=INR&utm_medium=product_sync&utm_source=google&utm_content=sag_organic&utm_campaign=sag_organic&utm_source=Google&utm_medium=cpc&utm_campaign=Sok_Pmax_TRoAS_290422&utm_content=&utm_term=&placement=&gad_source=1&gclid=CjwKCAjw-O6zBhASEiwAOHeGxQWzTiXFlumWMApJEM1oqj583CtNqutq9iDsOujwMWFuHAjU1qJXxhoCujMQAvD_BwE" className="btn btn-primary">Buy Now</a>
      </div>
    </div>
  </div>
</div>


        </div>
    
    );
};

export default NutritionPlans;

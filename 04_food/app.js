import React from 'react';
import ReactDOM from 'react-dom/client';

/*
    Header
        - Logo
        - Nav Items
    Body
        - Search
        - Restaurent Container
            - Restaurant Card
                - image
                - name of res, Star rating, cusine,delivery rating
    Footer
        - Copyright
        - Links
        - Address
        - Contact
*/


const Header=()=>{
    return  (
        <div className="header">
            <div className='logo-container'>
                <img 
                className="logo" src='https://i.pinimg.com/originals/59/5f/a5/595fa5ffb3d67f62ceabaa0d9a40d1e2.png' />
            </div>
            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}


const styleCard={
    backgroundColor: "#f0f0f0"
}

const resList=[
    {
        "info": {
            "id": "22037",
            "name": "Wow! Momo",
            "cloudinaryImageId": "5a148e63e9c54942e37627da1aa156be",
            "locality": "Brigade Road",
            "areaName": "Brigade Road",
            "costForTwo": "₹250 for two",
            "cuisines": [
                "Tibetan",
                "Healthy Food",
                "Asian",
                "Chinese",
                "Snacks",
                "Continental",
                "Desserts",
                "Beverages"
            ],
            "avgRating": 4.4,
            "parentId": "1776",
            "avgRatingString": "4.4",
            "totalRatingsString": "5K+",
            "sla": {
                "deliveryTime": 30,
                "lastMileTravel": 2.1,
                "serviceability": "SERVICEABLE",
                "slaString": "25-30 mins",
                "lastMileTravelString": "2.1 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-02-17 01:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "60% OFF",
                "subHeader": "UPTO ₹120"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/wow-momo-brigade-road-bangalore-22037",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "502957",
            "name": "Andhra Gunpowder",
            "cloudinaryImageId": "bs9qgsy25pn07pzn6xx1",
            "locality": "Shivananda Circle",
            "areaName": "Seshadripuram",
            "costForTwo": "₹350 for two",
            "cuisines": [
                "Andhra",
                "Biryani",
                "South Indian"
            ],
            "avgRating": 4.4,
            "parentId": "10496",
            "avgRatingString": "4.4",
            "totalRatingsString": "1K+",
            "sla": {
                "deliveryTime": 36,
                "lastMileTravel": 3.9,
                "serviceability": "SERVICEABLE",
                "slaString": "35-40 mins",
                "lastMileTravelString": "3.9 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-02-17 01:00:00",
                "opened": true
            },
            "badges": {
                "textExtendedBadges": [
                    {
                        "iconId": "guiltfree/GF_Logo_android_3x",
                        "shortDescription": "options available",
                        "fontColor": "#7E808C"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "",
                                    "fontColor": "#7E808C",
                                    "iconId": "guiltfree/GF_Logo_android_3x",
                                    "shortDescription": "options available"
                                }
                            }
                        ]
                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹100 OFF",
                "subHeader": "ABOVE ₹399",
                "discountTag": "FLAT DEAL"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/andhra-gunpowder-shivananda-circle-seshadripuram-bangalore-502957",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "347868",
            "name": "KFC",
            "cloudinaryImageId": "f01666ac73626461d7455d9c24005cd4",
            "locality": "Cunnigham road",
            "areaName": "Vasanth Nagar",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "Burgers",
                "Biryani",
                "American",
                "Snacks",
                "Fast Food"
            ],
            "avgRating": 4,
            "parentId": "547",
            "avgRatingString": "4.0",
            "totalRatingsString": "1K+",
            "sla": {
                "deliveryTime": 31,
                "lastMileTravel": 3,
                "serviceability": "SERVICEABLE",
                "slaString": "30-35 mins",
                "lastMileTravelString": "3.0 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-02-17 03:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "40% OFF",
                "subHeader": "UPTO ₹80"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/kfc-cunnigham-road-vasanth-nagar-bangalore-347868",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "43836",
            "name": "McDonald's",
            "cloudinaryImageId": "03501c33ecb3a3105124441e541e6fe4",
            "locality": "MG Road",
            "areaName": "Ashok Nagar",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "Burgers",
                "Beverages",
                "Cafe",
                "Desserts"
            ],
            "avgRating": 4.3,
            "parentId": "630",
            "avgRatingString": "4.3",
            "totalRatingsString": "10K+",
            "sla": {
                "deliveryTime": 22,
                "lastMileTravel": 0.7,
                "serviceability": "SERVICEABLE",
                "slaString": "20-25 mins",
                "lastMileTravelString": "0.7 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-02-17 02:55:00",
                "opened": true
            },
            "badges": {
                "textExtendedBadges": [
                    {
                        "iconId": "guiltfree/GF_Logo_android_3x",
                        "shortDescription": "options available",
                        "fontColor": "#7E808C"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "",
                                    "fontColor": "#7E808C",
                                    "iconId": "guiltfree/GF_Logo_android_3x",
                                    "shortDescription": "options available"
                                }
                            }
                        ]
                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "20% OFF",
                "subHeader": "UPTO ₹50"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/mcdonalds-mg-road-ashok-nagar-bangalore-43836",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "16073",
            "name": "California Burrito",
            "cloudinaryImageId": "27238ee4292d42c7b705f2ce8671ff80",
            "locality": "Malleshwaram",
            "areaName": "Malleshwaram",
            "costForTwo": "₹250 for two",
            "cuisines": [
                "Mexican",
                "American",
                "Salads",
                "Continental",
                "Keto",
                "Healthy Food"
            ],
            "avgRating": 4.6,
            "parentId": "1252",
            "avgRatingString": "4.6",
            "totalRatingsString": "10K+",
            "sla": {
                "deliveryTime": 41,
                "lastMileTravel": 5,
                "serviceability": "SERVICEABLE",
                "slaString": "40-45 mins",
                "lastMileTravelString": "5.0 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-02-16 23:00:00",
                "opened": true
            },
            "badges": {
                "textExtendedBadges": [
                    {
                        "iconId": "guiltfree/GF_Logo_android_3x",
                        "shortDescription": "options available",
                        "fontColor": "#7E808C"
                    }
                ]
            },
            "isOpen": true,
            "aggregatedDiscountInfoV2": {},
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "",
                                    "fontColor": "#7E808C",
                                    "iconId": "guiltfree/GF_Logo_android_3x",
                                    "shortDescription": "options available"
                                }
                            }
                        ]
                    }
                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/california-burrito-malleshwaram-bangalore-16073",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "23847",
            "name": "Domino's Pizza",
            "cloudinaryImageId": "fjqcvqfgqlw6h0atques",
            "locality": "Rest House Road",
            "areaName": "Brigade Road",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "Pizzas",
                "Italian",
                "Pastas",
                "Desserts"
            ],
            "avgRating": 4.4,
            "parentId": "2456",
            "avgRatingString": "4.4",
            "totalRatingsString": "5K+",
            "sla": {
                "deliveryTime": 25,
                "serviceability": "SERVICEABLE",
                "slaString": "25 mins",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-02-16 22:59:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "40% OFF",
                "subHeader": "UPTO ₹80"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/dominos-pizza-rest-house-road-brigade-road-bangalore-23847",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "3369",
            "name": "Truffles",
            "cloudinaryImageId": "cd832b6167eb9f88aeb1ccdebf38d942",
            "locality": "St. Marks Road",
            "areaName": "St. Marks Road",
            "costForTwo": "₹450 for two",
            "cuisines": [
                "American",
                "Desserts",
                "Continental",
                "Italian"
            ],
            "avgRating": 4.6,
            "parentId": "218065",
            "avgRatingString": "4.6",
            "totalRatingsString": "10K+",
            "sla": {
                "deliveryTime": 33,
                "lastMileTravel": 0.8,
                "serviceability": "SERVICEABLE",
                "slaString": "30-35 mins",
                "lastMileTravelString": "0.8 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-02-16 23:30:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "30% OFF",
                "subHeader": "UPTO ₹75"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/truffles-st-marks-road-bangalore-3369",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "30531",
            "name": "Hotel Empire",
            "cloudinaryImageId": "qltgnkyywuo5gmnpqzbm",
            "locality": "Brigade Road",
            "areaName": "Church Street",
            "costForTwo": "₹450 for two",
            "cuisines": [
                "North Indian",
                "Kebabs",
                "Biryani"
            ],
            "avgRating": 4.4,
            "parentId": "475",
            "avgRatingString": "4.4",
            "totalRatingsString": "10K+",
            "sla": {
                "deliveryTime": 40,
                "lastMileTravel": 2.3,
                "serviceability": "SERVICEABLE",
                "slaString": "35-40 mins",
                "lastMileTravelString": "2.3 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-02-17 03:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "10% OFF",
                "subHeader": "UPTO ₹40"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/hotel-empire-brigade-road-church-street-bangalore-30531",
            "type": "WEBLINK"
        }
    }
]


const RestaurantCard=(props)=>{
    const {resData}=props

    const {cloudinaryImageId,name,cuisines,avgRating,costForTwo,sla}=resData?.info
    return (
        <div className='res-card' style={styleCard}>
            <img alt="res-logo"
            className='res-logo'
            src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId}/>
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo} </h4>
            <h4>{sla.slaString}</h4>
        </div>
    )
} 

const Body=()=>{
    return (
        <div className='body'> 
            <div className='search'>
                Search
            </div>
            <div className="res-container">
            {
                resList.map((restaurant) => (<RestaurantCard resData={restaurant}/>))
            }
            </div>
        </div>
    )
}

const AppLayoutComponet=()=>{
    return (
        <div className="app">
            <Header />
            <Body />
            


        </div>
    )
}


const root=ReactDOM.createRoot(document.getElementById('root'))

root.render(<AppLayoutComponet/>)
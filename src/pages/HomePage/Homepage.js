//rafce

import { Helmet } from "react-helmet";
import RecommendedVideos from "../RecommendedVideos/RecommendedVideos";
import Subscription from "../Subscription/Subscription";
import TrendingVideoList from "../TrendingVideoList/TrendingVideoList";
import LatestVideo from "./LatestVideo/LatestVideo";
import LifeCycleDemo from "./LifeCycleDemo/LifeCycleDemo";
import MyProfile from "./MyProfile/MyProfile";


const Homepage = () => {
    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>

            <h1>Home Page</h1>
            <div className="row mt-5 ">
                <h1>Latest Video</h1>
                <div className="col-md-3 shadow-lg p-3 mb-5 bg-body rounded">
                    <LatestVideo
                        title='IND vs SA 1st ODI 2023 Highlights'
                        videoDescription='Watch Highlights between IND and SA'
                        views='1M'
                        publishedOn='5 mins ago'
                    />
                </div>

                <div className="col-md-3 shadow-lg p-3 mb-5 bg-body rounded">
                    <LatestVideo
                        title='USA vs OMAN WC Qualifier 2023 Highlights'
                        videoDescription='Watch Highlights between USA vs OMAN'
                        views='500k'
                        publishedOn='50 mins ago'
                        imageUrl = ''
                    />
                </div>

                <div className="col-md-3 shadow-lg p-3 mb-5 bg-body rounded">
                    <LatestVideo
                        title='BVB vs MC Football 2023 Highlights'
                        videoDescription='Watch the Highlights between BVB vs MC'
                        views='1M'
                        publishedOn='1 Day ago'
                    />
                </div>

                <div className="col-md-3 shadow-lg p-3 mb-5 bg-body rounded">
                    <LatestVideo
                        title='CSK vs RCB IPL Final Highlights'
                        videoDescription='Watch the Highlights between CSK and RCB'
                        views='10M'
                        publishedOn='51 mins ago'
                    />
                </div>

            </div>

            <div className="row mt-4">
                <h2>Trending Video</h2>
                <TrendingVideoList />
            </div>

            <div className="mt-4">
                <h2>Recommended Videos</h2>
                <RecommendedVideos />
            </div>

            <div className="mt-4">
                <h2>Subscription Status</h2>
                <Subscription />
            </div>

            <div className="mt-4">
                <h2>Profile Status</h2>
                <MyProfile />
            </div>

            <div className="mt-4">
                <h2>LifeCycle Demo</h2>
                <LifeCycleDemo />
            </div>

        </div>
    )
}

export default Homepage;
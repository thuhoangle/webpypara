import React from 'react'
import img from "./../assets/coolncry.jpeg"

function UserPosts() {
    return (
        <div className="lg:w-8/12 lg:mx-auto mb-8">
        <div className="flex flex-wrap -mx-px md:-mx-3">
            <div className="w-1/3 p-px md:px-3">
                <a href="#">
                    <article className="post w-full h-auto left-0 top-0 object-cover relative ">
                        <img className="" src={img} alt="image"/>
                        <div className="absolute bottom-0 left-0 right-0 top-0 h-auto w-full overflow-hidden bg-blackHover bg-fixed opacity-0 hover:opacity-100"></div>
                    </article>
                </a>
            </div>
        </div>
        </div>
    )
}

            {/*<div className="max-w-4xl mx-5 pb-10 xl:mx-auto">*/}
        {/*    <div className="grid grid-cols-3 lg:grid-cols-3 gap-2 place-self-center content-center ">*/}
        {/*        /!*overflow-hidden*!/*/}
        {/*        <div className={'relative object-cover overflow-hidden h-auto w-full cursor-pointer'}>*/}
        {/*            <img src={img}/>*/}
        {/*            <div*/}
        {/*                className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-blackHover bg-fixed opacity-0 hover:opacity-100">*/}
        {/*            </div>*/}
        {/*        </div>*/}

        {/*        <div className={'relative object-cover overflow-hidden  w-full cursor-pointer'}>*/}
        {/*            <img src={img}/>*/}
        {/*            <div*/}
        {/*                className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-blackHover bg-fixed opacity-0 hover:opacity-100">*/}
        {/*            </div>*/}
        {/*        </div>*/}

        {/*        <div className={'relative object-cover overflow-hidden h-auto w-full cursor-pointer'}>*/}
        {/*            <img src={img}/>*/}
        {/*            <div*/}
        {/*                className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-blackHover bg-fixed opacity-0 hover:opacity-100">*/}
        {/*            </div>*/}
        {/*        </div>*/}

        {/*        <div className={'relative object-cover overflow-hidden h-auto w-full cursor-pointer'}>*/}
        {/*            <img src={img}/>*/}
        {/*            <div*/}
        {/*                className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-blackHover bg-fixed opacity-0 hover:opacity-100">*/}
        {/*            </div>*/}
        {/*        </div>*/}

        {/*        <div className={'relative object-cover overflow-hidden h-auto w-full cursor-pointer'}>*/}
        {/*            <img src={img}/>*/}
        {/*            <div*/}
        {/*                className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-blackHover bg-fixed opacity-0 hover:opacity-100">*/}
        {/*            </div>*/}
        {/*        </div>*/}

        {/*        <div className={'relative object-cover overflow-hidden h-auto w-full cursor-pointer'}>*/}
        {/*            <img src={img}/>*/}
        {/*            <div*/}
        {/*                className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-blackHover bg-fixed opacity-0 hover:opacity-100">*/}
        {/*            </div>*/}
        {/*        </div>*/}

        {/*    </div>*/}

        {/*</div>*/}

export default UserPosts
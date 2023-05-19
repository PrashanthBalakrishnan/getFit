const Footer = () => {
    return (
        <footer className="bg-gray-200 py-12">
            <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
                <div className="basis-1/2">
                    <p className="my-5">
                        Lorem vitae ut augue auctor faucibus eget eget ut
                        libero. Elementum purus et arcu massa dictum
                        condimentum. Augue scelerisque iaculis orci ut habitant
                        laoreet. Iaculis tristique.
                    </p>
                    <p>© GetFit All Rights Reserved.</p>
                </div>
                <div className="mt-16 flex basis-1/4 flex-col gap-3 md:mt-0">
                    <h4 className="font-bold">Links</h4>
                    <a href="javascript:void(0)">Massa orci senectus</a>
                    <a href="javascript:void(0)">Et gravida id et etiam</a>
                </div>
                <div className="mt-16 basis-1/4 md:mt-0">
                    <h4 className="font-bold">Contact Us</h4>
                    <p className="my-5">
                        Tempus metus mattis risus volutpat egestas.
                    </p>
                    <p>(333)425-6825</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer

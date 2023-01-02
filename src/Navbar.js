import React from 'react';

function Navbar() {
    return (
        <div className="bg-neutral-900 col-span-full">
            <ul className="flex justify-between text-white py-3">
                <div className="ml-24">
                    <li>
                        <a href="#">
                            Music Lab
                        </a>
                    </li>
                </div>
                <div className="flex gap-x-16">
                    <li>
                        <a href="#">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            Features
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            Pricing
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            Download
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            Contact
                        </a>
                    </li>
                </div>
                <div className="mr-24">
                    <li>
                        <a href="#" type="button" className="">
                            Sign In
                        </a>
                    </li>
                </div>
            </ul>
        </div>
    )
}
export default Navbar;
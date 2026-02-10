import { Mail, MapPin, Phone } from "lucide-react";
import React from "react";
import SectionHeader from "./SectionHeader";

const ContactSection = () => {
    return (
        <section id="contact" className="py-20 px-6 md:px-12 bg-white">
            <div className="max-w-7xl mx-auto">
                <SectionHeader
                    title="Contact Us"
                    subtitle="Get in touch with our team in Phnom Penh. We're here to answer your questions and discuss how we can support your business needs."
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12 items-start">
                    {/* Contact Details Card */}
                    <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                        <h3 className="text-xl font-bold text-primary-blue mb-8">
                            AirXpress Cambodia Branch
                        </h3>

                        <div className="space-y-8">
                            <div className="flex items-start">
                                <div className="bg-red-100 p-3 rounded-full mr-4 shrink-0">
                                    <MapPin className="w-5 h-5 text-primary-red" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-primary-blue mb-1">Address</h4>
                                    <p className="text-gray-600 text-sm">
                                        Phnom Penh Tower, 13th Floor
                                        <br />
                                        #445 Monivong Boulevard
                                        <br />
                                        Phnom Penh, Cambodia
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="bg-red-100 p-3 rounded-full mr-4 shrink-0">
                                    <Mail className="w-5 h-5 text-primary-red" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-primary-blue mb-1">Email</h4>
                                    <p className="text-gray-600 text-sm">
                                        contact@airxpress.co.jp
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="bg-red-100 p-3 rounded-full mr-4 shrink-0">
                                    <Phone className="w-5 h-5 text-primary-red" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-primary-blue mb-1">Phone</h4>
                                    <p className="text-primary-red font-bold text-lg">
                                        +855 23 123 456
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Map Image Placeholder */}
                    <div className="h-full min-h-[400px] w-full bg-gray-200 rounded-2xl overflow-hidden relative">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.9557749199894!2d104.91870539184897!3d11.555028215081334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310957b792fd5455%3A0x239052a46dcc8c1!2sSpaciaNet!5e0!3m2!1sen!2skh!4v1770372521631!5m2!1sen!2skh"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="absolute inset-0 w-full h-full"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;

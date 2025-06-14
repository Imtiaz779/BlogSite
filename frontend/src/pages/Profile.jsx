import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import React from "react";
import userLogo from "../assets/user.jpg";
import { Link } from "react-router-dom";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea"

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

const Profile = () => {
  return (
    <div className="pt-20 md:ml-[320px] md:h-screen">
      <div className="max-w-6xl mx-auto mt-8">
        <Card className="flex md:flex-row flex-col gap-10 p-6 md:p-10 dark:bg-gray-800 mx-4 md:mx-0">
          {/* image section  */}
          <div className="flex flex-col items-center justify-center md:w-[400px]">
            <Avatar className="w-40 h-40 border-2">
              <AvatarImage src={userLogo} />
            </Avatar>
            <h1 className="text-center font-semibold text-xl text-gray-700 dark:text-gray-300 my-3">
              Mern Stack Developer
            </h1>
            <div className="flex gap-4 items-center">
              <Link>
                <FaFacebook className="w-6 h-6 text-gray-800 dark:text-gray-300" />
              </Link>
              <Link>
                <FaLinkedin className="w-6 h-6 text-gray-800 dark:text-gray-300" />
              </Link>
              <Link>
                <FaGithub className="w-6 h-6 text-gray-800 dark:text-gray-300" />
              </Link>
              <Link>
                <FaInstagram className="w-6 h-6 text-gray-800 dark:text-gray-300" />
              </Link>
            </div>
          </div>

          {/* info section  */}
          <div>
            <h1 className="font-bold text-center md:text-start text-4xl mb-7">
              Welcome User
            </h1>
            <p>
              <span className="font-semibold">Email :</span>{" "}
              imtiazhasan89mu@gmail.com
            </p>
            <div className="flex flex-col gap-2 items-start justify-start my-5">
              <Label>About Me</Label>
              <p className="border dark:border-gray-600 p-6 rounded-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                atque ipsum officiis cumque, at laudantium voluptate cum. Unde,
                facere officia.
              </p>
            </div>

            <Dialog>
              <form>
                <DialogTrigger asChild>
                  <Button>Edit profile</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle className="text-center">
                      Edit profile
                    </DialogTitle>
                    <DialogDescription className="text-center">
                      Make changes to your profile here. Click save when
                      you&apos;re done.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="flex gap-2">
                      <div className=" ">
                        <Label htmlFor="name" className="text-right mb-1">
                          First Name
                        </Label>
                        <Input
                          id="firstName"
                          name="firstName"
                          placeholder="First Name"
                          type="text"
                          className="col-span-3 text-gray-500"
                        />
                      </div>
                      <div className=" ">
                        <Label htmlFor="lastname" className="text-right mb-1">
                          Last Name
                        </Label>
                        <Input
                          id="lastName"
                          name="lastName"
                          placeholder="Last Name"
                          type="text"
                          className="col-span-3 text-gray-500"
                        />
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <div className=" ">
                        <Label htmlFor="name" className="text-right mb-1">
                          Facebook
                        </Label>
                        <Input
                          id="facebook"
                          name="facebook"
                          placeholder="Enter a URL"
                          type="text"
                          className="col-span-3 text-gray-500"
                        />
                      </div>
                      <div className=" ">
                        <Label htmlFor="lastname" className="text-right mb-1">
                          Instagram
                        </Label>
                        <Input
                          id="instagram"
                          name="instagram"
                          placeholder="Enter a URL"
                          type="text"
                          className="col-span-3 text-gray-500"
                        />
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <div className=" ">
                        <Label htmlFor="name" className="text-right mb-1">
                          Linkedin
                        </Label>
                        <Input
                          id="linkedin"
                          name="linkedin"
                          placeholder="Enter a URL"
                          type="text"
                          className="col-span-3 text-gray-500"
                        />
                      </div>
                      <div className=" ">
                        <Label htmlFor="lastname" className="text-right mb-1">
                          Github
                        </Label>
                        <Input
                          id="github"
                          name="github"
                          placeholder="Enter a URL"
                          type="text"
                          className="col-span-3 text-gray-500"
                        />
                      </div>
                    </div>
                    <div>
                      <Label className="text-right mb-1">Description</Label>
                      <Textarea 
                      id="bio"
                      name="bio"
                      placeholder="Enter a description"
                      className="col-span-3 text-gray-500"
                      />
                    </div>
                    <div>
                        <Label className="text-right mb-1">Picture</Label>
                        <Input
                        id="file"
                        type="file"
                        accept="image/*"
                        className="w-[2"
                        />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button type="submit">Save changes</Button>
                  </DialogFooter>
                </DialogContent>
              </form>
            </Dialog>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Profile;

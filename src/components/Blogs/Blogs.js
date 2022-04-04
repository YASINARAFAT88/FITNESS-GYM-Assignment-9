import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='blogs-container'>
            <div className='blogOne'>
                <h2>What is contaxt api? </h2>
                <p>
                    Api Context হলো React এর একটি হুুক,
                    প্রোপ ড্রিলিং এর কাজকে সহজে এবং সরাসরি করার
                    জন্য context api এর ব্যবহার করা হয়,
                    react এর createCotext এর মধ্যে ডিফল্ট ভ্যালু দিয়ে ডিক্লেয়ার করে Single value বা Multiple value
                    Provider এর মধ্যে দিয়ে এক্সপোর্ট করতে হয়, তারপর যে ফাইল এ ব্যবহার করবো সেখানে ইম্পোর্ট করে ভেরিএবল এর নাম টা তারমধ্য দিয়ে খুব সহজেই ব্যবহার করতে পারি,
                    আমরা চাইলে কম্পনেন্ট এ context api ডিক্লেয়ার করে এর যত চাইল্ড কম্পনেন্ট থাকে সব গুলোতে context api ব্যবহার করতে পারি!!</p>
            </div>
            <div className='blogOne'>
                <h2>What is Semantic Tag?</h2>
                <p>
                    html এর টেগ গুলো Meaningful করার জন্য semantic tag এর ব্যবহার করতে হয়, semantic টেগ গুুলো হল header, nav, main,
                    section, article, aside, footer, এই গুলো হল semantic tag,, semantic tag গুুলো ব্যবহার করলে খুব সহজেই বুঝা যায় ওয়েবসাইট এর কোন পার্ট টা কোথায় কিভাবে করা হয়েছে, এবং semantic tag ওয়েবসাইট এর জন্য healthful এতে করে Google ranking করে বুঝতে পারে এটি একটি মার্জিত মান সম্পন্ন ওয়েবসাইট কিনা, এটিই হলো Semantic Tag!!</p>
            </div>

        </div>
    );
};

export default Blogs;
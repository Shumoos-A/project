import React, { createContext, useState, useContext, useEffect } from 'react';

const WishlistContext = createContext();

export const useWishlist = () => useContext(WishlistContext);

export const WishlistProvider = ({ children }) => {
    const [wishlistItems, setWishlistItems] = useState(() => {
        try {
            const localData = localStorage.getItem('wishlistItems');
            return localData ? JSON.parse(localData) : [];
        } catch (error) {
            return [];
        }
    });

    useEffect(() => {
        localStorage.setItem('wishlistItems', JSON.stringify(wishlistItems));
    }, [wishlistItems]);

    const toggleWishlistItem = (product) => {
        setWishlistItems(prevItems => {
            const isItemInWishlist = prevItems.find(item => item.id === product.id);
            if (isItemInWishlist) {
                return prevItems.filter(item => item.id !== product.id);
            } else {
                return [...prevItems, product];
            }
        });
    };

    const isItemInWishlist = (productId) => {
        return !!wishlistItems.find(item => item.id === productId);
    };

    return (
        <WishlistContext.Provider value={{ wishlistItems, toggleWishlistItem, isItemInWishlist }}>
            {children}
        </WishlistContext.Provider>
    );
};
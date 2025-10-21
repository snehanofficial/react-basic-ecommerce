import React from 'react'
import { create } from 'zustand'
import { persist } from 'zustand/middleware';

const useAuthStore = create(
    persist(
        set => ({
        email: '',
        password: '',
        isLoggedIn: false,
        setIsLoggedIn: (status) => set({isLoggedIn: status}),
        setUser: (user) => set({user})
    })
),
    {
        name: "userStorage"
    }
);

export default useAuthStore;
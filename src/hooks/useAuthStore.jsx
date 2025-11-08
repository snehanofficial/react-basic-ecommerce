import React from 'react'
import { create } from 'zustand'
import { persist } from 'zustand/middleware';

const useAuthStore = create(
    persist(
        set => ({
        email: '1',
        password: '1',
        name: '1',
        isLoggedIn: false,
        setIsLoggedIn: (status) => set({isLoggedIn: status}),
        setUser: ({email, name, password}) => set({email, name, password})
    })
),
    {
        name: "userStorage"
    }
);

export default useAuthStore;
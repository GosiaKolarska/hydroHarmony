import React from 'react';
import Sidebar from '../components/Sidebar';
import NavigationTitle from '../components/NavigationTitle';

export default function Location() {
    return (
        <div className="bg-gray-100 p-6">
            <NavigationTitle title="Podaj lokalizację" />
            <Sidebar />
                <div className="w-3/4 bg-white p-6 shadow rounded">
                    <h3>Wybierz pojedynczą miejscowość lub dodaj parę aby przejść dalej</h3>
                    <form>
                        <div className="mb-4">
                            <label htmlFor="localization" className="block text-sm font-medium text-gray-700">
                                1. Wyszukaj miejscowość
                            </label>
                            <div className="flex items-center">
                                <input type="text" name="localization" className="flex-1 p-2 border border-gray-300 rounded mr-2" />
                                <button type="button" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Wybierz na mapie</button>
                            </div>
                        </div>
                    </form>
                    <button type="button" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Dodaj kolejną</button>
                </div>
        </div>
    );
}

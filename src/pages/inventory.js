// src/pages/inventory.js
import Inventory from '../components/Inventory';

const InventoryPage = () => {
    return (
        <div style={{ paddingLeft: '20px', paddingRight: '20px', marginLeft: 'auto', marginRight: 'auto', maxWidth: '1200px' }}>
            <main>
                <h1>Inventory</h1>  
                <Inventory />
            </main>
        </div>
    );
};

export default InventoryPage;

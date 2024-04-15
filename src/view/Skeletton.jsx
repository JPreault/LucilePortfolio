import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Button from '../components/Button';

const Skeletton = () => {
    const views = {
        portfolio: 0,
        spa: 1
    }

    const [viewState, setViewState] = useState(views.portfolio);

    return (<div className="Skeletton">
        <Button
            className="switchView"
            onClick={() => setViewState(viewState === 0 ? views.spa : views.portfolio)}
            value={viewState === 0 ? "Découvrir le spa" : "Revenir au portfolio"}
        />
        <Outlet />
    </div>);
}

export default Skeletton;
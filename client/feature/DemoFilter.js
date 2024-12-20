import { useDatastore, useSessionData } from "../util/datastore"
import { PadBox } from "../component/basics"
import { UtilityText } from "../component/text"
import { Toggle } from "../component/form";

export const DemoFilterFeature = {
    name: 'Demo Filter',
    key: 'demofilter',
    config: {
        pageTopWidgets: [TypeFilter],
        commentFilters: [filterFunc],
        commentEditTopWidgets: [CatToggle],
        commentTopWidgets: [CatState],
        commentAllowEmpty: true,
        composerSubtitle: ({comment}) => comment?.text ? 'Demo Comment' : 'Empty Comment',
    }
} 

function TypeFilter({comments}) {
    const datastore = useDatastore();
    const enabled = useSessionData(['demofilter', 'enabled']);
    function setEnabled(value) {
        datastore.setSessionData(['demofilter', 'enabled'], value);
    }
    return <PadBox top={20} horiz={20}><Toggle label='Only Cats' value={enabled} onChange={setEnabled} /></PadBox>
}

function filterFunc({datastore, comment}) {
    const enabled = datastore.getSessionData(['demofilter', 'enabled']); 
    if (enabled) {
        return comment.isCat;
    } else {
        return true;
    }
}

function CatToggle({comment, setComment}) {
    return <PadBox bottom={10} left={16}><Toggle label='Is Cat' value={comment.isCat ?? false} 
        onChange={isCat => setComment({...comment, isCat})} /></PadBox>
}

function CatState({comment}) {
    if (comment.isCat) {
        return <PadBox bottom={10}><UtilityText weight='medium' label='Is a cat' /></PadBox>
    }
}

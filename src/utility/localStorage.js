const getPocketDb=()=>{
    const pocketDb=JSON.parse(localStorage.getItem('POCKET_DB'))
    return pocketDb
}

const setPocketDb=(group)=>{
    let pocketDb=getPocketDb()
    if(pocketDb){
        localStorage.setItem('POCKET_DB',JSON.stringify([...pocketDb,group]))
    }else{
        localStorage.setItem('POCKET_DB',JSON.stringify([group]))
    }
  
    
}

const addNoteToGroup=(activeGroupId,note)=>{
    console.log('adnotetogroup',activeGroupId,note)
    let pocketDb=getPocketDb()
    if(pocketDb){
        const currentGroupIndex=pocketDb?.findIndex((group)=>group.groupId===activeGroupId)
        console.log(currentGroupIndex)
        pocketDb[currentGroupIndex].notes=[...pocketDb[currentGroupIndex].notes,note]
        localStorage.setItem('POCKET_DB',JSON.stringify(pocketDb))
    }
}

export {setPocketDb,getPocketDb,addNoteToGroup}
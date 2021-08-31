import React from 'react'

function Instructions({ field_id, field_label, field_placeholder, field_value,field_type,field_disable }) {
        <div className="instructions" >
            {field_value? field_value :
'  שקית: בוצע ערבוב של השקית עפ"י הנדרש בנוהל HC-PP-036.<br/>בוצעה בדיקה ויזואלית לתוכן השקית שנמצא תקין לשימוש מבחינת צבע,משקעים, אוויר והומוגניות .<br/>            ·          אינפיוזר: בוצע Prime לאינפיוזר. בוצעה בדיקה ויזואלית לתוכן האינפיוזרשנמצא תקין לשימוש מבחינת צבע, משקעים, אוויר והומוגניות.<br/>בוצע מאזן כמות תרופה.<br/>            ·          מזרק: בוצעה בדיקה ויזואלית לתוכן המזרק שנמצא תקין לשימוש מבחינת צבע,משקעים, אוויר והומוגניות.  בוצע מאזן כמות תרופה.<br/>'
}
        </div>

    )
}

export default Instructions

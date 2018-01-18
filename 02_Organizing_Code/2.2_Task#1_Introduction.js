/**
 * Niektórzy aby odnosić sie w js-ie do atrybutów w HTML korzystają z ID, jednak nie jest to najlepsze podejście, 
 * z tego powodu, bo może ktoś zmienić CSS-y i ID, wtedy JS przestanie działać.
 * 
 * Można też korzystać z atrybutu data='', jednak bardziej elastyczne jest korzystanie z atrybutu rel=''
 */

 /*

 		<div class="controls" rel="js-controls">
			<a href="register.html" rel="nofollow js-register">register</a> |
			<a href="login.html" rel="nofollow js-login">login</a>
    </div>
    
*/

// rel='nofollow'         - używane jest do komunikacji z silnikami SEO, informuje aby nie śledzić danej strony

// <link rel='stylesheet' href='css/styles.css'>        - informuje że relacja między obecnym plikiem a plikiem docelowym to stylesheet

// rel='js-controls'      - informuje o tym, ze jedyna relacja miedzy obecnym plikiem a wskazywanym będzie wykonanie skryptu JavaScript
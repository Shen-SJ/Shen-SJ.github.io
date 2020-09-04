var tipuesearch = {"pages":[{"title":"About","text":"沈孝錚 Shen, Shiau-Jeng 學歷 國立臺灣大學化學工程研究所 國立臺灣科技大學化學工程系 臺北市立松山工農化工科 興趣愛好 樂器演奏 音樂欣賞 閱讀專業書籍 逛街 寫code... 關於我啊... 我是一個碩士畢業的社會小白，本科是化學工程，不過因為之前的研究領域是使用 AspenPlus® 軟體做製程模擬的，剛好自身對於程式有些興趣， 因此有自學 python 這個程式語言，並且拿它來寫跟剛剛那個軟體做一些結合以及比較進階的應用，當然因為這語言的方便性，也去嘗試了像網路 爬蟲、AI領域方面，甚至是現在這個寫部落格也是@@ 該部落格是使用 Pelican 這個用 Python 編寫的靜態網頁生成器，想說是用這語言寫的比 較熟，或許會比較知道生成的機制吧~ 雖然學了一些程式，本人對自己的化工本業可是非常喜歡的呢，不然也不會從高中就開始念化工到研究所了 哈哈哈，希望之後可以在這領域好好 走下去，並且學習更多新的事物與精進電腦程式方面的技能。","tags":"pages","url":"https://shen-sj.github.io/pages/about/","loc":"https://shen-sj.github.io/pages/about/"},{"title":"把 Intel Fortran 掛在 AspenPlus （4）更新 SetCompiler 列表","text":"前言 終於把該安裝的東西給安裝好了，不過我們的 AspenPlus 還不知道你安裝好了沒，需要透過 Set Compiler 告訴 AspenPlus 我們安裝的 Intel Fortran 跟 Visual Studio 安裝在什麼地方，當 AspenPlus 用到的時候，它就會自己去那些路徑找尋相關的工具來執行命令，這個步驟應該比較多 人知道，但 AspenPlus 提供的設定列表的 Fortran/VS 版本是比較舊的，大概近幾年的版本都不在上面，因此可能就會有人覺得 AspenPlus 好像不支援最新 版本的 Fortran/VS，這真是誤會大了！ 其實不只可以使用最新版本的 Fortran/VS，而且還用的很順暢呢！不過新版 Fortran/VS 不在列表那怎麼設定啊？ 解決辦法就是我們去新增這個列表就好，不過自己去設定雖然可行只是有點複雜，比較簡單個更新方式就是去 AspenTech Support Center 下載官方提供的列表 更新檔就好，在這篇文章裡我們就來介紹更新的步驟吧~列表自行更新的話也不是不時，但很複雜，之後我考慮當作 Appendix 來講好了。 如果需要看其他步驟，下面有目錄連結就點進去看吧~ 系列文章目錄 把 Intel Fortran 掛在 AspenPlus （1）申請 Intel 教育免費帳號 把 Intel Fortran 掛在 AspenPlus （2）安裝 Visual Studio 把 Intel Fortran 掛在 AspenPlus （3）安裝 Intel Fortran 把 Intel Fortran 掛在 AspenPlus （4）更新 SetCompiler 列表 等入 AspenTech Support Center 下載更新列表 首先我們先在電腦打開 AspenTech 提供的設定 Fortran/VS 路徑的 Set Compiler for VXX 應用程式（看你要設定的 AspenPlus 版本是甚麼，你的XX就是對應的數字），在這邊我就用 V10 來做示範： 在這應用程式裡面就可以看到 AspenPlus 提供的舊的Fortran/VS 的列表了，然後我這邊的列表最新只支援到 Fortran 2017 與 Visual Studio 2015， 一樣的畫面裡面，我們可以看到紅色圈圈位置顯示了這個列表是在 C:\\Program Files (x86)\\AspenTech\\APrSystem V10.0\\Engine\\xeq 地方的 Compilers.cfg，現在我們就是要去 AspenTech Support Center 下載他們提供的更新列表（也就是 Compilers.cfg 檔案）： 首先我們先到 AspenTech Support Center 這個網頁中，然後按下 Login 登入： 在這邊需要你輸入你們自己的 AspenTech 帳號密碼，然後按下 Submit 來登入： 這樣我們就進到 AspenTech 的網路了，我們可以在裡面找到由他們提供的你有買的軟體安裝檔，還有論壇可以在上面發問與看到人家的發問。現在我們要去找官方 提供的更新 Compilers.cfg 檔案，可以在登入的狀態下直接進到 這個 連結裡面，或是在自己的 Search... 欄位找 Fortran Compiler configurations supported by Aspen Plus 文章並點進去，拉到最下面找到 Compilers.cfg 與 Compilers64.cfg 並下載下來： 這邊稍微說一下為甚麼會有 Compilers.cfg 與 Compilers64.cfg 兩種檔案好了，像我這篇的例子， V10 版本的列表就是 Compilers.cfg 檔案，其實 V10以前（包含 V10）的 Fortran/VS 列表都是在 Compilers.cfg 檔案裡面，如果你是 V11，就是 Compilers64.cfg 檔案，打開 Set Compiler for V11 就能看到這個檔案名稱了。 我們的列表檔案下載下來了，現在我們就把列表直接貼到在第一步驟看到的 C:\\Program Files (x86)\\AspenTech\\APrSystem V10.0\\Engine\\xeq ，首先就先開啟檔案總管並到這個位置，可以看到 Compilers.cfg 就在裡面： 接下來我會先把路徑裡面的 Compilers.cfg 改個名子，這邊我改成 Compilers_old.cfg，然後把剛剛下載下來的 Compilers.cfg 貼到這個路徑下面變成 這樣： 然後我們就可以打開 Set Compiler 應用程式了！應該就會看到這個畫面，恭喜恭喜你的 Fortran/VS 已經被 AspenPlus 給認到了！從我的圖片來看就是 最後一個編號51： 雖然在上面了，不過還沒有設定，現在就把51這組設定進 AspenPlus 裡面去，首先就輸入51，然後按下 Enter，這個步驟其實就是它會把你的 Fortran/VS 設置設定到 HKEY_CURRENT_USER\\Software\\AspenTech\\APrSystem 相對應版本的機碼裡面，上面一段話聽不懂就算了XDD，後面有機會我再寫一篇文章討論： 接下來還要再按一次51，然後按 Enter，這步驟就是把你的 Fortran/VS 設置設定到 HKEY_LOCAL_MACHINE\\SOFTWARE[\\WOW6432Node]\\AspenTech\\APrSystem 相對應版本的機碼裡面，而且其實要用系統管理員身分開啟 Set Compiler 才能夠成功設定，上面這段話聽不懂也就算了XDD，後面有機會我再寫一篇文章一起討論： 最後如果出現下面這個畫面，恭喜表示你的 AspenPlus 也知道你安裝的 Fortran/VS 在哪裡了~之後用到指令來編譯你自己寫的 Fortran 檔的話它就會使用你 安裝的工具來編譯了： 結語 恭喜恭喜！！現在你的電腦應該就可以成功在 AspenPlus 跑 Fortran 了~~接下來的文章就是稍微講一下怎麼寫 Fortran 來擴充 AspenPlus 的功能，尤其是動力式的部分，然後怎麼編譯、掛上去讓 AspenPlus 找到它並運行這樣，確認你的 AspenPlus 真的知道 Fortran 在哪裡的這樣~","tags":"blogging","url":"https://shen-sj.github.io/articles/2020/09/04/ba-intel-fortran-gua-zai-aspenplus-4geng-xin-setcompiler-lie-biao/","loc":"https://shen-sj.github.io/articles/2020/09/04/ba-intel-fortran-gua-zai-aspenplus-4geng-xin-setcompiler-lie-biao/"},{"title":"把 Intel Fortran 掛在 AspenPlus （3）安裝 Intel Fortran","text":"前言 在你的 Intel Fortran 申請好了與 Visual Studio 也安裝好了後我們就可以來下載並安裝 Intel Fortran Compiler 了！ 如果需要看其他步驟，下面有目錄連結就點進去看吧~ 系列文章目錄 把 Intel Fortran 掛在 AspenPlus （1）申請 Intel 教育免費帳號 把 Intel Fortran 掛在 AspenPlus （2）安裝 Visual Studio 把 Intel Fortran 掛在 AspenPlus （3）安裝 Intel Fortran 把 Intel Fortran 掛在 AspenPlus （4）更新 SetCompiler 列表 下載 Intel Fortran 安裝之前我們就先來下載安裝檔案，我們一樣先在瀏覽器搜尋 Intel 或者直接點這的 連結 過去， 然後就是先登入我們在第一步驟申請的 Intel 帳號密碼： 登入後就進入 My Intel 儀錶板/My Intel Dashboard ： 接下來會進到你的個人帳號資訊畫面，往下拉找到 My Content 地方並把它展開，可以看到你申請的 Intel Parallel Studio XE 在列表當中，還有你的 免費教育板 License 跟其有效期限，點擊 Download Options ： 我們會進到 Intel Parallel Studio XE 的下載產品列表，可以看到列表中的 Intel Parallel Studio XE Composer Edition for Fortran and C++ Windows 就是我們要下載的 Intel Fortran Compiler了，所以我們就點擊這產品右邊的 Download 來下載： 在這邊可以選擇我們要下載的 Intel Fortran 版本年限，但只有近幾年的而已，不過既然新的版本可以用就用新的，功能比較多可能也比較沒有以前版本奇怪的 Bug，但我也怕太新的版本會有新 Bug ，所以這邊示範就下載第二新的 2020 Update 1 版本（這邊看你下載列表有甚麼就從裡面選想要的版本就好， 一段時間後列表應該會跟現在長的不一樣）： 選好版本後就可以下載了，可以看到下面有兩種下載選項，第一種 Customizable Package 就是你只會下載一個很小的檔案，透過這檔案在安裝的時候只會 從網路上下載你指定幾個需要安裝的軟體就好，可以節省下載的時間（就算你從Intel Parallel Studio XE 選了 Fortran 下載，還是會有很多安裝選項可以 選擇，像是一些 Fortran 相關模組包等等...），第二種 Full Package 就是會下載完整的安裝檔，下載時間比較久也比較大（不過在後面安裝步驟還是可以 選擇安裝的東西，只是你已經下載下來了，沒安裝浪費你下載檔案的時間而已），這邊就是看你要哪一種安裝檔而已，隨便選都可以，那這邊我就選 Full Package 好了，我時間很多XDD： 下載完就是一個安裝檔案，應該沒甚麼爭議就是右鍵兩下來啟動安裝，然後會問你一些安裝過程中會用到的檔案要放在哪邊這樣，安裝完它會自己刪掉， 這邊我就預設路徑，按下 Extract 繼續安裝： 這邊就可以看到安裝的選項了，至少我們的 Fortran 有安裝到，其它就看你自己要不要就好，這裡我就選這些東西安裝，然後按 Next ： 後面這邊就是一些這軟體的使用條款與注意事項，沒問題就按 I consent to the collection of my information 與 Next （沒選這個也沒辦法繼續安裝=.=）： 這邊這個問題是因為我電腦的 CPU 不是 Intel 的是 AMD 的，所以跳出這警告，但 AMD 的 CPU 還是可以用的別緊張，就放心按 Next 就好XDD： 然後就在 Provide a series number 下面的框框輸入你的產品序號囉（序號在 第一篇 文章收的 信當中，或是這篇你登入 Intel 帳號，進到 Dashboard 裡面的 My Content這邊），輸入好就按 Install 繼續安裝： 只能等它安裝好囉，這段時間有空就看看 paper 吧@@： 看到這畫面就恭喜你安裝完成了，快要可以在 AspenPlus 上面用 Fortran 了！！ 結語 到這邊，各種所需的軟體都已經安裝完畢了！（如果你的 AspenPlus 也安裝好的話）接下來的步驟我們只要讓 AspenPlus 找的到我們 Fortran 與 Visual Studio 的路徑就可以了~那就是使用 AspenPlus 所附贈的 Set Compiler 應用程式來達成這個目的，但是因為預設的 Fortran/VS 列表版本 都是比較舊的，所以我們必須去更新它，這樣才能認到我們新版的 Fortran/VS，下一篇就會介紹怎麼更新這個列表~","tags":"blogging","url":"https://shen-sj.github.io/articles/2020/09/02/ba-intel-fortran-gua-zai-aspenplus-3an-zhuang-intel-fortran/","loc":"https://shen-sj.github.io/articles/2020/09/02/ba-intel-fortran-gua-zai-aspenplus-3an-zhuang-intel-fortran/"},{"title":"把 Intel Fortran 掛在 AspenPlus （2）安裝 Visual Studio","text":"前言 上一篇文章教了怎麼申請 Intel Fortran Compiler 免費教育版，再來就是要準備安裝了！不過在安裝 Fortran 前，我們先來安裝 Visual Studio，因為跑 Fortran 的時候會需要用到 Visual Studio 的 C++ 套件，另外就是安裝 Fortran 時，會幫你在 Visual Studio 新增 Fortran專案 ，意思就是你可以用 Visual Studio 來寫 Fortran，編譯器路徑、Debug等等環境在你建立這 Fortran 專案後就會幫你設置好了， 對於想要純寫 Fortran 的人來說可是相當方便！那現在我們就來開始安裝 Visual Studio 吧~ 如果需要看其他步驟，下面有目錄連結就點進去看吧~ 系列文章目錄 把 Intel Fortran 掛在 AspenPlus （1）申請 Intel 教育免費帳號 把 Intel Fortran 掛在 AspenPlus （2）安裝 Visual Studio 把 Intel Fortran 掛在 AspenPlus （3）安裝 Intel Fortran 把 Intel Fortran 掛在 AspenPlus （4）更新 SetCompiler 列表 安裝 Visual Studio Community 首先一樣就是先在搜尋引擎找 Visual Studio ，在我的畫面是第一個所以我就點第一個進去： 再來就是點 下載Visual Studio 了，應該沒有甚麼爭議，然後可以看到三個版本，因為裡面只有 Community 版是免費，其他都是要錢的，所以就點擊 Community 2019(看你下載的年份是哪一年就下在那一年的 Community 版即可)，如果你有錢有其他版本的 License 那也是可以，不過在後面可能就要 稍微設定一下了，我們就後面再說吧： 下載完成後就是點開應用程式進行安裝： 後面就是按繼續，然後讓它自己準備安裝的東西這樣，但它還沒開始安裝喔，只是先 準備安裝 而已： 這邊就是勾選 C++ 套件相關的東西就可以了，勾選好了就可以點擊右下角的 安裝 按紐： 接下來就是漫長的等待了，等到這畫面結束後就安裝好了！ 結語 Visual Studio Community 與 C++ 相關套件安裝好了之後我們就可以來安裝 Intel Fortran Compiler 了，下面的文章就會解講安裝 Fortran 編譯器的一些注意事項了~","tags":"blogging","url":"https://shen-sj.github.io/articles/2020/09/01/ba-intel-fortran-gua-zai-aspenplus-2an-zhuang-visual-studio/","loc":"https://shen-sj.github.io/articles/2020/09/01/ba-intel-fortran-gua-zai-aspenplus-2an-zhuang-visual-studio/"},{"title":"把 Intel Fortran 掛在 AspenPlus （1）申請 Intel 教育免費帳號","text":"前言 我們在跑 AspenPlus 模擬的時候，如果像是動力式非常複雜但內建的反應蒸餾塔只能支持 Power law，那就只能自己掛 Fortran 上 AspenPlus 了，要將 Fortran 掛到 AspenPlus 上就會遇到兩個問題： 第一，AspenPlus 只能使用 Intel Fortran Compiler，但那個又要錢啊，因此可能有些人會找網路上的\"參考版\"來用；第二，從 AspenPlus 上的 \"Set Compiler\"來看，好像都不支援最新的 Fortran 編譯器。 其實上面那兩個問題都是可以解決的，我們學生與教育工作者，不只能用免費的 Intel Fortran，還可以用最新的 Fortran 編譯器！但需要一些繁瑣的 步驟就是，因此我在這邊把這步驟分享出來，希望大家可以一起來使用正版又最新的 Fortran 編譯器喔~~ 因為這步驟有點多，所以我會分為幾個文章來撰寫，首先我們就申請 Intel Fortran Compiler 的免費教育使用板吧~ 如果需要看其他步驟，下面有目錄連結就點進去看吧~ 系列文章目錄 把 Intel Fortran 掛在 AspenPlus （1）申請 Intel 教育免費帳號 把 Intel Fortran 掛在 AspenPlus （2）安裝 Visual Studio 把 Intel Fortran 掛在 AspenPlus （3）安裝 Intel Fortran 把 Intel Fortran 掛在 AspenPlus （4）更新 SetCompiler 列表 申請 Intel Parallel Studio XE 教育版 Intel Fortran Compiler 目前是包在 Intel Parallel Studio XE 這個產品包裡面，只要申請這這整個包的教育使用認證就可以 使用 Intel Fortran 了，首先我們就先在搜尋引擎尋找這個產品包： 在我的搜尋畫面是第一個啦，所以就點第一個超連結進去，然後就會看到 Intel 的歡迎畫面，之後理所當然的點下\"Download\"： 就會出現產品的封面，還有問你要不要買他們的產品，這時候不要緊張，畫面有一個\"Pricing for Academic Research\"的連結，就給他按下去： 他上面有說 Intel 軟體開發工具有誰可以免費使用，就選自己的身分點下去就好了，這邊我就以\"學生身分\"來做示範，所以我就點了\"Student\"： 在這個畫面就看你的作業系統是什麼就申請哪種的軟體囉，通常跑 AspenPlus 應該都是用 Windows 作業系統啦，所以這邊我就按下 \"Windows\"： 這頁面就是跟你說一些使用的注意事項，如果確認沒問題就打勾了（沒勾也是不能申請啊=.=），然後就按下 Accept： 然後就輸入你的個人資料還有信箱，記得這個信箱是要用你機構的信箱喔，它會用信箱來確認你的身分的，如果是學生/老師當然就是使用後面有 @xxx.edu.tw 或是國家認證的教育信箱了，輸入完並勾選下面確認你18歲的框框後就按 Submit ： 接下來 Intel 會要你創一個帳號用來管理你的憑證的，我們就可以登入帳號看到憑證的有效期限以及可以使用的產品並下載，這邊一樣把你想要創的帳號密碼、 個人資料與該勾選的勾一勾後，就按下下面的 Create an Account ： 上述的步驟都完成了後，就可以到剛剛我們申請憑證的信箱收信了，如果沒收到可能是 Intel 那邊還在審核吧，就等一段時間好了，我們應該會看到兩封信， 其中一封就是你的 Intel Parallel Studio XE 教育版（Intel Fortran Compiler 就在裡面）憑證，在下圖的紅色圈圈裡的馬賽克這序號要自己收 好不要讓別人看到，如果找不到這封信還可以登入你剛剛申請的 Intel 帳號看就是： 第二封信就是你剛剛申請 Intel 帳號的認證信件，點擊下圖圓形圈圈裏面的 link 進行帳號的認證即可~： 如果你看到下圖的樣子，表示你的 Intel Fortran 免費教育板就申請成功了！！距離使用 Fortran 在 AspenPlus 上已經距離一大步了哈哈哈： 結語 這步驟就是先申請 Intel Fortran Compiler 的免費教育板，不過在下載安裝這個之前，我們先把 Visual Studio 給安裝好，下篇文章 就會介紹怎麼安裝以及講解安裝的注意事項了~ 其實本來我想要寫這部落格就是想要來介紹不用錢的 Intel Fortran 怎麼申請還有怎麼把它掛到 AspenPlus 上面，拖到現在才開始寫呢@@ 希望我可以很有毅力的繼續把其他文章給寫完...","tags":"blogging","url":"https://shen-sj.github.io/articles/2020/08/31/ba-intel-fortran-gua-zai-aspenplus-1shen-qing-intel-jiao-yu-mian-fei-zhang-hao/","loc":"https://shen-sj.github.io/articles/2020/08/31/ba-intel-fortran-gua-zai-aspenplus-1shen-qing-intel-jiao-yu-mian-fei-zhang-hao/"},{"title":"用 Python 將 AspenPlus 連接起來！！","text":"前言 最近被人家問要怎麼用 Python 把 AspenPlus 連接起來，突然想到其實我這部落格的創立就是想說寫一些 AspenPlus/Dynamics 與 Python/Fortran 連接相關的說明書這樣，不然重新去看英文的說明書其實頗累的，我英文也不好...那今天就是先來介紹怎麼用 Python 將 AspenPlus 給連接起來吧~ 目錄 安裝相關程式與 packages 用 Python 連接 AspenPlus 檔案 在 AspenPlus 中找指定變數的路徑 完整的 code 結語 參考資料 安裝相關程式與 packages 首先就是要先把你的 Python 與 AspenPlus 安裝起來，這我就不說了，網路上應該有很多相關的，就挑一個自己看得懂的來做即可。 如果上面的都OK了，接下來就是要安裝讓 Python 可以與各種電腦應用程式進行互動的套件——pypiwin32——，使用你的 pip 來安裝： pip install pypiwin32 安裝好了後可以在你的 python 裡面 import 看看有沒有錯誤： import win32com.client as win32 如果沒有什麼輸出與錯誤表示安裝成功~ 用 Python 連接 AspenPlus 檔案 首先就是先匯入這個模組包，然後使用模組包的 Dispatch() 函式，傳入 'Apwn.Document' 值告訴 Python 你要開啟 AspenPlus 程式，如果你的電腦裡面有多種版本的 AspenPlus, 那可以傳 'Apwn.Document.{version_code}' 指定你的 AspenPlus 版本， code 與 version_code 如下： import win32com.client as win32 aspen = win32 . Dispatch ( 'Apwn.Document' ) # 使用你電腦預設 AspenPlus 版本開啟 aspen2 = win32 . Dispatch ( 'Apwn.Document.36.0' ) # 使用 AspenPlus V10.0 開啟 ↓ AspenPlus 版本與版本號的對應 版本 版本號 V8.8 34.0 V9 35.0 V10 36.0 V11 37.0 在這邊你取的變數名稱可以說就是代表你的 AspenPlus 程式了，之後對 AspenPlus 程式的操作都要用這個變數來進行，在這裡我 取名叫做 aspen 。接下來操控 AspenPlus 的語法都是在 UserGuide 上 Using the Aspen Plus ActiveX Automation Server 面找得到的了~通常呼叫了 AspenPlus 軟體後就是要開啟指定檔案，UserGuide 上說 InitFromArchive2(filename as String,...) 函式傳入檔案的 絕對路徑 就可以開啟檔案了（一定要絕對路徑喔！！不然就開不起來）就像下面的 code 這樣： aspen . InitFromArchive2 ( \"C: \\\\ Simulation 1.apw\" ) # 開啟 C:\\Simulation 1.apw 的檔案 可以開始用 Python 操控你的檔案了！！ 在 AspenPlus 中找指定變數的路徑 檔案開啟是開啟了，但如果你要把一些值抓出來或是用 Python 輸入進去，例如抓取/設定某蒸餾塔的塔板數還是不知道怎麼辦啊， 這時候我們就必須知道那個值在 AspenPlus 程式裡的甚麼地方並且呼叫他，我們可以用 AspenPlus 裡面的 Variable Explorer 找尋， 他在 AspenPlus Simulation 介面中的 Costomize 裡面： 點開來裡面就是一個階層式的資料索引，所有在 AspenPlus 檔案裡面的資料都在這裡面了！我們可以在裡面找到想要的變數路徑~ 不過其實這樣慢慢找蠻累的，有些看著索引名稱還好找，但有些真的是...，還好還是有方便的功能可以幫你快速找尋路徑！首先到你想要找的 那個變數，這邊就以名為 B1 的蒸餾塔塔頂壓力為例子好了，在壓力那個數字給他複製起來： 再來就到你的 Variable Explorer 那邊，於階層瀏覽空白那邊隨便地方點右鍵並按下 Go to Node ： 你會發現搜尋輸入框裡面已經有東西在裡面了！但那還不是你的路徑，就先按下 OK 讓他去找： 哇~他除了幫你找到結果還幫你打開了階層清單呢~真是不錯~在右邊表格那邊的資訊欄中就可以得知關於 B1 塔的塔頂壓力這物件的程式相關資訊， 其中的 Path to Node 與 Call 這兩個路徑都可以在程式裡面呼叫，再來就是用這個路徑呼叫其他關於這物件的屬性了，這裡要注意， 路徑裡面的開頭 Application 就是我們前面建立的 aspen 變數。 假設現在你要得到這塔頂壓力的值是多少，從表格來看， Value 屬性應該就是你的壓力值，程式就可以這樣寫： b1_p = aspen . Tree . Data . Blocks . B1 . Input . PRES1 . Value b1_p2 = aspen . Tree . FindNode ( r \"\\Data\\Blocks\\B1\\Input\\PRES1\" ) . Value # 跟上面那行的作用是一樣的 前面的路徑只是把 Application 改成我們取名的 aspen 而已，基本上一樣，再來就是 .Value 來得到我們的值這樣，另外要設定這個值 也是非常簡單，就跟平常妳寫程式用 = 來做就好： aspen . Tree . Data . Blocks . B1 . Input . PRES1 . Value = 2 aspen . Tree . FindNode ( r \"\\Data\\Blocks\\B1\\Input\\PRES1\" ) . Value = 2 # 跟上面那行的作用是一樣的 現在我把壓力設為 2 bar 了~ 完整的 code 上面的 code 為了要解說感覺有點亂，就在這邊寫一次完整的 code 吧~ 目標：用 Python 連接 AspenPlus V8.8 的 Simulation 1.apw 檔案，讀取 B1 塔的塔頂壓力並將其改成 2 bar。 import win32com.client as win32 # 匯入所需模組包 aspen = win32 . Dispatch ( 'Apw.Document.34.0' ) # 開啟 AspenPlus V8.8 程式 aspen . InitFromArchive2 ( 'C: \\\\ Simulation 1.apw' ) # 打開 C:\\\\Simulation 1.apw 檔案 b1_p = aspen . Tree . Data . Blocks . B1 . Input . PRES1 . Value # 取得 B1 塔頂壓力的值 aspen . Tree . FindNode ( r \"\\Data\\Blocks\\B1\\Input\\PRES1\" ) . Value = 2 # 將 B1 塔頂壓力改為 2 bar 結語 以上就是一個非常簡單得如何用 Python 連接 AspenPlus 的方式，裡面其實還有很多功能與坑沒說到，功能的話大部分 UserGuiude 都會介紹到， 可以去參考參考，真的覺得 UserGuide 算是蠻重要的，可以好好的看看，那坑的話像是你要取用的屬性如 Physical Quantity 這種名子裡面有空格 該怎麼辦，這有機會就再介紹了QQ 參考資料 Running Aspen via Python Aspen Plus User Guide","tags":"blogging","url":"https://shen-sj.github.io/articles/2020/07/26/yong-python-jiang-aspenplus-lian-jie-qi-lai/","loc":"https://shen-sj.github.io/articles/2020/07/26/yong-python-jiang-aspenplus-lian-jie-qi-lai/"},{"title":"Fiddler 無法抓取封包之 port 占用...","text":"事發經過 最近在寫網路爬蟲有用到 Fiddler 抓包軟體幫我看看用自己寫的程式送出與接收到的封包內容與直接用瀏覽器做這些動作有什麼不一樣， 進而去做一些程式碼的修改，一開始這個 Fiddler 抓包都用得好好的，但突然有一天一樣用 Fiddler 抓取我運行的爬蟲程式封包時候居然出現： Traceback (most recent call last): File \"main.py\", line 426, in <module> File \"main.py\", line 363, in scrapping File \"main.py\", line 125, in login File \"site-packages\\requests\\sessions.py\", line 546, in get File \"site-packages\\requests\\sessions.py\", line 533, in request File \"site-packages\\requests\\sessions.py\", line 646, in send File \"site-packages\\requests\\adapters.py\", line 510, in send requests.exceptions.ProxyError: HTTPSConnectionPool(host='my.ntu.edu.tw', port=443): Max retries exceeded with url: /stuLeaveManagement/login.aspx?firstpage=teacher (Caused by ProxyError('Cannot connect to proxy.', OSError('Tunnel connection failed: 405 Method Not Allowed'))) 平常不是都用得好好的嗎？怎麼突然就這樣了@@ 而且不只程式出現問題，我連瀏覽器都沒辦法上網了!由上面的情況與爆出的錯誤來看， 感覺起來應該不是程式碼上的問題了(我也記得我沒改甚麼東西...)。雖然上面的錯誤訊息沒有看得很懂，但是我覺得可能是 port 的問題， Fiddler 會用到 port:8888(如下圖)， 調查過程 可能是不知道被誰佔用了吧~當然要直接改 Fiddler 的 port 應該是可以的，但還是想要知道是甚麼程式在佔用，萬一是駭客怎麼辦@@ 因此就趕快上網查了一下 windows 查詢系統 port 的指令...，原來是 netstat -ano 啊~還順便查詢了參數的意義， 由於太多參數了，我就列出這次會用到的三個就好，如果想要知道其他的參數意義，就在自己的 windows 電腦輸入 netstat /? 吧~ NETSTAT [ option ] - a 顯示所有連線和接聽連接埠 。 - n 以數字格式顯示位址和連接埠號碼 。 - o 顯示與每個連線相關聯的擁有處理程序識別碼 。 喔...既然知道的指令與參數意義就來查詢看看吧! C : \\ Users \\ SSJ > netstat - ano 使用中連線 協定 本機位址 外部位址 狀態 PID TCP 0 . 0 . 0 . 0 : 111 0 . 0 . 0 . 0 : 0 LISTENING 4280 TCP 0 . 0 . 0 . 0 : 135 0 . 0 . 0 . 0 : 0 LISTENING 764 TCP 0 . 0 . 0 . 0 : 443 0 . 0 . 0 . 0 : 0 LISTENING 4156 ... ... ... ... 痾...好像有點多啊，要我一個一個去找 port:8888 也太累了吧...還好還有一個指令可以幫我們做這件事情，那就是 find ： FIND <你想要搜尋的字串> <檔名:對哪個檔案進行搜尋> 但我們沒有要對甚麼檔案進行搜尋啊，難道還要把 netstat -ano 的結果先輸出成檔案在搜尋嗎？哪有這麼白癡的設計，在這情況我們可以利用「|」 (pipe)符號來達成我們的目的，整個指令就變成了 netstat -ano | find \"8888\" ，雖然運作原理不是很懂，但我想他運作機制簡單來說 應該就是將「|」左側 netstat -ano 所輸出的結果丟到「|」右側指令的輸入去，畫成簡圖應該是這樣： 所以這串指令就可以幫我們找到誰在佔用 port:8888 囉~ C:\\Users\\SSJ>netstat -ano | find \"8888\" TCP 127.0.0.1:8888 0.0.0.0:0 LISTENING 27140 TCP [::1]:8888 [::]:0 LISTENING 27140 UDP 0.0.0.0:28888 *:* 4156 喔...看起來有點複查啊，不過好像是看第一行結果（為什麼是看那行，原因有點複雜...反正就先查查看也不錯ˊˇˋ），得知是 PID=27140 這程式佔用了，那就到工作管理員>>處理程序來看看誰是 PID=27140，如果你的工作管理員>>處理程序沒有顯示 PID 的話，就在任一個欄位名稱點右鍵 ，把 PID 打勾就好了： 找到你了!! 喔喔就是你！終於抓到了~看起來是個 python 的執行檔案，目前我好像沒有在跑什麼東西所以關掉應該沒差吧~果然關掉後我的程式重跑就沒問題了， 瀏覽器也可以正常的上網了~~~~","tags":"blogging","url":"https://shen-sj.github.io/articles/2020/06/05/fiddler-wu-fa-zhua-qu-feng-bao-zhi-port-zhan-yong/","loc":"https://shen-sj.github.io/articles/2020/06/05/fiddler-wu-fa-zhua-qu-feng-bao-zhi-port-zhan-yong/"},{"title":"用SoftEther架設自己的VPN","text":"一些可憐的~~菸酒生~~在家也想要查查文獻、看看paper，但學校又沒有提供VPN的話，那可是一件非常痛苦的事情啊...，難道只能去實驗室用電腦了嗎?! 有一個方法就是使用遠端桌面連回實驗室電腦，通常這可以利用一些軟體(如:Teamviewer, Anydesk...)或是你電腦的windows系統是專業版、 教育版、...等等(~~反正不是家用版就對了~~)就能夠辦到，不過我又覺得我只是想要使用學校的這個IP來查詢資料，直接連回電腦會不會太大費周章了@@? 所以我就想使用另外一個方法，在學校電腦自己架一個VPN Server，不過架設的過程是稍嫌複雜，本人也是研究了好幾天才大概能用... 好不容易成功了就記錄一下整個流程吧~不然我怕之後還會用到的話我卻忘了QQ 以下的步驟都是參考以下幾篇文章所得到的心得，我把網址附在最下面，有需要的同學可以去參考參考，基本上步驟都跟他們一樣啦 :)) 那就開始吧!!! 使用軟體與作業系統 SoftEtherVPN Windows10 企業版 ((家用版應該也是可以吧... 架設VPN Server 首先我是去官方網站下載該軟體，進到官網就是找到 Download>>Download SoftEtherVPN 並進入 選擇適合你的選項，像我是windows系統，系統就選windows，然後就會看到下面出現很多連結，最上面的應該是最新版本，應該也是可以用啦， 不過我是選擇稍微就一點的版本就是，~~總是有傳言最新的比較不穩定~~，我是用Ver4.31給大家參考參考 選了想要的版本後他應該就會開始下載了，等下載完就點兩下開始安裝，就下一步~ 因為我們就是要建立一個VPN Server，所以選SoftEther VPN Server後就下一步~ 後面就是一些許可與軟體訊息什麼的，看過後沒問題就可以下一步了~ 指定好你軟體要安裝在那裡就繼續((我是使用預設而已 開始安裝!! 咕嚕咕嚕咕嚕...... 耶~~~ 安裝好了~~~ 安裝好了如果直接按完成，他應該會幫你開啟 SoftEther VPN Server 管理工具，這時你可以看到他已經預先幫你建立了一個連線設置， 我們就直接點那個設置兩下進行一些設定吧~ 因為我們是第一次進去這設置，所以他會叫你建立管理者密碼，之後如果身為管理者的你要進去這設置管理一些設定的話會需要用到這密碼~ 密碼設定好了之後應該會跳出這東西，好像可以幫你簡單的安裝一些設定啦，但我是直接關閉等等自己設定這樣 關閉後他就會問你要不要設置IPsec，那我們就確定，因為等等連線會用到這東西~ 關於這東西的設置我是勾選第一個框框\"啟動L2TP服務器功能(L2TP over IPsec)\"，再來最下面那個密碼必須要設定並好好保存， 之後要連到你這VPN會需要的~ 到了這畫面表示快好了!!我們還有一個設定需要設定才能連上，首先先點\"管理虛擬HUB\" 再來進入\"虛擬NAT和虛擬DHCP服務器\"裡面 點選\"啟用SecureNAT\"就可以囉~\"SecureNAT配置\"我是使用預設的，如果有懂得朋友也可以進去裡面客製一下~好了就可以關閉本畫面回到管理HUB畫面了 別人要使用你這台VPN需要透過帳號跟密碼，身為管理者的你就需要替他們建立帳號跟密碼囉，這樣除了比較安全外也可以限制有誰可以使用你的VPN， 因此我們點選\"管理用戶\"來新增用戶 你可以看到這裡什麼用戶都沒有，所以還沒有人可以使用你的VPN，我們點選\"新建\" 在這邊你就可以輸入新用戶的帳號跟密碼，至少我圖中兩個紅色框框部分需要設定，其他部分例如限制使用時段、 驗證類型等等如果你會且有需要的話也可以去做設定~ 終於可以使用了!!可以請人家用用看囉~~ 在windows中使用VPN 首先必須到你windows電腦裡的 設定>>網路和網際網路>>VPN，來新建一個VPN連線 然後就輸入所需要的資訊，像是: * 連線名稱: 自己知道這VPN是甚麼就好，跟你的server沒關係~ * 伺服器名稱或位址: 就是你架的VPN Server的IP * VPN類型: L2TP/IPsec(使用預先共用金鑰) * 預先共用金鑰: 就是你在 這步驟 所設的密碼 * 使用者名稱: 管理者幫你建立的帳號 * 密碼: 管理者幫你設定的密碼 都輸入完就可以儲存囉~~再來你點選你工具列右下角的網路圖示，可以發現到多了你剛剛新增個VPN，當你想要使用這VPN查paper的時候就按連線 出現已連線就是成功了，恭喜你!!! 參考資料: https://zh.wikipedia.org/wiki/SoftEther_VPN https://noter.tw/4524/softether-vpn-%E6%9E%B6%E8%A8%AD%E8%A8%98%E9%8C%84/ https://jjnux.blogspot.com/2017/02/softether-vpn-server-windows.html https://it001.pixnet.net/blog/post/328610332-it%E5%B0%88%E9%A1%8C--%E5%AE%89%E8%A3%9Dsoftethervpn-%28l2tp-ipsec%29","tags":"blogging","url":"https://shen-sj.github.io/articles/2020/03/29/yong-softetherjia-she-zi-ji-de-vpn/","loc":"https://shen-sj.github.io/articles/2020/03/29/yong-softetherjia-she-zi-ji-de-vpn/"},{"title":"用Pelican搞部落格遇到的python import模組問題...","text":"最近一直在練習用Pelican寫部落格，不過之前我設定專案的時候好像沒設定好，publishconf.py裡面沒有把pelicanconfi.py裡的設定給匯入， 所以我就自己把 from pelicanconf import * 給加了進去，但每次當我要把目前的東西輸出成檔案在CMD下 pelican content -s publishconf.py 指令的時候`,就會出現這個錯誤... CRITICAL : ModuleNotFoundError : No module named 'pelicanconf' 疑?奇怪，pelicanconf.py 跟 publishconf.py 是在同一個資料夾，而且我不是有import了嗎?!怎麼他會找不到呢... 因此我就確認了一下publishconf.py在工作的時候的路徑是長怎樣，我就在我那檔案添加了這段程式碼: import sys print ( sys . path ) 然後就用CMD再給他run一次，結果... [ 'C: \\\\ Users \\\\ SSJ \\\\ Anaconda3 \\\\ envs \\\\ myblog \\\\ Scripts \\\\ pelican.exe' , 'c: \\\\ users \\\\ ssj \\\\ anaconda3 \\\\ envs \\\\ myblog \\\\ python37.zip' , ...... ] 怎麼沒有看到我的工作目錄哩...看來只好給他加上去了，但我發現其實Pelican有考慮到這點已經幫你加好了XDDD，只是我import的語句應該在目錄加 進去之後，這樣才不會有問題，因此程式碼就變成了: import os import sys sys . path . append ( os . curdir ) from pelicanconf import * 然後終於成功了@@ 可以繼續專心研究搞部落格了...","tags":"blogging","url":"https://shen-sj.github.io/articles/2020/03/28/yong-pelicangao-bu-luo-ge-yu-dao-de-python-importmo-zu-wen-ti/","loc":"https://shen-sj.github.io/articles/2020/03/28/yong-pelicangao-bu-luo-ge-yu-dao-de-python-importmo-zu-wen-ti/"},{"title":"圖片測試_外部連結","text":"這是一篇測試能不能顯示外部連結圖片的文章~","tags":"test","url":"https://shen-sj.github.io/articles/2020/03/02/tu-pian-ce-shi-_wai-bu-lian-jie/","loc":"https://shen-sj.github.io/articles/2020/03/02/tu-pian-ce-shi-_wai-bu-lian-jie/"},{"title":"show the picture","text":"","tags":"test","url":"https://shen-sj.github.io/articles/2020/03/01/show-the-picture/","loc":"https://shen-sj.github.io/articles/2020/03/01/show-the-picture/"},{"title":"Test for icon and underline title","text":"測試我的標題","tags":"Test","url":"https://shen-sj.github.io/articles/2020/03/01/test-for-icon-and-underline-title/","loc":"https://shen-sj.github.io/articles/2020/03/01/test-for-icon-and-underline-title/"},{"title":"Markdown Examples Part 1","text":"Basic markdown examples are shown below This text is bold This text is also bold ⋯ This text is italic This text is also italic This text is italic and bold An h1 heading An h2 heading An h3 heading... An h6 heading A list with numbers: 1. One 2. Two 3. Three A list with bullets: * Bullet * Bullet * Bullet Here's a blockquote: > Simple is better than complex Here's a table: Column1 Column 2 Column 3 Value 1 Value 2 Value 3 Value 4 Value 5 Value 6 Value 7 Value 8 Value 9 Here's a python script def login ( self ): # 先開啟起始網頁取得初始cookies取得權限 pre_web = self . rs . get ( self . pre_url , headers = self . nor_headers ) pre_cookies = requests . utils . dict_from_cookiejar ( self . rs . cookies ) # 登入學校系統 login_web = self . rs . post ( self . login_url , headers = self . nor_headers , data = self . login_data ) login_cookies = requests . utils . dict_from_cookiejar ( self . rs . cookies ) remove_cookie_by_name ( self . rs . cookies , 'PHPSESSID' ) # 不知道 cookie 多了不必要的PHPSESSID會不會怎樣，先刪除好了 # 檢查登入有沒有失敗 if login_web . url != self . search_url : raise LoginError ( '登入失敗!!!' ) return login_web","tags":"test","url":"https://shen-sj.github.io/articles/2019/01/02/markdown-examples-part-1/","loc":"https://shen-sj.github.io/articles/2019/01/02/markdown-examples-part-1/"}]};
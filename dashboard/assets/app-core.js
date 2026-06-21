// ────────────────────────────────────────────────────────────────────────────
// Translations
// ────────────────────────────────────────────────────────────────────────────
const TR = {
  en: {
    title:'Mawjah', scanAll:'⟳ Scan All',
    strongBuy:'Strong Buy', buy:'Buy', watch:'Watch', scanned:'Scanned', strongSell:'Strong Sell',
    all8:'7–8 pts', crit56:'5–6 pts', crit34:'3–4 pts', noScan:'No scan yet', allBear8:'7–8 pts bearish',
    selected:'Selected:', stocks:'stocks', scanSelected:'Scan Selected', clearSel:'Clear',
    tabScreener:'Screener', tabCriteria:'🔔 Alerts', tabUniverse:'⚙ Settings', tabPositions:'💼 Portfolio',
    all:'All', fBanks:'Banks', fEnergy:'Energy', fPetro:'Petrochem', fTelecom:'Telecom',
    fHealth:'Health', fFood:'Food', fOther:'Other', fBuys:'Buys', fWatch:'Watch', fSells:'Sells', fHalal:'Halal',
    mAll:'All Markets', mTasi:'TASI', mUs:'US Equity', mEtf:'ETF', mCrypto:'Crypto', mCommodity:'Commodities',
    fTech:'Tech', fFinancials:'Financials', fConsumer:'Consumer', fMetal:'Metals', fCrude:'Energy', fEtfEquity:'Equity ETF', fEtfMetal:'Metal ETF', fEtfCrude:'Oil ETF', fEtfBond:'Bond ETF',
    selectAllVis:'Select all visible',
    colTicker:'Ticker', colName:'Name', colSector:'Sector', colPrice:'Price',
    colScore:'Score ↓', colRsi:'RSI', colMacd:'MACD', colVol:'Vol×', colEma:'EMA', colSignal:'Trend State', colSharia:'Halal', colRs:'RS', colWeekly:'W',
    emptyScreener:'No scan data yet.<br>Click <strong>Scan All</strong> to start.',
    scoringTitle:'How stocks are scored (out of 8)',
    scoringSubtitle:'Applied automatically during every scan',
    scanning:'Scanning…',
    lastScan:'Last scan:',
    // Sectors
    sBanking:'Banking', sEnergy:'Energy', sPetrochem:'Petrochem', sTelecom:'Telecom',
    sUtility:'Utility', sFood:'Food', sRetail:'Retail', sHealth:'Healthcare',
    sRealestate:'Real Estate', sCement:'Cement', sIndustrial:'Industrial',
    sInsurance:'Insurance', sOther:'Other',
    sTech:'Technology', sFinancials:'Financials', sConsumer:'Consumer', sRetailUs:'Retail', sHealthUs:'Healthcare',
    sEnergyUs:'Energy', sEtfEquity:'Equity ETF', sEtfMetal:'Metal ETF', sEtfCrude:'Oil ETF', sEtfBond:'Bond ETF',
    sCrypto:'Crypto', sMetal:'Metals', sCrude:'Oil & Gas',
    // Bias
    bStrongBuy:'Strong Uptrend', bBuy:'Uptrend', bWatch:'Building', bSkip:'Flat', bError:'ERROR', bNoData:'NO DATA',
    bStrongSell:'Strong Downtrend', bSell:'Downtrend', bAvoid:'Weak',
    // Drawer
    critBreakdown:'Criteria breakdown',
    pass:'PASS', fail:'FAIL',
    entryGuidanceTitle:'📍 Entry Guidance',
    watchTitle:'👁 What to Watch For',
    // Criterion labels (2 pts etc appended separately)
    lEmaStack:'EMA Trend Stack', lEmaStackBear:'EMA Bearish Stack',
    lEma200:'Long-Term Regime',  lEma200Bear:'Below Long-Term Regime',
    lRsi:'RSI Momentum Zone',    lRsiBear:'RSI Weak Zone',
    lMacd:'MACD Momentum',
    lVol:'Volume Confirmation',
    sellGuidanceTitle:'▼ Bearish Setup — Avoid / Exit',
    avoidTitle:'◆ Early Bearish — Monitor',
    pts:' pts',
    // Scoring rule descriptions
    srEmaStack:'13-day above 34-day above 89-day — all timeframes trending up',
    srEma200:'Price above 200-day EMA — long-term bull regime confirmed',
    srRsi:'RSI in momentum zone — not weak, not overbought',
    srMacd:'MACD histogram positive — short-term momentum accelerating',
    srVol:'Volume above 1.2× 20-day average — institutional participation',
    // Criteria editor
    crBullish:'🟢 Bullish Criteria', crBearish:'🔴 Bearish Criteria',
    crNeutral:'⚪ Neutral / No-Trade', crRisk:'⚠ Risk Rules',
    addPlaceholder:'Add new item…', addBtn:'+ Add',
    editHint:'Edit items inline, then save.', saveBtn:'💾 Save',
    unsaved:'Unsaved changes', saved:'Saved ✓',
    loading:'Loading…',
    // Fundamentals
    fundTitle:'Fundamental Analysis', fundLoading:'Fetching fundamentals…', fundError:'Could not load fundamentals',
    fundScore:'Fund. Score', sValuation:'Valuation', sDividends:'Dividends',
    sProfitability:'Profitability', sHealth:'Financial Health', s52w:'52-Week Range',
    lPE:'P/E (Trailing)', lFPE:'P/E (Forward)', lPB:'P/B Ratio', lEVEbitda:'EV/EBITDA',
    lDivYield:'Dividend Yield', lDivRate:'Annual Dividend', lPayoutRatio:'Payout Ratio', lExDiv:'Ex-Div Date',
    lROE:'ROE', lNetMargin:'Net Margin', lOpMargin:'Op. Margin', lEbitdaMargin:'EBITDA Margin',
    lDE:'Debt/Equity', lCurrentRatio:'Current Ratio', lFreeCF:'Free Cash Flow', lMarketCap:'Market Cap',
    lBeta:'Beta', lInsider:'Insider %', lInstitution:'Institution %',
    sigUndervalued:'UNDERVALUED', sigFair:'FAIR VALUE', sigOvervalued:'OVERVALUED',
    fundNone:'—', na:'N/A',
    // Sharia
    sHalal:'Halal', sNonHalal:'Non-Halal', sReview:'Review', sUnknown:'?',
    shariaTitle:'Sharia Compliance', shariaDisc:'Based on AAOIFI sector screens. Verify with a qualified Islamic finance scholar.',
    // Live mode
    liveOff:'Live', liveOn:'Live On', liveStopped:'Live Off',
    liveInterval:'Interval', liveMin:'min',
    // Backtest
    btRun:'Run Backtest (2yr)', btRunning:'Running…', btTitle:'Backtest Results',
    btTrades:'Trades', btWinRate:'Win Rate', btAvgReturn:'Avg Return', btPF:'Profit Factor',
    btRecent:'Recent trades', btStop:'stop', btT1:'target1', btT2:'target2', btTimeout:'timeout',
    // Calendar
    calEarnings:'Earnings', calDays:'days',
    finnhubToken:'Finnhub Token',
    // Analytics
    analyticsTitle:'Trade Analytics',
    anWinRate:'Win Rate', anAvgWin:'Avg Win', anAvgLoss:'Avg Loss', anPF:'Profit Factor',
    // Close trade
    closeTrade:'Close', closePrice:'Exit price', closeDate:'Exit date', closeReason:'Reason',
    closeReasonT1:'Target 1', closeReasonT2:'Target 2', closeReasonStop:'Stop Loss', closeReasonManual:'Manual',
    closeConfirm:'Confirm Close',
    // Mode toggle
    modeSwing:'📈 Swing', modePosition:'📊 Position', modeBreakout:'⚡ Breakout',
    exportCsv:'⬇ Export CSV',
    // Weekly
    colWeekly:'W', wFull:'W ✓✓', wPartial:'W ✓', wNone:'W ✗', wNa:'—',
    weeklyTitle:'Weekly Alignment', wEmaStack:'EMA stack (W)', wAbove200:'Above EMA 200 (W)',
    // Positions
    posTitle:'My Positions', posSubtitle:'Track your entries and P&L against last scan price',
    posEntry:'Entry', posScanPrice:'Scan Price', posPnl:'P&L', posShares:'Shares', posDate:'Date',
    posEmpty:'No positions yet. Add one below.',
    posLivePrice:'Refresh Live Price', posLivePriceLoading:'Loading…',
    // Notifications
    notifTitle:'Telegram Notifications', notifTest:'Test', notifEnabled:'Enabled',
    notifToken:'Bot Token', notifChatId:'Chat ID',
    notifHint:'Get your Chat ID: message @userinfobot on Telegram.',
    notifSaved:'Settings saved ✓', notifTestOk:'Test message sent ✓', notifTestFail:'Failed — check token/chat ID',
    // Screenshot
    viewChart:'View Chart', chartLoading:'Loading chart…',
    // Breadth + heatmap
    breadthTitle:'Market Breadth',
    // Movers
    moversTitle:'What Changed Since Last Scan', moversImp:'improved', moversDeg:'degraded', moversEmpty:'No changes since last scan',
    // ATR
    atrTitle:'ATR Trade Levels', atrStop:'Stop Loss', atrT1:'Target 1', atrT2:'Target 2',
    // RS
    rsTitle:'Relative Strength', rsLeader:'Leader', rsLaggard:'Lagging',
    // Alert
    setAlert:'Set Alert', alertSet:'Alert Set ✓', alertFail:'Failed',
    // Universe
    univTitle:'Symbol Universe', univSubtitle:'Manage which symbols are scanned per market',
    univSymPlaceholder:'Symbol (e.g. AAPL or TADAWUL:1120)', univNamePlaceholder:'Name (optional)',
    univAdd:'+ Add', univReset:'Reset', univSave:'Save', univSaved:'Saved ✓',
    univEmpty:'No symbols. Add one below.', univCount:'symbols',
    colDiv:'Div', dtabSignal:'Overview', dtabTrade:'Execute', dtabAnalysis:'Setup', dtabFund:'Research',
    rgDailyVol:'Daily Vol', rg20d:'20d Perf', rg52w:'52w Pos', rg52wRange:'52-Week Range',
    divBullish:'Bullish Div', divBearish:'Bearish Div', srLevelsTitle:'Support & Resistance', sizerTitle:'Position Sizer',
    legendBtn:'ℹ Signal Guide', legendClose:'Close Guide',
    colDelta:'Δ', archiveBtn:'📦 History', archiveLive:'🔴 Live (current)',
    freshLive:'Live', freshOld:'Stale data',
    tabWatchlist:'☆ Watchlist', wlSubtitle:'Click ☆ in the screener to add stocks',
    wlEmpty:'No stocks in your watchlist yet.\nClick ☆ next to any row in the screener to add.',
    wlAddedToast:'Added to watchlist', wlRemovedToast:'Removed from watchlist',
    retryBtn:'↻ Retry', priceAlertSet:'Alert set ✓',
    tvEmbedBtn:'Load Chart (TradingView)',
    ruleTitle:'Smart Alert Rules', ruleSub:'Trigger when conditions are met after each scan',
    ruleEmpty:'No rules yet. Add one below.', ruleDeleted:'Rule deleted.',
    tvOpenChart:'📈 View Chart', tvSetAlert:'🔔 Alert', tvWatchlist:'⭐ Watchlist', tvCopySymbol:'⧉ Copy',
    tfTitle:'Timeframe Alignment', tfLoading:'Fetching 4H + D + W alignment…',
    newsTitle:'Recent News', newsNoToken:'Add Finnhub token in Settings for news.', newsNone:'No recent news found.',
    divTitle:'Dividend Info', divYield:'Yield', divNext:'Next Pay', divAmount:'Amount',
    hmapTitle:'Portfolio Map', hmapSub:'Size = position value · Color = P&L',
    sparkUp:'Score trending up', sparkDown:'Score trending down',
    tabMarkets:'🌍 Markets',
    mktOverviewTitle:'Global Market Overview', mktRefresh:'⟳ Refresh', mktLoading:'Loading market data (requires TradingView)…',
    mktOpportTitle:'Top Opportunities', mktOpportSub:'Strong Buy signals from last scan', mktOpportEmpty:'Run a scan first to see opportunities.',
    mktBull:'▲ Bull', mktBear:'▼ Bear', mktRange:'◆ Range',
    mktRsi:'RSI', mktVol:'ATR%', mkt20d:'20d', mkt52w:'52w',
    execTitle:'Executive Summary', execEntry:'Entry Zone', execStop:'Stop', execT1:'Target 1', execT2:'Target 2',
    execRes:'Resistance', execSup:'Support', execFair:'Fair Value', execRR:'R:R',
    vhTitle:'Value vs Peers', vhPe:'P/E', vhPb:'P/B', vhDe:'D/E', vhFair:'Est. Fair Value',
    vhCheap:'CHEAP', vhFair2:'FAIR', vhPricey:'PRICEY', vhNa:'N/A',
    tabVirtual:'🎮 Virtual', vpCash:'Cash', vpValue:'Portfolio Value', vpPnl:'Total P&L', vpReturn:'Return',
    vpHoldings:'Holdings', vpReset:'↺ Reset', vpAvgCost:'Avg Cost', vpValue2:'Value', vpReturnCol:'Return',
    vpEmpty:'No virtual positions yet. Use Virtual Buy in the Trade tab.',
    vpHistory:'Trade History', vpAction:'Action', vpTotal:'Total', vpCashAfter:'Cash After', vpNoTrades:'No trades yet.',
    vpBuy:'Virtual Buy', vpSell:'Virtual Sell', vpShares:'Shares',
    vpBuyOk:'Bought', vpSellOk:'Sold', vpErrFunds:'Insufficient cash', vpErrShares:'Not enough shares',
    sarToggle:'SAR', usdToggle:'$ USD',
  },
  ar: {
    title:'موجة', scanAll:'⟳ مسح الكل',
    strongBuy:'شراء قوي', buy:'شراء', watch:'مراقبة', scanned:'إجمالي المسح', strongSell:'بيع قوي',
    all8:'7–8 نقطة', crit56:'5–6 نقاط', crit34:'3–4 نقاط', noScan:'لا يوجد مسح بعد', allBear8:'7–8 نقطة هبوطية',
    selected:'محدد:', stocks:'أسهم', scanSelected:'مسح المحدد', clearSel:'مسح التحديد',
    tabScreener:'الفرز', tabCriteria:'🔔 التنبيهات', tabUniverse:'⚙ الإعدادات', tabPositions:'💼 المحفظة',
    all:'الكل', fBanks:'البنوك', fEnergy:'الطاقة', fPetro:'البتروكيماويات', fTelecom:'الاتصالات',
    fHealth:'الصحة', fFood:'الغذاء', fOther:'أخرى', fBuys:'الشراء', fWatch:'المراقبة', fSells:'البيع', fHalal:'حلال',
    mAll:'جميع الأسواق', mTasi:'تاسي', mUs:'الأسهم الأمريكية', mEtf:'صناديق ETF', mCrypto:'العملات المشفرة', mCommodity:'السلع',
    fTech:'تقنية', fFinancials:'مالية', fConsumer:'استهلاكي', fMetal:'معادن', fCrude:'طاقة', fEtfEquity:'صناديق أسهم', fEtfMetal:'صناديق معادن', fEtfCrude:'صناديق نفط', fEtfBond:'صناديق سندات',
    selectAllVis:'تحديد الكل الظاهر',
    colTicker:'الرمز', colName:'الاسم', colSector:'القطاع', colPrice:'السعر',
    colScore:'التقييم ↓', colRsi:'القوة النسبية', colMacd:'الزخم', colVol:'الحجم×', colEma:'المتوسطات', colSignal:'حالة الاتجاه', colSharia:'حلال', colRs:'ق.ن.',
    emptyScreener:'لا توجد بيانات مسح بعد.<br>اضغط <strong>مسح الكل</strong> للبدء.',
    scoringTitle:'كيف يُقيَّم السهم (من 8 نقاط)',
    scoringSubtitle:'تُطبَّق هذه القواعد الخمس تلقائياً في كل عملية مسح',
    scanning:'جارٍ المسح…',
    lastScan:'آخر مسح:',
    sBanking:'البنوك', sEnergy:'الطاقة', sPetrochem:'البتروكيماويات', sTelecom:'الاتصالات',
    sUtility:'المرافق', sFood:'الغذاء', sRetail:'التجزئة', sHealth:'الرعاية الصحية',
    sRealestate:'العقارات', sCement:'الأسمنت', sIndustrial:'الصناعة',
    sInsurance:'التأمين', sOther:'أخرى',
    sTech:'تقنية', sFinancials:'مالية', sConsumer:'استهلاكي', sRetailUs:'تجزئة', sHealthUs:'صحة',
    sEnergyUs:'طاقة', sEtfEquity:'صناديق أسهم', sEtfMetal:'صناديق معادن', sEtfCrude:'صناديق نفط', sEtfBond:'صناديق سندات',
    sCrypto:'مشفرة', sMetal:'معادن', sCrude:'نفط وغاز',
    bStrongBuy:'اتجاه صاعد قوي', bBuy:'اتجاه صاعد', bWatch:'يتشكل', bSkip:'محايد', bError:'خطأ', bNoData:'لا بيانات',
    bStrongSell:'اتجاه هابط قوي', bSell:'اتجاه هابط', bAvoid:'ضعيف',
    critBreakdown:'تفاصيل المعايير',
    pass:'ناجح', fail:'فاشل',
    entryGuidanceTitle:'📍 توجيه الدخول',
    watchTitle:'👁 ما يجب مراقبته',
    lEmaStack:'هيكل المتوسطات المتحركة', lEmaStackBear:'هيكل هابط',
    lEma200:'النظام طويل المدى',          lEma200Bear:'تحت النظام طويل المدى',
    lRsi:'نطاق زخم RSI',                  lRsiBear:'منطقة ضعف RSI',
    lMacd:'زخم MACD',
    lVol:'تأكيد الحجم',
    sellGuidanceTitle:'▼ إعداد هابط — تجنب / خروج',
    avoidTitle:'◆ هبوط مبكر — مراقبة',
    pts:' نقاط',
    srEmaStack:'المتوسط 13 فوق 34 فوق 89 — اتجاه صعودي عبر جميع الأطر الزمنية',
    srEma200:'السعر فوق المتوسط 200 — تأكيد نظام السوق الصاعد',
    srRsi:'RSI في نطاق الزخم — لا ضعف ولا تشبع',
    srMacd:'هيستوجرام MACD إيجابي — تسارع الزخم قصير المدى',
    srVol:'الحجم فوق 1.2× المتوسط 20 يوم — مشاركة مؤسسية',
    crBullish:'🟢 المعايير الصعودية', crBearish:'🔴 المعايير الهبوطية',
    crNeutral:'⚪ محايد / لا تداول', crRisk:'⚠ قواعد المخاطرة',
    addPlaceholder:'إضافة عنصر جديد…', addBtn:'+ إضافة',
    editHint:'عدّل العناصر مباشرةً ثم احفظ.', saveBtn:'💾 حفظ',
    unsaved:'تغييرات غير محفوظة', saved:'تم الحفظ ✓',
    loading:'جارٍ التحميل…',
    // Fundamentals
    fundTitle:'التحليل الأساسي', fundLoading:'جارٍ جلب البيانات…', fundError:'تعذر تحميل البيانات الأساسية',
    fundScore:'درجة التحليل', sValuation:'التقييم', sDividends:'توزيعات الأرباح',
    sProfitability:'الربحية', sHealth:'الصحة المالية', s52w:'النطاق السنوي (52 أسبوع)',
    lPE:'مكرر الربحية (فعلي)', lFPE:'مكرر الربحية (توقعي)', lPB:'السعر/القيمة الدفترية', lEVEbitda:'EV/EBITDA',
    lDivYield:'عائد التوزيعات', lDivRate:'التوزيع السنوي', lPayoutRatio:'نسبة التوزيع', lExDiv:'تاريخ الاستحقاق',
    lROE:'العائد على حقوق الملكية', lNetMargin:'هامش صافي الربح', lOpMargin:'هامش التشغيل', lEbitdaMargin:'هامش EBITDA',
    lDE:'نسبة الدين/الملكية', lCurrentRatio:'نسبة التداول', lFreeCF:'التدفق النقدي الحر', lMarketCap:'القيمة السوقية',
    lBeta:'بيتا', lInsider:'حصة المطلعين', lInstitution:'حصة المؤسسات',
    sigUndervalued:'مقيَّم بأقل من قيمته', sigFair:'قيمة عادلة', sigOvervalued:'مقيَّم بأكثر من قيمته',
    fundNone:'—', na:'غير متاح',
    // Sharia
    sHalal:'حلال', sNonHalal:'غير حلال', sReview:'مراجعة', sUnknown:'؟',
    shariaTitle:'الامتثال الشرعي', shariaDisc:'بناءً على معايير AAOIFI القطاعية. تحقق مع عالم متخصص في التمويل الإسلامي.',
    liveOff:'مباشر', liveOn:'مباشر ✓', liveStopped:'إيقاف',
    liveInterval:'الفاصل', liveMin:'د',
    btRun:'اختبار الاستراتيجية (2 سنة)', btRunning:'جارٍ…', btTitle:'نتائج الاختبار',
    btTrades:'صفقات', btWinRate:'نسبة الربح', btAvgReturn:'متوسط العائد', btPF:'عامل الربح',
    btRecent:'آخر الصفقات', btStop:'وقف', btT1:'هدف1', btT2:'هدف2', btTimeout:'انتهاء',
    calEarnings:'نتائج', calDays:'أيام',
    finnhubToken:'رمز Finnhub',
    analyticsTitle:'تحليل الأداء',
    anWinRate:'نسبة الربح', anAvgWin:'متوسط الربح', anAvgLoss:'متوسط الخسارة', anPF:'عامل الربح',
    closeTrade:'إغلاق', closePrice:'سعر الخروج', closeDate:'تاريخ الخروج', closeReason:'السبب',
    closeReasonT1:'الهدف 1', closeReasonT2:'الهدف 2', closeReasonStop:'وقف الخسارة', closeReasonManual:'يدوي',
    closeConfirm:'تأكيد الإغلاق',
    modeSwing:'📈 تأرجح', modePosition:'📊 مراكز', modeBreakout:'⚡ اختراق',
    exportCsv:'⬇ تصدير CSV',
    colWeekly:'أسبوعي', wFull:'W ✓✓', wPartial:'W ✓', wNone:'W ✗', wNa:'—',
    weeklyTitle:'التوافق الأسبوعي', wEmaStack:'هيكل المتوسطات (أسبوعي)', wAbove200:'فوق المتوسط 200 (أسبوعي)',
    posTitle:'محفظتي', posSubtitle:'تتبع مدخلاتك والأرباح مقارنة بآخر سعر مسح',
    posEntry:'سعر الدخول', posScanPrice:'سعر المسح', posPnl:'الربح/الخسارة', posShares:'الأسهم', posDate:'التاريخ',
    posEmpty:'لا توجد مراكز بعد. أضف أدناه.',
    posLivePrice:'تحديث السعر', posLivePriceLoading:'جاري التحميل…',
    notifTitle:'إشعارات تيليجرام', notifTest:'اختبار', notifEnabled:'مفعّل',
    notifToken:'رمز البوت', notifChatId:'معرف الدردشة',
    notifHint:'للحصول على Chat ID: أرسل رسالة لـ @userinfobot في تيليجرام.',
    notifSaved:'تم الحفظ ✓', notifTestOk:'تم إرسال الرسالة ✓', notifTestFail:'فشل — تحقق من الإعدادات',
    viewChart:'عرض الرسم البياني', chartLoading:'جاري التحميل…',
    breadthTitle:'عمق السوق',
    moversTitle:'ما الذي تغير منذ آخر مسح', moversImp:'تحسّن', moversDeg:'تراجع', moversEmpty:'لا تغييرات منذ آخر مسح',
    atrTitle:'مستويات التداول (ATR)', atrStop:'وقف الخسارة', atrT1:'الهدف 1', atrT2:'الهدف 2',
    rsTitle:'القوة النسبية', rsLeader:'متفوق', rsLaggard:'متأخر',
    setAlert:'تنبيه', alertSet:'تم التنبيه ✓', alertFail:'فشل',
    // Universe
    univTitle:'كون الأسهم', univSubtitle:'أدر الرموز التي يتم فحصها لكل سوق',
    univSymPlaceholder:'الرمز (مثال: AAPL أو TADAWUL:1120)', univNamePlaceholder:'الاسم (اختياري)',
    univAdd:'+ إضافة', univReset:'إعادة', univSave:'حفظ', univSaved:'تم الحفظ ✓',
    univEmpty:'لا توجد رموز. أضف أدناه.', univCount:'رمز',
    legendBtn:'ℹ دليل الإشارات', legendClose:'إغلاق الدليل',
    colDelta:'Δ', archiveBtn:'📦 السجل', archiveLive:'🔴 مباشر (حالي)',
    freshLive:'مباشر', freshOld:'بيانات قديمة',
    tabWatchlist:'☆ المراقبة', wlSubtitle:'اضغط ☆ في الفارز لإضافة أسهم',
    wlEmpty:'لا أسهم في قائمة المراقبة بعد.\nاضغط ☆ بجانب أي سهم في الفارز للإضافة.',
    wlAddedToast:'أضيف إلى قائمة المراقبة', wlRemovedToast:'أزيل من قائمة المراقبة',
    retryBtn:'↻ إعادة', priceAlertSet:'تم ضبط التنبيه ✓',
    tvEmbedBtn:'تحميل الرسم البياني',
    ruleTitle:'قواعد التنبيه الذكي', ruleSub:'إشعار عند تحقق الشروط بعد كل مسح',
    ruleEmpty:'لا قواعد بعد. أضف واحدة أدناه.', ruleDeleted:'تم حذف القاعدة.',
    tvOpenChart:'📈 عرض الرسم', tvSetAlert:'🔔 تنبيه', tvWatchlist:'⭐ المراقبة', tvCopySymbol:'⧉ نسخ',
    tfTitle:'توافق الأطر الزمنية', tfLoading:'جارٍ تحميل 4H + D + W…',
    newsTitle:'آخر الأخبار', newsNoToken:'أضف رمز Finnhub في الإعدادات للأخبار.', newsNone:'لا أخبار حديثة.',
    divTitle:'معلومات التوزيعات', divYield:'العائد', divNext:'الدفعة القادمة', divAmount:'المبلغ',
    hmapTitle:'خريطة المحفظة', hmapSub:'الحجم = قيمة المركز · اللون = ر/خ',
    sparkUp:'التقييم في ارتفاع', sparkDown:'التقييم في انخفاض',
    tabMarkets:'🌍 الأسواق',
    mktOverviewTitle:'نظرة عامة على الأسواق العالمية', mktRefresh:'⟳ تحديث', mktLoading:'جارٍ تحميل بيانات السوق…',
    mktOpportTitle:'أفضل الفرص', mktOpportSub:'إشارات الشراء القوي من آخر مسح', mktOpportEmpty:'قم بتشغيل مسح أولاً لرؤية الفرص.',
    mktBull:'▲ صاعد', mktBear:'▼ هابط', mktRange:'◆ محايد',
    mktRsi:'RSI', mktVol:'التذبذب', mkt20d:'20 يوم', mkt52w:'52 أسبوع',
    execTitle:'الملخص التنفيذي', execEntry:'نطاق الدخول', execStop:'وقف الخسارة', execT1:'الهدف 1', execT2:'الهدف 2',
    execRes:'المقاومة', execSup:'الدعم', execFair:'القيمة العادلة', execRR:'ع:م',
    vhTitle:'القيمة مقارنة بالأقران', vhPe:'م/ر', vhPb:'س/ق', vhDe:'دين/ملكية', vhFair:'القيمة العادلة المقدرة',
    vhCheap:'رخيص', vhFair2:'عادل', vhPricey:'مرتفع', vhNa:'غير متاح',
    colDiv:'تباعد', dtabSignal:'نظرة عامة', dtabTrade:'التنفيذ', dtabAnalysis:'الإعداد', dtabFund:'البحث',
    rgDailyVol:'تذبذب يومي', rg20d:'أداء 20 يوم', rg52w:'موقع 52 أسبوع', rg52wRange:'النطاق السنوي',
    divBullish:'تباعد صعودي', divBearish:'تباعد هبوطي', srLevelsTitle:'الدعم والمقاومة', sizerTitle:'محسب الحجم',
    tabVirtual:'🎮 محفظة وهمية', vpCash:'السيولة', vpValue:'قيمة المحفظة', vpPnl:'إجمالي الربح/الخسارة', vpReturn:'العائد',
    vpHoldings:'الأسهم المحتفظ بها', vpReset:'↺ إعادة', vpAvgCost:'متوسط التكلفة', vpValue2:'القيمة', vpReturnCol:'العائد',
    vpEmpty:'لا توجد مراكز وهمية بعد. استخدم شراء وهمي في تبويب التداول.',
    vpHistory:'سجل الصفقات', vpAction:'الإجراء', vpTotal:'الإجمالي', vpCashAfter:'السيولة بعد', vpNoTrades:'لا صفقات بعد.',
    vpBuy:'شراء وهمي', vpSell:'بيع وهمي', vpShares:'عدد الأسهم',
    vpBuyOk:'تم الشراء', vpSellOk:'تم البيع', vpErrFunds:'سيولة غير كافية', vpErrShares:'أسهم غير كافية',
    sarToggle:'ريال', usdToggle:'$ دولار',
  }
};

// Plain-language criterion explanations per language
const EXPL = {
  emaStack: {
    en: {
      pass:`The three moving averages are arranged like a perfect staircase: the 13-day is above the 34-day, which is above the 89-day. Each step supports the one above it. This means the trend is pointing upward across short, medium, and longer timeframes — the essential foundation for a bullish entry.`,
      fail:`The moving averages are tangled or inverted. When shorter-term EMAs fall below longer-term ones, the trend is unclear or reversing downward. No reliable buy signal exists until the staircase re-aligns properly.`
    },
    ar: {
      pass:`المتوسطات المتحركة مرتبة ترتيباً صعودياً مثالياً: المتوسط 13 فوق 34 فوق 89 يوماً. كل مستوى يدعم ما فوقه كالدرج المتصاعد. هذا يعني أن الاتجاه صعودي عبر الأطر الزمنية القصيرة والمتوسطة والطويلة — الأساس الضروري لإشارة الشراء.`,
      fail:`المتوسطات المتحركة متشابكة أو مقلوبة، مما يشير إلى غموض الاتجاه أو ميله للهبوط. لا توجد إشارة شراء موثوقة حتى يعود الترتيب الصعودي الصحيح.`
    }
  },
  ema200: {
    en: {
      pass:`Price is trading above the 200-day moving average — the most important long-term trend filter used by institutions and funds worldwide. Being above it confirms the stock is in a bull-market regime. The strategy only enters longs above this line.`,
      fail:`Price is below the 200-day EMA, meaning the stock is still in a long-term downtrend. Even if short-term signals look promising, buying below the 200-day means fighting the dominant trend. Wait for a confirmed reclaim of this level first.`
    },
    ar: {
      pass:`السعر يتداول فوق المتوسط المتحرك 200 يوم — أهم مرشح للاتجاه طويل المدى تستخدمه الصناديق والمؤسسات الكبرى. التداول فوقه يؤكد أن السهم في سوق صاعد بعيد المدى. الاستراتيجية لا تشتري أسفل هذا الخط.`,
      fail:`السعر تحت المتوسط المتحرك 200 يوم، أي أن السهم لا يزال في اتجاه هبوطي طويل المدى. حتى لو بدت الإشارات القصيرة واعدة، فإن الشراء هنا يعني مقاومة الاتجاه السائد. انتظر استعادة هذا المستوى أولاً.`
    }
  },
  rsiOk: {
    en: `RSI sits in the ideal momentum zone (52–78): strong enough to confirm real buying interest is present, but not so high the stock is dangerously stretched. This is the sweet spot — the trend has energy behind it without being overextended.`,
    ar: `مؤشر RSI في النطاق المثالي للزخم (52–78): قوي بما يكفي لتأكيد وجود اهتمام شرائي حقيقي، دون أن يكون ممتداً للأعلى بشكل مبالغ فيه. هذه هي المنطقة المثلى للدخول — الاتجاه لديه زخم دون إفراط.`
  },
  rsiOb: {
    en: `RSI is in overbought territory (above 78). The stock has rallied sharply and may need to cool down before the next leg higher. It's better to wait for RSI to pull back below 72 to avoid buying at the top of a short-term surge.`,
    ar: `مؤشر RSI في منطقة التشبع الشرائي (فوق 78). ارتفع السهم بقوة وقد يحتاج لتصحيح قبل الصعود التالي. انتظر تراجع RSI إلى ما دون 72 لتجنب الشراء عند قمة موجة قصيرة المدى.`
  },
  rsiWeak: {
    en: `RSI is below 52 — the threshold this strategy uses to confirm bullish momentum. At 48–52, the stock is in a neutral zone: neither clearly bullish nor bearish on momentum alone. RSI can stay in this zone for weeks during consolidation. A decisive cross above 52 alongside rising MACD would be the entry trigger to watch for.`,
    ar: `مؤشر RSI دون 52 — الحد الذي تستخدمه الاستراتيجية لتأكيد الزخم الصعودي. في نطاق 48–52 يكون السهم في منطقة محايدة. راقب تجاوز RSI لـ52 مع MACD إيجابي كمحفز للدخول.`
  },
  macd: {
    en: {
      pass:`The MACD histogram is positive, meaning the short-term EMA (12-day) is accelerating faster than the long-term (26-day). In plain terms: recent price momentum is real and building — not just noise or a short-term bounce.`,
      fail:`The MACD histogram is negative — short-term momentum is still lagging behind. This is common in early recovery phases where price has lifted but hasn't fully accelerated yet. A flip to a positive histogram would be the meaningful confirmation signal.`
    },
    ar: {
      pass:`هيستوجرام MACD إيجابي، مما يعني أن المتوسط قصير المدى (12 يوم) يتسارع بشكل أسرع من الطويل (26 يوم). بمعنى بسيط: زخم السعر الأخير حقيقي ومتنامٍ، وليس مجرد ضوضاء أو ارتداد مؤقت.`,
      fail:`هيستوجرام MACD سالب — الزخم قصير المدى لا يزال يتأخر أو يتباطأ. هذا شائع في مراحل التعافي المبكرة. تحول الهيستوجرام للإيجابية سيكون إشارة التأكيد المطلوبة.`
    }
  },
  vol: {
    en: {
      pass:`Volume came in well above average — strong participation confirms institutional or professional buying, not just retail speculation. High volume on up-days is one of the clearest signs of genuine demand and tends to sustain the move.`,
      fail:`Volume is below the 1.2× threshold required for Tadawul stocks. Moves on thin volume often reverse when stronger sellers return. Look for a high-volume day to confirm the direction before entering.`
    },
    ar: {
      pass:`الحجم جاء فوق المتوسط بشكل واضح — مشاركة قوية تدل على اهتمام مؤسسي أو احترافي حقيقي، وليس مجرد مضاربة أفراد. الحجم المرتفع مع الارتفاع من أوضح علامات الطلب الجاد والمستدام.`,
      fail:`الحجم دون عتبة 1.2× المطلوبة للأسهم السعودية. التحركات بحجم ضعيف كثيراً ما تفشل حين يعود البائعون الأقوى. ابحث عن يوم بحجم مرتفع يؤكد الاتجاه قبل الدخول.`
    }
  },
  volBear: {
    en: {
      pass:`Volume is above average — but on a SELL signal this confirms selling pressure, not buying. High volume during a downtrend means institutions are actively distributing (exiting) shares. Note: Whale Watch's MFI indicator tells you the direction of that volume — if MFI is below 50, the heavy volume is flowing out, not in.`,
      fail:`Volume is below the 1.2× threshold. Without strong volume, the selling move lacks institutional conviction — the downtrend may be slower to develop or could reverse on any positive catalyst.`
    },
    ar: {
      pass:`الحجم فوق المتوسط — لكن في إشارة البيع هذا يؤكد ضغط البيع، وليس الشراء. الحجم المرتفع خلال الهبوط يعني أن المؤسسات تتخارج بنشاط. ملاحظة: مؤشر MFI في متابعة الحيتان يوضح اتجاه هذا الحجم.`,
      fail:`الحجم دون عتبة 1.2×. بدون حجم قوي، تفتقر حركة الهبوط لإقناع مؤسسي — قد يكون الهبوط أبطأ أو ينعكس عند أي محفز إيجابي.`
    }
  },
  verdicts: {
    en: {
      'STRONG BUY':  n => `<strong>${n}</strong> is in a <strong>strong uptrend</strong> right now: moving averages stacked up, price above its long-term baseline, RSI and MACD showing momentum. This describes the stock's <em>current state</em> — it is <strong>not a forecast</strong>. In testing, names in this state were profitable only ~37% of the time and lagged simple buy-and-hold. Use it as market context; the validated buy-list is the Momentum tab, and your own chart read matters.`,
      'BUY':         n => `<strong>${n}</strong> is in an <strong>uptrend</strong> but missing one or two confirmations. A description of current state, not advice — the score does not predict returns. Context for your own read.`,
      'WATCH':       n => `<strong>${n}</strong> shows <strong>early/mixed</strong> signals — no established trend yet. Descriptive only; nothing to act on from the score alone.`,
      'SKIP':        n => `<strong>${n}</strong> has <strong>no clear trend</strong> either way right now. Neutral state.`,
      'STRONG SELL': n => `<strong>${n}</strong> is in a <strong>strong downtrend</strong>: EMAs inverted, price below its baseline, weak RSI, MACD down. This describes current state — <strong>not a trade signal</strong> (you can't short TASI). Context only.`,
      'SELL':        n => `<strong>${n}</strong> is in a <strong>downtrend</strong>. Descriptive state, not a short call (no shorting on TASI). Context only.`,
      'AVOID':       n => `<strong>${n}</strong> is showing <strong>weakness</strong> — early downward signs, not a confirmed trend. Descriptive state, not advice.`,
    },
    ar: {
      'STRONG BUY':  n => `<strong>${n}</strong> في <strong>اتجاه صاعد قوي</strong> حالياً: المتوسطات مرتبة صعوداً، السعر فوق خط الأساس، وRSI وMACD يظهران زخماً. هذا <em>وصف للحالة الراهنة</em> وليس توقعاً. في الاختبارات، الأسهم في هذه الحالة كانت رابحة بنسبة ~37% فقط وتخلّفت عن الشراء والاحتفاظ البسيط. استخدمه كسياق للسوق؛ قائمة الشراء المُتحقَّقة هي تبويب الزخم.`,
      'BUY':         n => `<strong>${n}</strong> في <strong>اتجاه صاعد</strong> مع نقص تأكيد أو اثنين. وصف للحالة وليس نصيحة — التقييم لا يتنبأ بالعوائد. سياق لقراءتك الخاصة.`,
      'WATCH':       n => `<strong>${n}</strong> إشارات <strong>مبكرة/مختلطة</strong> دون اتجاه واضح. وصف فقط.`,
      'SKIP':        n => `<strong>${n}</strong> <strong>لا يوجد اتجاه واضح</strong> حالياً. حالة محايدة.`,
      'STRONG SELL': n => `<strong>${n}</strong> في <strong>اتجاه هابط قوي</strong>: المتوسطات مقلوبة، السعر تحت الأساس، RSI ضعيف، MACD هابط. وصف للحالة — <strong>وليس إشارة تداول</strong> (لا بيع على المكشوف في تداول). سياق فقط.`,
      'SELL':        n => `<strong>${n}</strong> في <strong>اتجاه هابط</strong>. وصف للحالة وليس إشارة بيع على المكشوف (غير ممكن في تداول). سياق فقط.`,
      'AVOID':       n => `<strong>${n}</strong> يُظهر <strong>ضعفاً</strong> — علامات هبوطية مبكرة غير مؤكدة. وصف للحالة وليس نصيحة.`,
    }
  },
  entryGuide: {
    en: (zone, stop) => `Look for a <strong>pullback to EMA 34 (${zone})</strong> as the primary entry zone — it acts as dynamic support in trending stocks. If price is already well above EMA 34, wait for the pullback rather than chasing.<br><br><strong>Structure stop:</strong> A close below EMA 89 (${stop}) would break the medium-term trend structure — use this as your invalidation level.<br><br><strong>Trade tab stop:</strong> Uses 1.5× ATR from entry for mechanical sizing. Both are valid — the EMA 89 stop is wider and suits swing/position traders; the ATR stop suits shorter-term entries.<br><br><strong>Targets:</strong> T1 at 1.5× ATR (1:1 R:R, take partial profits here). T2 at 3× ATR (2:1 R:R, main target). Trail stop to entry after T1.`,
    ar: (zone, stop) => `ابحث عن تراجع نحو <strong>المتوسط 34 (${zone})</strong> كنقطة دخول — دعم ديناميكي في الأسهم الصاعدة.<br><br><strong>وقف الهيكل:</strong> إغلاق أسفل المتوسط 89 (${stop}) يكسر بنية الاتجاه — استخدمه كمستوى الإلغاء.<br><br><strong>الأهداف:</strong> T1 عند 1.5× ATR (نسبة 1:1)، T2 عند 3× ATR (نسبة 2:1).`
  },
  watchGuide: {
    en: (missing, zone) => `This stock is <strong>${missing.length} step${missing.length!==1?'s':''} away</strong> from a valid entry:<br><br>${missing.map(w=>`• ${w}`).join('<br>')}<br><br>Set a price alert near <strong>EMA 34 (${zone})</strong> and revisit when RSI crosses 52 or MACD turns positive.`,
    ar: (missing, zone) => `هذا السهم يبعد <strong>${missing.length} خطوة</strong> عن نقطة الدخول:<br><br>${missing.map(w=>`• ${w}`).join('<br>')}<br><br>ضع تنبيهاً سعرياً قرب <strong>المتوسط 34 (${zone})</strong>.`
  },
  sellGuide: {
    en: (zone, base) => `Price is trading in a confirmed bearish trend. <strong>Avoid new long positions.</strong><br><br>If holding a long position: consider exiting on any bounce toward <strong>EMA 34 (${zone})</strong> — that level now acts as dynamic resistance.<br><br><strong>Watch:</strong> A close above EMA 89 (${base}) would invalidate the bearish setup.`,
    ar: (zone, base) => `السعر في اتجاه هابط مؤكد. <strong>تجنب الشراء.</strong><br><br>إن كنت تحمل مركزاً طويلاً: فكر في الخروج عند أي ارتداد نحو <strong>المتوسط 34 (${zone})</strong> — هذا المستوى أصبح مقاومة ديناميكية.<br><br><strong>انتبه:</strong> إغلاق فوق المتوسط 89 (${base}) يُلغي الإعداد الهبوطي.`
  },
  avoidGuide: {
    en: (missing, zone) => `<strong>${missing.length} bearish signal${missing.length!==1?'s':''}</strong> present — setup is incomplete but deteriorating:<br><br>${missing.map(w=>`• ${w}`).join('<br>')}<br><br>Hold off on new entries. A break below <strong>EMA 34 (${zone})</strong> would confirm the bearish turn.`,
    ar: (missing, zone) => `<strong>${missing.length} إشارة هبوطية</strong> حاضرة — الإعداد ناقص لكن يتراجع:<br><br>${missing.map(w=>`• ${w}`).join('<br>')}<br><br>لا تداول الآن. كسر <strong>المتوسط 34 (${zone})</strong> يؤكد الانعكاس الهبوطي.`
  },
  // ── Bearish criterion explanations ─────────────────────────────────────────
  emaStackBear: {
    en: {
      pass: `The moving averages are inverted — EMA 13 is below EMA 34, which is below EMA 89. This descending staircase confirms a downtrend is in place across all timeframes and is one of the strongest bearish structural signals.`,
      fail: `The moving averages are not in a bearish formation. The trend structure doesn't yet confirm a sustained downtrend.`
    },
    ar: {
      pass: `المتوسطات المتحركة مقلوبة — 13 أسفل 34 أسفل 89. هذا الترتيب الهابط يؤكد الاتجاه الهبوطي عبر جميع الأطر.`,
      fail: `المتوسطات ليست في تشكيل هبوطي. البنية لا تؤكد الاتجاه الهابط بعد.`
    }
  },
  ema200Bear: {
    en: {
      pass: `Price is below the 200-day EMA — the most important long-term trend line. Trading below it confirms the stock is in a long-term bear market regime. Institutional buyers typically do not buy below this level.`,
      fail: `Price is still above the 200-day EMA, meaning the long-term trend hasn't turned bearish. The bearish setup is incomplete.`
    },
    ar: {
      pass: `السعر أسفل المتوسط 200 — أهم خط اتجاه طويل الأمد. التداول تحته يؤكد أن السهم في سوق دب بعيد المدى.`,
      fail: `السعر لا يزال فوق المتوسط 200. الإعداد الهبوطي غير مكتمل.`
    }
  },
  rsiWeakBear: {
    en: `RSI is in the weak zone (22–48): momentum is clearly negative without being oversold. This is the bearish equivalent of the bullish momentum zone — the ideal RSI range for a confirmed downtrend entry.`,
    ar: `مؤشر RSI في منطقة الضعف (22–48): الزخم سلبي بوضوح دون تشبع بيعي. هذه المنطقة المثلى للاتجاه الهابط المؤكد.`
  },
  rsiNotWeak: {
    en: `RSI hasn't dropped below 48 yet — the threshold needed to confirm bearish momentum. Wait for it to enter the weak zone (22–48) before considering this a full bearish signal.`,
    ar: `مؤشر RSI لم ينخفض دون 48 بعد — الحد المطلوب لتأكيد الزخم الهابط. انتظر دخوله منطقة الضعف (22–48).`
  },
  rsiOs: {
    en: `RSI is in extreme oversold territory (below 22). This is a warning, not a buy signal — it means the stock has fallen very hard very fast. Oversold levels frequently trigger short-term technical bounces (short-covering rallies), but these typically don't reverse the underlying downtrend. For bearish setups, this criterion doesn't score points precisely because a bounce is likely — wait for the bounce to fade and RSI to re-enter the 22–48 zone before acting on the bearish signal.`,
    ar: `مؤشر RSI في منطقة التشبع البيعي الشديد (تحت 22). هذه إشارة تحذير وليست إشارة شراء — تعني أن السهم هبط بقوة وسرعة. التشبع البيعي كثيراً ما يسبق ارتداداً فنياً مؤقتاً، لكنه نادراً ما يعكس الاتجاه الهابط. انتظر انتهاء الارتداد وعودة RSI إلى 22–48 قبل التصرف.`
  },
  macdBear: {
    en: {
      pass: `MACD histogram is negative — short-term momentum is deteriorating faster than the longer-term average. This confirms selling pressure is real and accelerating.`,
      fail: `MACD histogram is positive. Momentum hasn't turned fully bearish yet, which weakens the sell signal.`
    },
    ar: {
      pass: `هيستوجرام MACD سالب — الزخم قصير المدى يتراجع أسرع من الطويل. يؤكد أن ضغط البيع حقيقي ومتسارع.`,
      fail: `هيستوجرام MACD إيجابي. الزخم لم يتحول هبوطياً بعد، مما يضعف إشارة البيع.`
    }
  }
};

// ────────────────────────────────────────────────────────────────────────────
// Language
// ────────────────────────────────────────────────────────────────────────────
let lang = localStorage.getItem('tasi-lang') || 'en';

function t(key){ return TR[lang][key] || TR.en[key] || key; }

function toggleLang(){
  setLang(lang === 'en' ? 'ar' : 'en');
}

function setLang(newLang){
  lang = newLang;
  localStorage.setItem('tasi-lang', lang);
  const isAr = lang === 'ar';
  document.documentElement.lang = lang;
  document.documentElement.dir  = isAr ? 'rtl' : 'ltr';
  document.getElementById('lang-btn').textContent = isAr ? 'English' : 'عربي';
  // Update all data-i18n elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const val = t(key);
    if(val) el.innerHTML = val;
  });
  // Update buttons with data-i18n-btn
  document.getElementById('btn-scan').innerHTML  = t('scanAll');
  // Update empty state text
  const es = document.getElementById('empty-screener-text');
  if(es) es.innerHTML = t('emptyScreener');
  // Re-render if data loaded
  renderSectorFilter();
  applyModeUI();
  if(scanData.length) renderTable();
  if(openDrawerData) openDrawer(openDrawerData);
  renderScoringRules();
  if(document.getElementById('criteria-grid').innerHTML) loadCriteriaEditor();
}

// ────────────────────────────────────────────────────────────────────────────
// Data & state
// ────────────────────────────────────────────────────────────────────────────

// ─── VIEW MODE (Beginner / Pro) ──────────────────────────────────────────────
let viewMode = localStorage.getItem('mawjah_view_mode') || 'pro';

function initViewMode() {
  document.body.setAttribute('data-view', viewMode);
  const isPro = viewMode === 'pro';
  document.getElementById('view-btn-pro')?.classList.toggle('active', isPro);
  document.getElementById('view-btn-guide')?.classList.toggle('active', !isPro);
}

function setViewMode(mode) {
  viewMode = mode;
  localStorage.setItem('mawjah_view_mode', mode);
  document.body.setAttribute('data-view', mode);
  document.getElementById('view-btn-pro')?.classList.toggle('active', mode === 'pro');
  document.getElementById('view-btn-guide')?.classList.toggle('active', mode === 'guide');
  if (scanData.length) { renderMarketMood(); renderBeginnerTable(); }
  // Sync summary cards visibility in guide mode
  document.getElementById('scan-progress')?.style && null;
}

const BEG_BIAS_PLAIN = {
  'STRONG BUY' : 'Very strong signal — nearly all checks passed. High-conviction buy.',
  'BUY'        : 'Good signal — most checks passed. Solid opportunity.',
  'WATCH'      : 'Interesting but not ready yet. Keep an eye on it.',
  'SKIP'       : 'No signal — not worth acting on right now.',
  'AVOID'      : 'Early weakness detected. Do not buy.',
  'SELL'       : 'Weakness confirmed — consider selling or staying out.',
  'STRONG SELL': 'Strong bearish signal — all warning checks triggered.',
};

function renderMarketMood() {
  const el = document.getElementById('market-mood-banner');
  if (!el) return;
  if (!scanData.length) { el.innerHTML = ''; return; }
  const sb   = scanData.filter(r => r.bias === 'STRONG BUY').length;
  const buy  = scanData.filter(r => r.bias === 'BUY').length;
  const sell = scanData.filter(r => r.bias === 'SELL' || r.bias === 'STRONG SELL').length;
  const total = sb + buy;
  let icon, mood, color, desc;
  if (total >= 10) {
    icon = '🟢'; mood = 'Good'; color = 'var(--green)';
    desc = `${total} stocks have strong buy signals right now. Market conditions are favorable — a good time to look for opportunities.`;
  } else if (total >= 4) {
    icon = '🟡'; mood = 'Cautious'; color = 'var(--yellow)';
    desc = `${total} buy signal${total !== 1 ? 's' : ''} found. Market is mixed — be selective. Focus on only the highest-scoring stocks.`;
  } else {
    icon = '🔴'; mood = 'Weak'; color = 'var(--red)';
    desc = sell >= 5
      ? `Market is weak — ${sell} stocks are showing sell signals. Better to wait on the sidelines until conditions improve.`
      : `Only ${total} buy signal${total !== 1 ? 's' : ''} right now. Market lacks direction. Patience is the best trade.`;
  }
  el.innerHTML = `<div class="mood-banner">
    <div>
      <div class="mood-label">Market Mood</div>
      <div class="mood-badge" style="color:${color}">${icon} ${mood}</div>
    </div>
    <div class="mood-desc">${desc}</div>
  </div>`;
}

function renderBeginnerTable() {
  const el = document.getElementById('beg-screener-content');
  if (!el) return;
  if (!scanData.length) {
    el.innerHTML = `<div class="beg-empty">No scan data yet.<br>Click <strong>Full Scan</strong> to get started.</div>`;
    return;
  }
  const items = [...scanData]
    .filter(r => r.bias !== 'ERROR' && r.bias !== 'NO DATA')
    .sort((a, b) => (b.score ?? 0) - (a.score ?? 0));
  const MAX = 40;
  const shown = items.slice(0, MAX);
  const rows = shown.map(r => {
    const max = r.maxScore || 8;
    const pct = Math.round((r.score ?? 0) / max * 100);
    const col = pct >= 75 ? 'var(--green)' : pct >= 50 ? 'var(--yellow)' : 'var(--red)';
    const plain = BEG_BIAS_PLAIN[r.bias] || r.bias;
    const isCross = nativeCcy(r.sym) !== currency;
    const priceStr = (isCross ? '~' : '') + fmtPrice(r.price, r.sym);
    const chg = r.change_pct ?? r.chg;
    const chgHtml = chg != null
      ? `<div class="beg-chg" style="color:${chg >= 0 ? 'var(--green)' : 'var(--red)'}">${chg >= 0 ? '+' : ''}${chg.toFixed(2)}%</div>`
      : '';
    return `<div class="beg-card" onclick="onRowClick(event,'${r.sym}')">
      <div class="beg-card-info">
        <div class="beg-card-name">${r.name || tickerDisplay(r.sym)}</div>
        <div class="beg-card-sub">${tickerDisplay(r.sym)} · ${sectorLabel(sectorOf(r.sym))}</div>
        <div class="beg-plain">${plain}</div>
        <div class="beg-bar"><div class="beg-bar-fill" style="width:${pct}%;background:${col}"></div></div>
      </div>
      <div class="beg-signal-col">
        ${biasBadgeHtml(r.bias)}
        <div class="beg-price">${priceStr}</div>
        ${chgHtml}
      </div>
    </div>`;
  }).join('');
  const more = items.length > MAX
    ? `<div class="beg-note">Showing top ${MAX} of ${items.length} stocks · Switch to <strong>Pro</strong> view to see all with full technical data</div>`
    : '';
  el.innerHTML = `<div class="beg-list">${rows}</div>${more}`;
}
// ────────────────────────────────────────────────────────────────────────────

let scanData      = [];
let selectedSyms  = new Set();
let openDrawerData= null;
let sortKey       = 'score';
let sortAsc       = false;
let filterSec     = 'all';
let filterBiasVal = 'all';
let searchQuery   = '';
let pollTimer     = null;
let rulesData     = null;
let shariaMap     = {};
let activeMarket  = 'all';
let universeData  = {};
let deltaData     = [];
let positionsData = {};
let settingsData  = {};
let virtualData     = {};
let scoreHistory    = {};
let alertRulesData  = [];
let watchlistData   = JSON.parse(localStorage.getItem('mawjah_watchlist')||'[]');
let priceAlerts     = JSON.parse(localStorage.getItem('mawjah_price_alerts')||'[]');
let archiveViewing  = null;
let scanMode        = localStorage.getItem('mawjah-mode') || 'swing';
let blockDealsCache = [];   // latest block deals — refreshed by loadBlockDeals, read by drawer Overview

// Approximate ADTV (Average Daily Trading Value, SAR) for major TASI stocks
// Used to size block deals relative to each stock's liquidity, not in absolute SAR terms
// Source: rough 30-day averages; update periodically. Unlisted stocks fall through to bucket system.
const TASI_ADTV = {
  '2222':800e6,'1120':400e6,'7010':250e6,'2082':80e6,'1180':120e6,'2030':200e6,
  '1010':90e6,'1050':60e6,'1060':70e6,'1080':50e6,'1100':110e6,'1140':60e6,
  '1020':20e6,'2010':150e6,'2020':90e6,'2050':40e6,'2060':35e6,'2280':25e6,
  '4300':30e6,'4020':20e6,'4150':15e6,'4240':18e6,'4001':22e6,'4031':28e6,
  '2350':45e6,'2360':35e6,'3010':30e6,'3020':25e6,'3030':20e6,
  '6001':15e6,'6004':12e6,'6012':10e6,'6013':8e6,
};
function getADTV(sym) {
  const code = sym.replace('TADAWUL:','');
  if (TASI_ADTV[code]) return TASI_ADTV[code];
  // Fallback bucket by whale_score proxy (large cap ~50M, mid ~20M, small ~8M)
  return null; // caller handles null
}
function dealSignificanceVsADTV(sarValue, sym) {
  const adtv = getADTV(sym);
  if (!adtv) return dealSignificanceAbsolute(sarValue); // fall back to absolute
  const pct = sarValue / adtv * 100;
  if (pct >= 40) return { label:'Massive',  col:'#ff5252',      pct };
  if (pct >= 15) return { label:'Large',    col:'var(--orange)', pct };
  if (pct >=  5) return { label:'Notable',  col:'var(--yellow)', pct };
  if (pct >=  1) return { label:'Small',    col:'var(--text2)',  pct };
  return               { label:'Micro',    col:'var(--text3)',  pct };
}
function dealSignificanceAbsolute(sarValue) {
  if (sarValue >= 50e6) return { label:'Major',   col:'#ff5252',      pct:100 };
  if (sarValue >= 10e6) return { label:'Large',   col:'var(--orange)', pct:75  };
  if (sarValue >=  2e6) return { label:'Notable', col:'var(--yellow)', pct:45  };
  if (sarValue >= 500e3)return { label:'Small',   col:'var(--text2)',  pct:20  };
  return                       { label:'Micro',   col:'var(--text3)',  pct:8   };
}
if (scanMode === 'invest') { scanMode = 'position'; localStorage.setItem('mawjah-mode','position'); }

// ── Currency ──────────────────────────────────────────────────────────────────
const SAR_USD = 3.75;
let currency = localStorage.getItem('mawjah-currency') || 'SAR';

function nativeCcy(sym){ return sym?.startsWith('TADAWUL:') ? 'SAR' : 'USD'; }

function convertPrice(val, sym){
  if(val == null) return null;
  const native = nativeCcy(sym);
  if(native === 'SAR' && currency === 'USD') return val / SAR_USD;
  if(native === 'USD' && currency === 'SAR') return val * SAR_USD;
  return val;
}

function fmtPrice(val, sym){
  const v = convertPrice(val, sym);
  if(v == null) return '—';
  return v.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2});
}

function ccySign(sym){ return currency === 'SAR' ? 'SAR' : '$'; }

function applyCurrencyUI(){
  const btn = document.getElementById('ccy-btn');
  if(btn) btn.textContent = currency === 'SAR' ? t('usdToggle') : t('sarToggle');
  updatePriceCcyBadge();
  updateCcyInfoBar();
}

function toggleCurrency(){
  currency = currency === 'SAR' ? 'USD' : 'SAR';
  localStorage.setItem('mawjah-currency', currency);
  applyCurrencyUI();
  renderTable();
  if(openDrawerData){
    const r = openDrawerData;
    document.getElementById('d-price').textContent = ccySign(r.sym) + ' ' + fmtPrice(r.price, r.sym);
    buildTradeTab(r);
  }
  renderVirtual();
}

// ────────────────────────────────────────────────────────────────────────────
// Sectors
// ────────────────────────────────────────────────────────────────────────────
const SECTORS = {
  '1120':'banking','1180':'banking','1010':'banking','1030':'banking','1050':'banking',
  '1080':'banking','1140':'banking','1150':'banking','1060':'banking','1020':'banking','1213':'banking',
  '2222':'energy',
  '2010':'petrochem','2090':'petrochem','2380':'petrochem','2060':'petrochem','2350':'petrochem',
  '7010':'telecom','7020':'telecom','7030':'telecom','9200':'telecom','7203':'telecom',
  '5110':'utility','6010':'utility',
  '4200':'food','2050':'food','4190':'food','6070':'food','6090':'food',
  '4150':'retail','4240':'retail','4261':'retail',
  '4002':'health','4007':'health','2160':'health','4009':'health','4013':'health','4017':'health',
  '4300':'realestate','4310':'realestate','4082':'realestate','3001':'realestate',
  '3010':'cement','3020':'cement','3030':'cement','3040':'cement','3050':'cement',
  '2110':'industrial','2120':'industrial','2170':'industrial','4031':'industrial','2180':'industrial',
  '8010':'insurance','8020':'insurance',
};
const SECTOR_KEY = {
  banking:'sBanking', energy:'sEnergy', petrochem:'sPetrochem', telecom:'sTelecom',
  utility:'sUtility', food:'sFood', retail:'sRetail', health:'sHealth',
  realestate:'sRealestate', cement:'sCement', industrial:'sIndustrial',
  insurance:'sInsurance', other:'sOther',
  tech:'sTech', financials:'sFinancials', consumer:'sConsumer', retailus:'sRetailUs', healthus:'sHealthUs',
  energyus:'sEnergyUs', etf_equity:'sEtfEquity', etf_metal:'sEtfMetal', etf_crude:'sEtfCrude', etf_bond:'sEtfBond',
  crypto:'sCrypto', metal:'sMetal', crude:'sCrude',
};

const GLOBAL_SECTOR = {
  'NASDAQ:AAPL':'tech','NASDAQ:NVDA':'tech','NASDAQ:MSFT':'tech','NASDAQ:AMZN':'tech',
  'NASDAQ:META':'tech','NASDAQ:GOOGL':'tech','NASDAQ:TSLA':'tech','NASDAQ:AVGO':'tech',
  'NASDAQ:NFLX':'tech','NASDAQ:COST':'consumer',
  'NYSE:JPM':'financials','NYSE:V':'financials','NYSE:BAC':'financials','NYSE:MA':'financials',
  'NYSE:UNH':'healthus','NYSE:JNJ':'healthus',
  'NYSE:XOM':'energyus',
  'NYSE:WMT':'retailus','NYSE:HD':'retailus','NYSE:PG':'consumer',
  'NASDAQ:QQQ':'etf_equity','NYSE:SPY':'etf_equity','NYSE:IWM':'etf_equity','NYSE:DIA':'etf_equity',
  'NYSE:VTI':'etf_equity','NYSE:EEM':'etf_equity','NYSE:IEMG':'etf_equity','NASDAQ:ARKK':'etf_equity',
  'NYSE:XLK':'etf_equity','NYSE:XLF':'etf_equity',
  'NYSE:GLD':'etf_metal','NYSE:SLV':'etf_metal',
  'NYSE:USO':'etf_crude',
  'NYSE:TLT':'etf_bond',
  'BITSTAMP:BTCUSD':'crypto','BITFINEX:XRPUSD':'crypto','COINBASE:ETHUSD':'crypto',
  'BINANCE:SOLUSDT':'crypto','BINANCE:BNBUSDT':'crypto','COINBASE:AVAXUSD':'crypto','BINANCE:ADAUSDT':'crypto',
  'TVC:GOLD':'metal','TVC:SILVER':'metal','TVC:COPPER':'metal',
  'TVC:USOIL':'crude','TVC:NATURALGAS':'crude',
};

const MARKET_OF_SYM = {
  'NASDAQ:AAPL':'us','NASDAQ:NVDA':'us','NASDAQ:MSFT':'us','NASDAQ:AMZN':'us',
  'NASDAQ:META':'us','NASDAQ:GOOGL':'us','NASDAQ:TSLA':'us','NASDAQ:AVGO':'us',
  'NASDAQ:COST':'us','NASDAQ:NFLX':'us',
  'NYSE:JPM':'us','NYSE:V':'us','NYSE:UNH':'us','NYSE:XOM':'us','NYSE:WMT':'us',
  'NYSE:BAC':'us','NYSE:MA':'us','NYSE:JNJ':'us','NYSE:PG':'us','NYSE:HD':'us',
  'NASDAQ:QQQ':'etf','NYSE:SPY':'etf','NYSE:IWM':'etf','NYSE:DIA':'etf','NYSE:VTI':'etf',
  'NYSE:GLD':'etf','NYSE:SLV':'etf','NYSE:USO':'etf','NYSE:TLT':'etf',
  'NYSE:EEM':'etf','NYSE:XLK':'etf','NYSE:XLF':'etf','NASDAQ:ARKK':'etf','NYSE:IEMG':'etf',
  'BITSTAMP:BTCUSD':'crypto','BITFINEX:XRPUSD':'crypto','COINBASE:ETHUSD':'crypto',
  'BINANCE:SOLUSDT':'crypto','BINANCE:BNBUSDT':'crypto','COINBASE:AVAXUSD':'crypto','BINANCE:ADAUSDT':'crypto',
  'TVC:GOLD':'commodity','TVC:SILVER':'commodity','TVC:USOIL':'commodity',
  'TVC:NATURALGAS':'commodity','TVC:COPPER':'commodity',
};

function marketOf(sym){ return sym.startsWith('TADAWUL:')?'tasi':MARKET_OF_SYM[sym]||'other'; }
function sectorOf(sym){ const id=sym.replace('TADAWUL:',''); return SECTORS[id]||GLOBAL_SECTOR[sym]||'other'; }
function sectorLabel(sec){ return t(SECTOR_KEY[sec]||'sOther'); }
function tickerDisplay(sym){ const i=sym.indexOf(':'); return i>=0?sym.slice(i+1):sym; }

// ── Sector filter options per market ─────────────────────────────────────────
const SECTOR_OPTS = {
  all:       [['all','all'],['banking','fBanks'],['energy','fEnergy'],['petrochem','fPetro'],['tech','fTech'],['financials','fFinancials'],['crypto','mCrypto'],['metal','fMetal'],['other','fOther']],
  tasi:      [['all','all'],['banking','fBanks'],['energy','fEnergy'],['petrochem','fPetro'],['telecom','fTelecom'],['health','fHealth'],['food','fFood'],['other','fOther']],
  us:        [['all','all'],['tech','fTech'],['financials','fFinancials'],['healthus','fHealth'],['energyus','fEnergy'],['consumer','fConsumer'],['retailus','fOther']],
  etf:       [['all','all'],['etf_equity','fEtfEquity'],['etf_metal','fEtfMetal'],['etf_crude','fEtfCrude'],['etf_bond','fEtfBond']],
  crypto:    [['all','all']],
  commodity: [['all','all'],['metal','fMetal'],['crude','fCrude']],
};
function renderSectorFilter(){
  const opts=SECTOR_OPTS[activeMarket]||SECTOR_OPTS.tasi;
  document.getElementById('sector-filters').innerHTML=opts.map(([sec,key])=>
    `<button class="filter-btn${filterSec===sec?' active':''}" onclick="filterSector('${sec}',this)">${t(key)}</button>`
  ).join('');
}

// ────────────────────────────────────────────────────────────────────────────
// Clock
// ────────────────────────────────────────────────────────────────────────────
function updateClock(){
  const n=new Date();
  document.getElementById('clock').textContent=
    n.toLocaleDateString(lang==='ar'?'ar-SA':'en-SA',{weekday:'short',month:'short',day:'numeric'})+
    '  '+n.toLocaleTimeString(lang==='ar'?'ar-SA':'en-SA',{hour:'2-digit',minute:'2-digit',second:'2-digit'});
}
setInterval(updateClock,1000); updateClock();

// ────────────────────────────────────────────────────────────────────────────
// Tabs / filters
// ────────────────────────────────────────────────────────────────────────────
function switchTab(name,btn){
  document.querySelectorAll('.panel').forEach(p=>p.classList.remove('active'));
  document.querySelectorAll('.tab').forEach(t=>t.classList.remove('active'));
  document.getElementById('panel-'+name).classList.add('active');
  btn.classList.add('active');
  // Portfolio tab loads all three sections
  if(name==='positions'){ loadPositionsPanel(); loadVirtualPanel(); renderWatchlistPanel(); loadWhaleTab(); loadCorrelationMatrix(); }
  // Alerts tab
  if(name==='criteria'){ loadCriteriaEditor(); loadTelegramSettings(); loadAlertRules(); }
  // Settings tab
  if(name==='universe'){ renderScoringRules(); loadUniversePanel(); }
  // Markets tab
  if(name==='markets'){ loadMarketsPanel(); loadPlaybook(); }
  // Goals tab
  if(name==='goals'){ loadGoalsPanel(); }
  // Lab tab
  if(name==='lab'){ loadLabPanel(); loadStrategyValidation(); }
  // Momentum Screen tab (+ block-deal signal)
  if(name==='momentum'){ loadMomentumScreen(); loadBlockDealSignal(); }
}

// ────────────────────────────────────────────────────────────────────────────
// Universe management
// ────────────────────────────────────────────────────────────────────────────
async function loadUniversePanel(){
  const grid=document.getElementById('universe-grid');
  grid.innerHTML=`<div style="padding:20px;color:var(--text3);font-size:12px;grid-column:1/-1">${t('loading')}</div>`;
  try{
    const res=await fetch('/api/universe');
    universeData=await res.json();
    renderUniversePanel();
  }catch(e){ grid.innerHTML=`<div style="padding:20px;color:var(--red);font-size:12px;grid-column:1/-1">${e.message}</div>`; }
}

function renderUniversePanel(){
  const markets=[['tasi','mTasi'],['us','mUs'],['etf','mEtf'],['crypto','mCrypto'],['commodity','mCommodity']];
  document.getElementById('universe-grid').innerHTML=markets.map(([mkt,key])=>renderUniverseCard(mkt,key)).join('');
}

function renderUniverseCard(market,labelKey){
  const syms=universeData[market]||[];
  const itemsHtml=syms.length?syms.map((s,i)=>{
    const sym=typeof s==='object'?s.sym:s;
    const name=typeof s==='object'?s.name:'';
    const ticker=sym.includes(':')?sym.split(':')[1]:sym;
    return`<div class="criteria-item">
      <span class="td-ticker" style="font-size:11px;min-width:75px;flex-shrink:0">${ticker}</span>
      <span style="flex:1;font-size:11px;color:var(--text2);overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${name||sym}</span>
      <button class="criteria-del" onclick="removeUnivSymbol('${market}',${i})">✕</button>
    </div>`;
  }).join(''):`<div style="padding:8px 0;font-size:12px;color:var(--text3)">${t('univEmpty')}</div>`;

  return`<div class="criteria-card" data-market="${market}">
    <div class="criteria-card-header">
      <h3>${t(labelKey)} <span style="color:var(--text3);font-weight:400;font-size:11px">(${syms.length} ${t('univCount')})</span></h3>
      <button class="btn btn-secondary" style="font-size:10px;padding:3px 8px" onclick="resetMarket('${market}')">${t('univReset')}</button>
    </div>
    <div class="criteria-body" style="max-height:220px;overflow-y:auto" id="univ-body-${market}">${itemsHtml}</div>
    <div class="criteria-save-bar" style="flex-wrap:wrap;gap:6px">
      <input type="text" id="univ-sym-${market}" class="add-criteria-input" placeholder="${t('univSymPlaceholder')}" style="flex:2;min-width:120px"
        onkeydown="if(event.key==='Enter'){addUnivSymbol('${market}');event.preventDefault();}">
      <input type="text" id="univ-name-${market}" class="add-criteria-input" placeholder="${t('univNamePlaceholder')}" style="flex:1;min-width:90px"
        onkeydown="if(event.key==='Enter'){addUnivSymbol('${market}');event.preventDefault();}">
      <button class="btn btn-success" style="font-size:11px;padding:5px 10px" onclick="addUnivSymbol('${market}')">${t('univAdd')}</button>
      <button class="btn btn-primary" id="univ-save-${market}" style="font-size:11px;padding:5px 10px" onclick="saveMarket('${market}')">${t('univSave')}</button>
    </div>
  </div>`;
}

function removeUnivSymbol(market,index){
  if(!universeData[market]) return;
  universeData[market].splice(index,1);
  renderUniversePanel();
}

function addUnivSymbol(market){
  const symEl=document.getElementById(`univ-sym-${market}`);
  const nameEl=document.getElementById(`univ-name-${market}`);
  const rawSym=(symEl.value||'').trim().toUpperCase();
  const rawName=(nameEl?nameEl.value:'').trim();
  if(!rawSym) return;
  if(!universeData[market]) universeData[market]=[];
  universeData[market].push({sym:rawSym, name:rawName||rawSym.split(':').pop()});
  symEl.value=''; if(nameEl) nameEl.value='';
  renderUniversePanel();
}

async function saveMarket(market){
  try{
    const res=await fetch('/api/universe',{method:'PUT',headers:{'Content-Type':'application/json'},body:JSON.stringify({market,symbols:universeData[market]||[]})});
    const r=await res.json();
    if(r.ok){
      const btn=document.getElementById(`univ-save-${market}`);
      if(btn){const orig=btn.innerHTML;btn.innerHTML=t('univSaved');btn.style.background='rgba(0,200,83,.2)';setTimeout(()=>{btn.innerHTML=orig;btn.style.background='';},1500);}
    }
  }catch(e){ alert(e.message); }
}

async function resetMarket(market){
  const label=t('m'+market.charAt(0).toUpperCase()+market.slice(1))||market;
  if(!confirm(`Reset "${label}" to default symbols?`)) return;
  try{
    const res=await fetch('/api/universe/reset',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({market})});
    const r=await res.json();
    if(r.ok){ const uvRes=await fetch('/api/universe'); universeData=await uvRes.json(); renderUniversePanel(); }
  }catch(e){ alert(e.message); }
}
function filterSector(sec,btn){ filterSec=sec; document.querySelectorAll('#sector-filters .filter-btn').forEach(b=>b.classList.remove('active')); btn.classList.add('active'); renderTable(); }
function filterBias(val,btn){ filterBiasVal=val; document.querySelectorAll('[data-bias].filter-btn').forEach(b=>b.classList.remove('active')); btn.classList.add('active'); renderTable(); }
function onSearchInput(e){
  searchQuery=e.target.value.trim().toLowerCase();
  const clr=document.getElementById('search-clear-btn');
  if(clr) clr.style.display=searchQuery?'flex':'none';
  renderTable();
}
function clearSearch(){
  searchQuery='';
  const inp=document.getElementById('sym-search');
  if(inp) inp.value='';
  const clr=document.getElementById('search-clear-btn');
  if(clr) clr.style.display='none';
  renderTable();
}
function setMarket(mkt,btn){
  activeMarket=mkt;
  filterSec='all';
  document.querySelectorAll('#market-filters .filter-btn').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  renderSectorFilter();
  renderTable();
  fetchAndShowRegime(mkt);
}

// ────────────────────────────────────────────────────────────────────────────
// Selection
// ────────────────────────────────────────────────────────────────────────────
function updateSelectionBar(){ const n=selectedSyms.size; document.getElementById('sel-count').textContent=n; document.getElementById('selection-bar').classList.toggle('visible',n>0); }
function toggleSelectAll(checked){ getVisibleRows().forEach(r=>checked?selectedSyms.add(r.sym):selectedSyms.delete(r.sym)); updateSelectionBar(); renderTable(); }
function clearSelection(){ selectedSyms.clear(); document.getElementById('cb-select-all').checked=false; updateSelectionBar(); renderTable(); }
function toggleRow(sym,checked){ if(checked)selectedSyms.add(sym); else selectedSyms.delete(sym); updateSelectionBar(); const vis=getVisibleRows(); document.getElementById('cb-select-all').checked=vis.length>0&&vis.every(r=>selectedSyms.has(r.sym)); }
let activeStyleFilter = 'all';

function filterStyle(style, btn) {
  activeStyleFilter = style;
  document.querySelectorAll('#style-filter-group .filter-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  renderTable();
}

function getVisibleRows(){
  let rows=[...scanData];
  if(activeMarket!=='all') rows=rows.filter(r=>marketOf(r.sym)===activeMarket);
  if(filterSec!=='all') rows=rows.filter(r=>sectorOf(r.sym)===filterSec);
  if(filterBiasVal==='buys') rows=rows.filter(r=>r.bias==='STRONG BUY'||r.bias==='BUY');
  else if(filterBiasVal==='watch') rows=rows.filter(r=>r.bias==='WATCH');
  else if(filterBiasVal==='sells') rows=rows.filter(r=>r.bias==='STRONG SELL'||r.bias==='SELL'||r.bias==='AVOID');
  else if(filterBiasVal==='halal') rows=rows.filter(r=>shariaMap[r.sym]&&shariaMap[r.sym].status==='compliant');
  // Style filter — based on auto-detected style_tags
  if(activeStyleFilter!=='all') rows=rows.filter(r=>(r.style_tags||[]).includes(activeStyleFilter));
  if(searchQuery){
    const q=searchQuery;
    rows=rows.filter(r=>tickerDisplay(r.sym).toLowerCase().includes(q)||(r.name||'').toLowerCase().includes(q));
  }
  return rows;
}
async function scanSelected(){
  if(!selectedSyms.size) return;
  const btn=document.getElementById('btn-scan-selected');
  btn.disabled=true; btn.innerHTML='<span class="spin">⟳</span> '+t('scanSelected');
  await fetch('/api/scan/start',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({symbols:[...selectedSyms]})});
  startPolling();
}

// ────────────────────────────────────────────────────────────────────────────
// Sort
// ────────────────────────────────────────────────────────────────────────────
function sortTable(key){ if(sortKey===key)sortAsc=!sortAsc; else{sortKey=key;sortAsc=key!=='score';} renderTable(); }
function sortVal(r,key){ switch(key){ case'ticker':return r.sym||''; case'name':return r.name||''; case'sector':return sectorOf(r.sym); case'price':return r.price||0; case'chg':return r.change_pct??-999; case'score':return r.score||0; case'rsi':return r.rsi||0; case'macd':return r.macd_hist||-999; case'vol':return r.vol_ratio||0; case'rs':return r.rs_score??-999; case'bias':return['STRONG BUY','BUY','WATCH','SKIP','AVOID','SELL','STRONG SELL','ERROR','NO_DATA'].indexOf(r.bias); case'delta':{ const d=deltaData.find(x=>x.sym===r.sym); return d?.score_delta||0; } } return 0; }

// ────────────────────────────────────────────────────────────────────────────
// Render helpers
// ────────────────────────────────────────────────────────────────────────────
function scoreColor(s,m){ const p=s/m; return p>=.85?'#00c853':p>=.6?'#76ff03':p>=.375?'#ffd600':'#ff5252'; }
function rsiClass(v){ if(v==null)return'rsi-neut'; if(v>=78)return'rsi-ob'; if(v>=52)return'rsi-bull'; if(v>=40)return'rsi-neut'; return'rsi-bear'; }

// Plain-language helpers for non-financial users
function scoreLabel(s,m){
  const p=(s||0)/(m||8);
  if(p>=.85) return{text:'Strong',col:'#00c853'};
  if(p>=.625) return{text:'Good',col:'#76ff03'};
  if(p>=.375) return{text:'Fair',col:'#ffd600'};
  return{text:'Weak',col:'#ff5252'};
}
function plainSignal(bias){
  return{
    'STRONG BUY': 'Strong opportunity — most indicators aligned',
    'BUY':        'Good entry signal — trend is positive',
    'WATCH':      'Shows promise — wait for confirmation',
    'SKIP':       'No clear direction — sit on the sidelines',
    'AVOID':      'Caution advised — risk outweighs reward',
    'SELL':       'Exit signal — momentum weakening',
    'STRONG SELL':'Strong exit — multiple red flags',
    'ERROR':      'Could not load data for this stock',
    'NO_DATA':    'Not enough data to evaluate',
  }[bias]||'';
}

function rsHtml(r){
  if(r.rs_score==null) return'<span class="rs-neut">—</span>';
  const cls=r.rs_score>2?'rs-lead':r.rs_score<-2?'rs-lag':'rs-neut';
  const sign=r.rs_score>0?'+':'';
  return`<span class="${cls}">${sign}${r.rs_score.toFixed(1)}%</span>`;
}

// ── Live scanner (SSE) ───────────────────────────────────────────────────────
let liveActive = false;
let eventSource = null;

function connectSSE(){
  if(eventSource) return;
  eventSource = new EventSource('/api/events');
  eventSource.onmessage = e => {
    try{
      const d = JSON.parse(e.data);
      if(d.type === 'score_change'){
        const row = document.querySelector(`tr[data-sym="${d.sym}"]`);
        if(row){ row.classList.remove('flash-improve','flash-degrade'); void row.offsetWidth; row.classList.add(d.direction==='improved'?'flash-improve':'flash-degrade'); }
        const r = scanData.find(x=>x.sym===d.sym);
        if(r && d.curr_bias) r.bias = d.curr_bias;
        renderTable();
      } else if(d.type === 'alert_rule_triggered'){
        // Flash notification
        const n=document.createElement('div');
        n.style.cssText='position:fixed;bottom:20px;inset-inline-end:20px;background:rgba(61,142,255,.9);color:#fff;padding:10px 14px;border-radius:8px;font-size:12px;font-weight:600;z-index:999;max-width:280px;box-shadow:0 4px 12px rgba(0,0,0,.4)';
        n.textContent=`📋 ${d.ruleName}: ${d.name} — ${d.bias}`;
        document.body.appendChild(n);
        setTimeout(()=>n.remove(),5000);
        // Update score history after scan
        fetch('/api/score-history').then(r=>r.json()).then(h=>{scoreHistory=h;renderTable();}).catch(()=>{});
      } else if(d.type === 'auto_scan_starting'){
        const pill=document.getElementById('auto-scan-pill');
        if(pill){ pill.style.display='inline-flex'; pill.classList.add('as-fired'); document.getElementById('auto-scan-pill-text').textContent=`Auto-scan: ${d.slot} running…`; }
        const nt=document.createElement('div');
        nt.style.cssText='position:fixed;bottom:20px;inset-inline-end:20px;background:rgba(0,200,255,.9);color:#000;padding:10px 14px;border-radius:8px;font-size:12px;font-weight:600;z-index:999;max-width:280px;box-shadow:0 4px 12px rgba(0,0,0,.4)';
        nt.textContent=`🤖 Auto-scan: ${d.slot} starting…`;
        document.body.appendChild(nt); setTimeout(()=>nt.remove(),4000);
      } else if(d.type === 'scan_complete'){
        // Show/hide quick scan integrity warning
        const banner=document.getElementById('quick-scan-banner');
        if(banner){
          if(d.quickScan&&d.quickSkipped>0){
            document.getElementById('quick-scan-skipped').textContent=d.quickSkipped;
            banner.style.display='block';
          } else {
            banner.style.display='none'; // Full scan — banner not needed
          }
        }
        fetch('/api/scan/results').then(r=>r.json()).then(sr=>{
          if(sr.results?.length){
            scanData=sr.results; renderTable(); renderWatchlistPanel();
            if(openDrawerData){ const fresh=scanData.find(x=>x.sym===openDrawerData.sym); if(fresh){openDrawerData=fresh;buildSignalTab(fresh);buildTradeTab(fresh);} }
          }
        });
        fetch('/api/score-history').then(r=>r.json()).then(h=>{scoreHistory=h;renderTable();}).catch(()=>{});
        loadAutoScanStatus();
        // Silently refresh presignal badge count
        fetch('/api/scan/presignal').then(r=>r.json()).then(d=>{
          const badge=document.getElementById('presignal-badge');
          if(!badge) return;
          const n=d.presignal?.length||0;
          const exits=(d.presignal||[]).filter(s=>s.approaching==='EXIT_RISK').length;
          if(n>0){badge.textContent=exits>0?exits:n;badge.style.display='inline-block';}
          else{badge.style.display='none';}
          // If panel is visible, refresh it
          const panel=document.getElementById('presignal-panel');
          if(panel&&panel.style.display!=='none') loadPreSignal();
        }).catch(()=>{});
        // Auto-refresh Markets after every full scan
        if (!d.quickScan) {
          loadMarketsPanel(true);
        }
      } else if(d.type === 'live_stopped'){
        liveActive=false; updateLiveBtn();
      }
    }catch(_){}
  };
  eventSource.onerror = () => { eventSource?.close(); eventSource=null; };
}

function updateLiveBtn(){
  const btn=document.getElementById('btn-live');
  const lbl=document.getElementById('btn-live-label');
  if(!btn||!lbl) return;
  btn.classList.toggle('live-active', liveActive);
  lbl.textContent = liveActive ? `${t('liveOn')} ${liveIntervalVal}${t('liveMin')}` : t('liveOff');
}

let liveIntervalVal = 10;
async function toggleLiveMode(){
  if(!liveActive){
    const i = parseInt(prompt(`Scan every X minutes? (5, 10, 15, 30)`, '10') || '10');
    liveIntervalVal = isNaN(i) ? 10 : Math.max(5, Math.min(60, i));
    await fetch('/api/live/start',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({interval:liveIntervalVal})});
    liveActive=true; connectSSE();
  } else {
    await fetch('/api/live/stop',{method:'POST'});
    liveActive=false;
  }
  updateLiveBtn();
}

// ── Backtest ──────────────────────────────────────────────────────────────────
// ── Backtest state ──────────────────────────────────────────────────────────
let _btSym = null, _btMinScore = 7, _btHoldBars = 40;

function btParamControls() {
  return `<div style="display:flex;gap:6px;align-items:center;flex-wrap:wrap;padding:6px 0 8px">
    <span style="font-size:10px;color:var(--text3)">Min Score</span>
    ${[5,6,7].map(v=>`<button onclick="setBtParam('minScore',${v})" id="bt-ms-${v}"
      style="font-size:10px;padding:2px 7px;border-radius:4px;border:1px solid var(--border2);
      background:${_btMinScore===v?'var(--accent)':'var(--bg2)'};color:${_btMinScore===v?'#fff':'var(--text2)'};cursor:pointer">${v}</button>`).join('')}
    <span style="font-size:10px;color:var(--text3);margin-inline-start:6px">Hold</span>
    ${[20,40,60].map(v=>`<button onclick="setBtParam('holdBars',${v})" id="bt-hb-${v}"
      style="font-size:10px;padding:2px 7px;border-radius:4px;border:1px solid var(--border2);
      background:${_btHoldBars===v?'var(--accent)':'var(--bg2)'};color:${_btHoldBars===v?'#fff':'var(--text2)'};cursor:pointer">${v}d</button>`).join('')}
    <button onclick="runSweep('${_btSym||''}')" style="margin-inline-start:auto;font-size:10px;padding:2px 8px;border-radius:4px;border:1px solid var(--border2);background:var(--bg2);color:var(--text2);cursor:pointer">⚡ Sweep</button>
  </div>`;
}

function setBtParam(key, val) {
  if (key === 'minScore') _btMinScore = val;
  else _btHoldBars = val;
  if (_btSym) runBacktestInDrawer(_btSym);
}

function renderEquity(equity, w=300, h=60) {
  if (!equity || equity.length < 2) return '';
  const min=Math.min(...equity), max=Math.max(...equity), range=max-min||1;
  const pts=equity.map((v,i)=>`${Math.round(i/(equity.length-1)*(w-1))},${Math.round(h-1-(v-min)/range*(h-1))}`).join(' ');
  const col=equity.at(-1)>=100?'var(--green)':'#ff5252';
  const baseY=Math.round(h-1-(100-min)/range*(h-1));
  return `<svg viewBox="0 0 ${w} ${h}" class="bt-equity" preserveAspectRatio="none">
    <polyline points="${pts}" fill="none" stroke="${col}" stroke-width="1.5"/>
    <line x1="0" y1="${baseY}" x2="${w}" y2="${baseY}" stroke="var(--border2)" stroke-dasharray="3,3"/>
  </svg>`;
}

function renderBtStats(stats, barCount) {
  const c = (v,g,y)=>v>=g?'var(--green)':v>=y?'var(--yellow)':'#ff5252';
  const pf = stats.profitFactor!=null ? stats.profitFactor+'×' : 'N/A';
  const sh = stats.sharpe!=null ? stats.sharpe.toFixed(2) : 'N/A';
  const dd = stats.maxDrawdown!=null ? '-'+stats.maxDrawdown+'%' : 'N/A';
  const dataLine = barCount ? `<div style="font-size:9px;color:var(--text3);margin-bottom:4px">${barCount} bars · ${Math.round(barCount/252)} yrs · 0.35% commission · open entry</div>` : '';
  return dataLine + `<div class="bt-stats" style="grid-template-columns:repeat(4,1fr)">
    <div class="bt-stat"><div class="bt-stat-val">${stats.total}</div><div class="bt-stat-lbl">Trades</div></div>
    <div class="bt-stat"><div class="bt-stat-val" style="color:${c(stats.winRate,55,45)}">${stats.winRate}%</div><div class="bt-stat-lbl">Win Rate</div></div>
    <div class="bt-stat"><div class="bt-stat-val" style="color:${stats.avgReturn>=0?'var(--green)':'#ff5252'}">${stats.avgReturn>0?'+':''}${stats.avgReturn}%</div><div class="bt-stat-lbl">Avg Return</div></div>
    <div class="bt-stat"><div class="bt-stat-val">${pf}</div><div class="bt-stat-lbl">Prof. Factor</div></div>
    <div class="bt-stat"><div class="bt-stat-val" style="color:${dd==='-0%'||dd==='N/A'?'var(--text2)':'#ff5252'}">${dd}</div><div class="bt-stat-lbl">Max DD</div></div>
    <div class="bt-stat"><div class="bt-stat-val">${sh}</div><div class="bt-stat-lbl">Sharpe</div></div>
    <div class="bt-stat"><div class="bt-stat-val" style="color:var(--green)">${stats.maxWinStreak}W</div><div class="bt-stat-lbl">Best Streak</div></div>
    <div class="bt-stat"><div class="bt-stat-val" style="color:#ff5252">${stats.maxLossStreak}L</div><div class="bt-stat-lbl">Worst Streak</div></div>
  </div>`;
}

function renderBtTrades(trades) {
  if (!trades?.length) return '';
  return `<div style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.4px;color:var(--text3);margin-bottom:4px">Recent Trades</div>`+
    [...trades].reverse().slice(0,5).map(tr=>`<div class="bt-trade">
      <span class="${tr.pct>=0?'bt-win':'bt-loss'}">${tr.pct>=0?'+':''}${tr.pct}%</span>
      <span style="color:var(--text2)">${tr.date}</span>
      <span class="bt-outcome">${tr.outcome}${tr.trailed?' 🎯':''}</span>
      <span style="margin-inline-start:auto;color:var(--text3)">${tr.bars_held}d · ${tr.score}/8</span>
    </div>`).join('');
}

async function runBacktestInDrawer(sym) {
  const el = document.getElementById('drawer-bt');
  if (!el) return;
  _btSym = sym;
  el.innerHTML = btParamControls() + `<div style="padding:16px;text-align:center;font-size:12px;color:var(--text3)">Fetching 2000 bars from Yahoo…</div>`;
  try {
    const r = await fetch('/api/backtest', { method:'POST', headers:{'Content-Type':'application/json'},
      body: JSON.stringify({ sym, minScore: _btMinScore, holdBars: _btHoldBars }) }).then(x => x.json());
    if (r.error) { el.innerHTML = btParamControls() + `<div style="padding:6px;font-size:11px;color:var(--red)">${r.error}</div>`; return; }
    el.innerHTML = btParamControls() + renderBtStats(r.stats, r.barCount) + renderEquity(r.equity) + renderBtTrades(r.trades);
  } catch(e) { el.innerHTML = btParamControls() + `<div style="padding:6px;font-size:11px;color:var(--red)">${e.message}</div>`; }
}

async function runSweep(sym) {
  if (!sym) return;
  const el = document.getElementById('drawer-bt');
  if (!el) return;
  el.innerHTML = btParamControls() + `<div style="padding:16px;text-align:center;font-size:12px;color:var(--text3)">Running 9-combo sweep…</div>`;
  try {
    const r = await fetch('/api/backtest/sweep', { method:'POST', headers:{'Content-Type':'application/json'},
      body: JSON.stringify({ sym }) }).then(x => x.json());
    if (r.error) { el.innerHTML = btParamControls() + `<div style="padding:6px;font-size:11px;color:var(--red)">${r.error}</div>`; return; }
    const rows = r.sweep.map((s,i)=>`<tr style="background:${i===0?'rgba(61,139,255,.08)':''}">
      <td style="padding:4px 6px;font-weight:${i===0?700:400}">${s.minScore}</td>
      <td style="padding:4px 6px">${s.holdBars}d</td>
      <td style="padding:4px 6px;color:${s.winRate>=55?'var(--green)':s.winRate>=45?'var(--yellow)':'#ff5252'}">${s.winRate}%</td>
      <td style="padding:4px 6px;color:${s.avgReturn>=0?'var(--green)':'#ff5252'}">${s.avgReturn>0?'+':''}${s.avgReturn}%</td>
      <td style="padding:4px 6px">${s.profitFactor!=null?s.profitFactor+'×':'—'}</td>
      <td style="padding:4px 6px;color:#ff5252">-${s.maxDrawdown}%</td>
      <td style="padding:4px 6px;color:var(--text3)">${s.total}</td>
    </tr>`).join('');
    const sweepHtml = `<div style="font-size:10px;color:var(--text3);margin:6px 0 4px">⚡ Parameter Sweep — ${r.barCount} bars · sorted by profit factor · 🟣 = best</div>
    <div style="overflow-x:auto"><table style="width:100%;border-collapse:collapse;font-size:11px">
      <thead><tr style="color:var(--text3);font-size:10px;text-transform:uppercase">
        <th style="padding:4px 6px;text-align:left">Score</th><th style="padding:4px 6px;text-align:left">Hold</th>
        <th style="padding:4px 6px;text-align:left">Win%</th><th style="padding:4px 6px;text-align:left">Avg</th>
        <th style="padding:4px 6px;text-align:left">PF</th><th style="padding:4px 6px;text-align:left">MaxDD</th>
        <th style="padding:4px 6px;text-align:left">N</th>
      </tr></thead><tbody>${rows}</tbody>
    </table></div>
    <div style="margin-top:6px"><button onclick="setBtParam('minScore',${r.sweep[0]?.minScore||7});setBtParam('holdBars',${r.sweep[0]?.holdBars||40})"
      style="font-size:10px;padding:2px 8px;border-radius:4px;border:1px solid var(--accent);background:var(--bg2);color:var(--accent);cursor:pointer">
      Apply Best Params (Score ${r.sweep[0]?.minScore}, Hold ${r.sweep[0]?.holdBars}d)
    </button></div>`;
    el.innerHTML = btParamControls() + sweepHtml;
  } catch(e) { el.innerHTML = btParamControls() + `<div style="padding:6px;font-size:11px;color:var(--red)">${e.message}</div>`; }
}

async function runPortfolioBt() {
  const el  = document.getElementById('port-bt-result');
  const btn = document.getElementById('port-bt-btn');
  if (!el) return;
  if (btn) { btn.textContent = '…'; btn.disabled = true; }
  el.innerHTML = `<div style="color:var(--text3)">Fetching 2000 bars for up to 30 TASI stocks… this takes ~60s</div>`;
  try {
    const r = await fetch('/api/backtest/portfolio', { method:'POST', headers:{'Content-Type':'application/json'},
      body: JSON.stringify({ market: state?.scan?.currentMarket || 'tasi', minScore: 6, holdBars: 40, maxPositions: 5 }) }).then(x => x.json());
    if (r.error) { el.innerHTML = `<div style="color:var(--red)">${r.error}</div>`; return; }
    const s = r.stats;
    const retCol = s.totalReturn >= 0 ? 'var(--green)' : '#ff5252';
    el.innerHTML = `
      <div class="bt-stats" style="grid-template-columns:repeat(4,1fr);margin-bottom:6px">
        <div class="bt-stat"><div class="bt-stat-val">${s.symbols}</div><div class="bt-stat-lbl">Stocks</div></div>
        <div class="bt-stat"><div class="bt-stat-val">${s.totalTrades}</div><div class="bt-stat-lbl">Trades</div></div>
        <div class="bt-stat"><div class="bt-stat-val" style="color:${s.winRate>=55?'var(--green)':s.winRate>=45?'var(--yellow)':'#ff5252'}">${s.winRate}%</div><div class="bt-stat-lbl">Win Rate</div></div>
        <div class="bt-stat"><div class="bt-stat-val" style="color:${retCol}">${s.totalReturn>0?'+':''}${s.totalReturn}%</div><div class="bt-stat-lbl">Total Return</div></div>
        <div class="bt-stat"><div class="bt-stat-val">${s.capitalEnd?.toLocaleString()} SAR</div><div class="bt-stat-lbl">End Capital</div></div>
        <div class="bt-stat"><div class="bt-stat-val" style="color:#ff5252">-${s.maxDrawdown}%</div><div class="bt-stat-lbl">Max DD</div></div>
        <div class="bt-stat"><div class="bt-stat-val">${s.sharpe!=null?s.sharpe.toFixed(2):'N/A'}</div><div class="bt-stat-lbl">Sharpe</div></div>
        <div class="bt-stat"><div class="bt-stat-val">${s.avgReturn>0?'+':''}${s.avgReturn}%</div><div class="bt-stat-lbl">Avg/Trade</div></div>
      </div>
      ${renderEquity(r.equity, 400, 70)}
      <div style="font-size:9px;color:var(--text3);margin-top:4px">${r.symbolsFetched} stocks · 100K SAR start · max 5 positions · score≥6 · hold 40d · 0.35% commission</div>`;
  } catch(e) { el.innerHTML = `<div style="color:var(--red)">${e.message}</div>`; }
  finally { if (btn) { btn.textContent = '▶ Run'; btn.disabled = false; } }
}

// ── Calendar ──────────────────────────────────────────────────────────────────
const calCache={};
async function fetchCalendar(sym){
  if(calCache[sym]!==undefined) return calCache[sym];
  try{
    const r=await fetch('/api/calendar?sym='+encodeURIComponent(sym)).then(x=>x.json());
    calCache[sym]=r.event||null;
    return calCache[sym];
  }catch(_){ calCache[sym]=null; return null; }
}

function calBadgeHtml(event){
  if(!event) return'';
  const days=Math.round((new Date(event.date)-Date.now())/864e5);
  if(days<0||days>35) return'';
  const urgent=days<=7;
  const when=days===0?'today':days===1?'tomorrow':`in ${days}d`;
  const hour=event.hour==='bmo'?'pre-mkt':event.hour==='amc'?'after-close':'';
  return`<span class="cal-badge${urgent?' urgent':''}" title="Earnings ${event.date} ${hour}">📅 ${t('calEarnings')} ${when}</span>`;
}

// Catalyst risk flags (validated "don't buy now" signals: debt/earnings/management).
// Bulk-loaded once; defensive entry-timing warning, not alpha.
const riskCache={}; let _riskLoaded=false;
async function loadRiskFlags(){
  try{
    const r=await fetch('/api/catalyst/risks').then(x=>x.json());
    Object.keys(riskCache).forEach(k=>delete riskCache[k]);
    Object.assign(riskCache, r.flags||{});
  }catch(_){}
  _riskLoaded=true;
}
function riskBadgeHtml(flags){
  if(!flags||!flags.length) return'';
  const notes=flags.map(f=>'• '+f.note+' ('+f.date+')').join('\n');
  return`<span class="risk-badge" title="Catalyst risk — avoid a fresh entry right now:\n${notes}" style="font-size:8.5px;font-weight:700;padding:1px 6px;border-radius:10px;background:#ff525222;color:#ff5252;border:1px solid #ff525244;margin-inline-start:4px;cursor:help">⚠ Risk</span>`;
}

// ── Trade journal / analytics ─────────────────────────────────────────────────
function closeTrade(sym){
  const tr=document.querySelector(`.pos-close-row[data-sym="${sym}"]`);
  if(tr){ tr.remove(); return; }
  const tbody=document.getElementById('positions-body');
  const row=tbody.querySelector(`tr[data-pos-sym="${sym}"]`);
  if(!row) return;
  const form=document.createElement('tr');
  form.className='pos-close-row'; form.setAttribute('data-sym',sym);
  form.innerHTML=`<td colspan="8"><div class="close-trade-form">
    <span style="font-weight:700;color:var(--accent)">${tickerDisplay(sym)}</span>
    <input id="close-price-${sym}" class="add-criteria-input" style="max-width:90px" placeholder="${t('closePrice')}" type="number" step="0.01">
    <input id="close-date-${sym}"  class="add-criteria-input" style="max-width:110px" type="date" value="${new Date().toISOString().split('T')[0]}">
    <select id="close-reason-${sym}" class="add-criteria-input" style="max-width:110px">
      <option value="target1">${t('closeReasonT1')}</option>
      <option value="target2">${t('closeReasonT2')}</option>
      <option value="stop">${t('closeReasonStop')}</option>
      <option value="manual">${t('closeReasonManual')}</option>
    </select>
    <button class="btn btn-success" style="font-size:11px" onclick="confirmCloseTrade('${sym}')">${t('closeConfirm')}</button>
    <button class="btn btn-secondary" style="font-size:11px" onclick="closeTrade('${sym}')">${t('clearSel')}</button>
  </div></td>`;
  row.after(form);
}

function confirmCloseTrade(sym){
  const exitPrice=parseFloat(document.getElementById(`close-price-${sym}`)?.value||'0');
  const exitDate=document.getElementById(`close-date-${sym}`)?.value||'';
  const exitReason=document.getElementById(`close-reason-${sym}`)?.value||'manual';
  if(!exitPrice) return;
  const pos=positionsData[sym];
  if(!pos) return;
  const pct=(exitPrice-pos.entry_price)/pos.entry_price*100;
  const key=sym+'_'+Date.now();
  if(!positionsData._closed) positionsData._closed={};
  positionsData._closed[key]={...pos,exit_price:exitPrice,exit_date:exitDate,exit_reason:exitReason,pct:Math.round(pct*100)/100,status:'closed'};
  delete positionsData[sym];
  savePositionsToServer();
  renderPositionsPanel();
  renderTable();
}

function computeTradeAnalytics(){
  const closed=Object.values(positionsData._closed||{});
  if(!closed.length) return null;
  const wins=closed.filter(t=>t.pct>0);
  const losses=closed.filter(t=>t.pct<=0);
  const winRate=Math.round(wins.length/closed.length*100);
  const avgWin=wins.length?Math.round(wins.reduce((s,t)=>s+t.pct,0)/wins.length*100)/100:0;
  const avgLoss=losses.length?Math.round(losses.reduce((s,t)=>s+t.pct,0)/losses.length*100)/100:0;
  const pf=losses.length&&avgLoss?Math.round(Math.abs(avgWin*wins.length/(avgLoss*losses.length))*100)/100:null;
  // Equity curve
  let cum=100; const equity=closed.map(t=>{cum*=(1+t.pct/100);return Math.round(cum*100)/100;});
  return{closed,winRate,avgWin,avgLoss,pf,equity};
}

function renderTradeAnalytics(){
  const el=document.getElementById('pos-analytics');
  const grid=document.getElementById('analytics-grid');
  const svg=document.getElementById('analytics-equity');
  if(!el||!grid) return;
  const an=computeTradeAnalytics();
  if(!an||!an.closed.length){el.style.display='none';return;}
  el.style.display='block';
  const winCol=an.winRate>=55?'var(--green)':an.winRate>=45?'var(--yellow)':'#ff5252';
  grid.innerHTML=`
    <div class="an-stat"><div class="an-val" style="color:${winCol}">${an.winRate}%</div><div class="an-lbl">${t('anWinRate')}</div></div>
    <div class="an-stat"><div class="an-val" style="color:var(--green)">+${an.avgWin}%</div><div class="an-lbl">${t('anAvgWin')}</div></div>
    <div class="an-stat"><div class="an-val" style="color:#ff5252">${an.avgLoss}%</div><div class="an-lbl">${t('anAvgLoss')}</div></div>
    <div class="an-stat"><div class="an-val">${an.pf!=null?an.pf+'×':'—'}</div><div class="an-lbl">${t('anPF')}</div></div>`;
  if(svg&&an.equity.length>1){
    const w=400,h=70,min=Math.min(...an.equity),max=Math.max(...an.equity),range=max-min||1;
    const pts=an.equity.map((v,i)=>`${Math.round(i/(an.equity.length-1)*(w-1))},${Math.round(h-1-(v-min)/range*(h-1))}`).join(' ');
    const col=an.equity[an.equity.length-1]>=100?'var(--green)':'#ff5252';
    svg.setAttribute('viewBox',`0 0 ${w} ${h}`);
    svg.innerHTML=`<polyline points="${pts}" fill="none" stroke="${col}" stroke-width="1.5"/><line x1="0" y1="${Math.round(h-1-(100-min)/range*(h-1))}" x2="${w}" y2="${Math.round(h-1-(100-min)/range*(h-1))}" stroke="var(--border2)" stroke-dasharray="3,3"/>`;
  }
}

// ── Mode toggle ──────────────────────────────────────────────────────────────
function setMode(mode, btn){
  scanMode=mode;
  localStorage.setItem('mawjah-mode', mode);
  applyModeUI();
  renderTable();
}
function applyModeUI(){
  ['swing','position','breakout'].forEach(m => {
    const el=document.getElementById('mode-'+m);
    if(el) el.classList.toggle('active', scanMode===m);
  });
  const pill=document.getElementById('mode-ctx-pill');
  if(pill){
    const labels={swing:'Swing Trading',position:'Position Investing',breakout:'Breakout Hunting'};
    const classes={swing:'swing',position:'position',breakout:'breakout'};
    pill.textContent=labels[scanMode]||scanMode;
    pill.className='mode-ctx-pill '+(classes[scanMode]||'swing');
  }
}

// ── Weekly badge ─────────────────────────────────────────────────────────────
function weeklyBadgeHtml(r){
  if(scanMode!=='position') return`<span class="wb wb-na">${t('wNa')}</span>`;
  if(!r.weekly) return`<span class="wb wb-na">${t('wNa')}</span>`;
  const {score}=r.weekly;
  if(score===4) return`<span class="wb wb-full">${t('wFull')}</span>`;
  if(score===2) return`<span class="wb wb-partial">${t('wPartial')}</span>`;
  return`<span class="wb wb-none">${t('wNone')}</span>`;
}

// ── Position P&L badge ───────────────────────────────────────────────────────
function positionBadgeHtml(sym, scanPrice){
  const pos=positionsData[sym];
  if(!pos || !scanPrice) return'';
  const pct=(scanPrice-pos.entry_price)/pos.entry_price*100;
  const cls=pct>=0?'pos-gain':'pos-loss';
  const sign=pct>=0?'+':'';
  return`<span class="pos-badge ${cls}" title="${t('posEntry')}: ${pos.entry_price}">${sign}${pct.toFixed(1)}%</span>`;
}

// ── CSV export ───────────────────────────────────────────────────────────────
function exportCsv(){
  const rows=getVisibleRows();
  const maxS=rows.find(r=>r.maxScore>8)?.maxScore||9;
  const headers=[
    'Symbol','Name','Market','Sector','Price','Score','Max Score','Score %','Bias',
    'RSI','MACD Hist','Vol Ratio','ATR','RS Score',
    'Hurst','Hurst State','ATR Rank %','ATR Regime',
    'VWAP 20d','Above VWAP',
    'EMA13','EMA34','EMA89','EMA200',
    'Sharia','Weekly Score',
    'Bullish Flags','Warnings'
  ];
  const hurstState=h=>h==null?'':h>0.55?'Trending':h<0.45?'Mean-Rev':'Random';
  const atrRegime=p=>p==null?'':p>=80?'Expanded/Volatile':p<=20?'Compressed/Coiling':'Normal';
  const lines=rows.map(r=>[
    r.sym, r.name, marketOf(r.sym), sectorLabel(sectorOf(r.sym)),
    r.price?.toFixed(2)||'', r.score, r.maxScore||maxS,
    r.score&&(r.maxScore||maxS)?Math.round(r.score/(r.maxScore||maxS)*100)+'%':'',
    r.bias,
    r.rsi?.toFixed(1)||'', r.macd_hist?.toFixed(4)||'', r.vol_ratio||'',
    r.atr?.toFixed(4)||'', r.rs_score?.toFixed(2)||'',
    r.hurst?.toFixed(2)||'', hurstState(r.hurst),
    r.atr_pct_rank??'', atrRegime(r.atr_pct_rank),
    r.vwap20?.toFixed(2)||'', r.above_vwap!=null?(r.above_vwap?'Yes':'No'):'',
    r.emas?.ema13?.toFixed(2)||'', r.emas?.ema34?.toFixed(2)||'',
    r.emas?.ema89?.toFixed(2)||'', r.emas?.ema200?.toFixed(2)||'',
    shariaMap[r.sym]?.status||'unknown', r.weekly?.score??'',
    (r.flags||[]).join('; '), (r.warnings||[]).join('; ')
  ].map(v=>`"${String(v??'').replace(/"/g,'""')}"`).join(','));
  const csv=[headers.join(','), ...lines].join('\n');
  const a=document.createElement('a');
  a.href=URL.createObjectURL(new Blob(['﻿'+csv],{type:'text/csv;charset=utf-8'}));
  a.download=`mawjah-${new Date().toISOString().split('T')[0]}-${scanMode}.csv`;
  a.click();
}

// ── Positions management ─────────────────────────────────────────────────────
async function loadPositionsPanel(){
  try{ const r=await fetch('/api/positions'); positionsData=await r.json(); }catch(_){}
  renderPositionsPanel();
}

function renderPositionsPanel(){
  const tbody=document.getElementById('positions-body');
  const summaryEl=document.getElementById('positions-summary');
  if(!tbody) return;
  // Open risk bar
  const riskEl=document.getElementById('open-risk-bar');
  if(riskEl){
    const balance=settingsData?.account_balance||100000;
    const openEntries=Object.values(positionsData).filter(p=>p.sym&&!p.sym.startsWith('_'));
    if(openEntries.length){
      const totalInvested=openEntries.reduce((a,p)=>{const s=scanData.find(x=>x.sym===p.sym);const px=s?.price||p.entry_price;return a+(px*(p.shares||0));},0);
      const pct=Math.min(totalInvested/balance*100,100);
      const col=pct>80?'#ff5252':pct>50?'var(--yellow)':'var(--green)';
      const maxRiskPct=settingsData?.risk_percent?settingsData.risk_percent*openEntries.length:null;
      riskEl.innerHTML=`<div class="risk-bar-container">
        <div class="risk-bar-header">
          <span class="risk-bar-title">Portfolio Exposure</span>
          <span class="risk-bar-pct" style="color:${col}">${pct.toFixed(1)}%</span>
        </div>
        <div class="risk-bar-track"><div class="risk-bar-fill" style="width:${pct}%;background:${col}"></div></div>
        <div class="risk-stats-row">
          <div class="risk-stat-item">Invested: <span>${totalInvested.toLocaleString('en-US',{maximumFractionDigits:0})}</span></div>
          <div class="risk-stat-item">Balance: <span>${balance.toLocaleString('en-US',{maximumFractionDigits:0})}</span></div>
          <div class="risk-stat-item">Positions: <span>${openEntries.length}</span></div>
          ${maxRiskPct!=null?`<div class="risk-stat-item" style="${maxRiskPct>10?'color:#ff5252':''}">Max risk/trade × count: <span>${maxRiskPct.toFixed(1)}%</span></div>`:''}
        </div>
      </div>`;
      riskEl.style.display='block';
    } else { riskEl.style.display='none'; }
  }
  const entries=Object.values(positionsData);
  if(!entries.length){
    tbody.innerHTML=`<tr><td colspan="8" style="padding:30px;text-align:center;color:var(--text3);font-size:12px">${t('posEmpty')}</td></tr>`;
    if(summaryEl) summaryEl.style.display='none';
    return;
  }
  let totalPnlPct=0, posCount=0;
  tbody.innerHTML=entries.map(pos=>{
    const scanRow=scanData.find(r=>r.sym===pos.sym);
    const scanP=scanRow?.price;
    const pct=scanP?(scanP-pos.entry_price)/pos.entry_price*100:null;
    const pnlCls=pct==null?'':pct>=0?'pos-pnl-pos':'pos-pnl-neg';
    const pnlStr=pct==null?'—':`${pct>=0?'+':''}${pct.toFixed(2)}%`;
    const pnlVal=pct!=null&&pos.shares?`${(pct/100*pos.entry_price*pos.shares).toFixed(0)}`:'';
    if(pct!=null){totalPnlPct+=pct;posCount++;}
    const ticker=tickerDisplay(pos.sym);
    return`<tr data-pos-sym="${pos.sym}">
      <td class="td-ticker">${ticker}</td>
      <td>${pos.name||ticker}</td>
      <td style="font-family:monospace">${pos.entry_price}</td>
      <td style="font-family:monospace">${scanP?.toFixed(2)||'—'}</td>
      <td class="${pnlCls}" style="font-family:monospace;font-weight:700">${pnlStr} ${pnlVal?`<span style="font-size:10px;opacity:.7">(${pnlVal})</span>`:''}</td>
      <td>${pos.shares||'—'}</td>
      <td style="color:var(--text3)">${pos.date||'—'}</td>
      <td style="display:flex;gap:4px">
        <button class="btn btn-secondary" style="font-size:10px;padding:2px 7px" onclick="closeTrade('${pos.sym}')">${t('closeTrade')}</button>
        <button class="pos-del-btn" onclick="removePosition('${pos.sym}')">✕</button>
      </td>
    </tr>`;
  }).join('');
  if(summaryEl && posCount){
    const avg=totalPnlPct/posCount;
    summaryEl.innerHTML=`<span style="color:var(--text2)">${posCount} ${posCount===1?'position':'positions'}</span><span class="${avg>=0?'pos-pnl-pos':'pos-pnl-neg'}" style="font-weight:700">${avg>=0?'+':''}${avg.toFixed(2)}% avg P&L</span>`;
    summaryEl.style.display='flex';
  }
  // Closed trades section
  const closed=Object.values(positionsData._closed||{});
  if(closed.length){
    const closedHtml=closed.slice(-10).reverse().map(pos=>{
      const pnlCls=pos.pct>=0?'pos-pnl-pos':'pos-pnl-neg';
      return`<tr>
        <td class="td-ticker">${tickerDisplay(pos.sym)}</td>
        <td>${pos.name||pos.sym}</td>
        <td style="font-family:monospace">${pos.entry_price}</td>
        <td style="font-family:monospace">${pos.exit_price}</td>
        <td class="${pnlCls}" style="font-family:monospace;font-weight:700">${pos.pct>=0?'+':''}${pos.pct}%</td>
        <td>${pos.shares||'—'}</td>
        <td style="color:var(--text3)">${pos.exit_date||'—'}</td>
        <td style="color:var(--text3);font-size:10px">${pos.exit_reason||'—'}</td>
      </tr>`;
    }).join('');
    tbody.innerHTML+=`<tr><td colspan="8" class="journal-section">${t('closeTrade')}d</td></tr>`+closedHtml;
  }
  renderTradeAnalytics();
  renderHeatMap();
  setTimeout(addDividendBadges, 300);
}

function addPosition(){
  const sym=(document.getElementById('pos-sym')?.value||'').trim().toUpperCase();
  const entry=parseFloat(document.getElementById('pos-entry')?.value||'');
  const shares=parseFloat(document.getElementById('pos-shares')?.value||'');
  const date=document.getElementById('pos-date')?.value||'';
  if(!sym||isNaN(entry)) return;
  const scanRow=scanData.find(r=>r.sym===sym||tickerDisplay(r.sym)===sym);
  const fullSym=scanRow?.sym||sym;
  positionsData[fullSym]={sym:fullSym,name:scanRow?.name||sym,entry_price:entry,shares:isNaN(shares)?null:shares,date};
  document.getElementById('pos-sym').value='';
  document.getElementById('pos-entry').value='';
  document.getElementById('pos-shares').value='';
  savePositionsToServer();
  renderPositionsPanel();
  renderTable();
}

function removePosition(sym){
  delete positionsData[sym];
  savePositionsToServer();
  renderPositionsPanel();
  renderTable();
}

async function savePositionsToServer(){
  try{ await fetch('/api/positions',{method:'PUT',headers:{'Content-Type':'application/json'},body:JSON.stringify(positionsData)}); }catch(_){}
}

// ── Telegram settings ────────────────────────────────────────────────────────
async function loadTelegramSettings(){
  try{ const r=await fetch('/api/settings'); settingsData=await r.json(); }catch(_){}
  const tg=settingsData?.telegram||{};
  const el=id=>document.getElementById(id);
  if(el('tg-enabled'))     el('tg-enabled').checked=!!tg.enabled;
  if(el('tg-token'))       el('tg-token').value=tg.token||'';
  if(el('tg-chatid'))      el('tg-chatid').value=tg.chat_id||'';
  if(el('finnhub-token'))  el('finnhub-token').value=settingsData?.finnhub_token||'';
}

async function saveTelegram(){ await saveSettings(); }
async function saveSettings(){
  const enabled=document.getElementById('tg-enabled')?.checked||false;
  const token=(document.getElementById('tg-token')?.value||'').trim();
  const chat_id=(document.getElementById('tg-chatid')?.value||'').trim();
  const finnhub_token=(document.getElementById('finnhub-token')?.value||'').trim();
  settingsData={...settingsData, telegram:{enabled,token,chat_id}, finnhub_token};
  try{
    await fetch('/api/settings',{method:'PUT',headers:{'Content-Type':'application/json'},body:JSON.stringify(settingsData)});
    const st=document.getElementById('tg-status');
    if(st){st.textContent=t('notifSaved');st.style.display='block';setTimeout(()=>st.style.display='none',2000);}
  }catch(_){}
}

async function testTelegram(){
  await saveTelegram();
  const btn=event.currentTarget; btn.disabled=true; btn.textContent='…';
  try{
    const r=await fetch('/api/notify/test',{method:'POST'}).then(x=>x.json());
    btn.textContent=r.ok?t('notifTestOk'):t('notifTestFail');
    btn.style.color=r.ok?'var(--green)':'var(--red)';
    setTimeout(()=>{btn.textContent=t('notifTest');btn.disabled=false;btn.style.color='';},3000);
  }catch(_){btn.textContent=t('notifTestFail');setTimeout(()=>{btn.textContent=t('notifTest');btn.disabled=false;},2000);}
}

// ── Screenshot in drawer ─────────────────────────────────────────────────────
async function viewChartScreenshot(sym){
  const el=document.getElementById('drawer-screenshot');
  if(!el) return;
  el.innerHTML=`<div style="padding:12px;text-align:center;font-size:12px;color:var(--text3)">${t('chartLoading')}</div>`;
  try{
    const r=await fetch('/api/chart/screenshot',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({sym})}).then(x=>x.json());
    if(r.success) el.innerHTML=`<img src="${r.url}?t=${Date.now()}" class="chart-screenshot" alt="Chart">`;
    else el.innerHTML=`<div style="padding:8px;font-size:11px;color:var(--red)">${r.error||'Failed'}</div>`;
  }catch(e){el.innerHTML=`<div style="padding:8px;font-size:11px;color:var(--red)">${e.message}</div>`;}
}

// ── Live price in drawer ─────────────────────────────────────────────────────
async function refreshLivePrice(sym){
  const el=document.getElementById('drawer-live-price');
  if(!el) return;
  el.innerHTML=`<span class="live-price-val">…</span>`;
  try{
    const q=await fetch('/api/quote?sym='+encodeURIComponent(sym)).then(r=>r.json());
    if(q.success){
      const p=q.last||q.close;
      const scanRow=scanData.find(r=>r.sym===sym);
      const drift=scanRow?.price&&p?((p-scanRow.price)/scanRow.price*100):null;
      const driftStr=drift!=null?` <span style="color:${drift>=0?'var(--green)':'#ff5252'};font-size:11px">${drift>=0?'+':''}${drift.toFixed(2)}% vs scan</span>`:'';
      el.innerHTML=`<span class="live-price-val">${p?.toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:2})}</span>${driftStr}`;
    } else { el.innerHTML=`<span style="color:var(--text3);font-size:11px">${q.error||'N/A'}</span>`; }
  }catch(e){el.innerHTML=`<span style="color:var(--red);font-size:11px">${e.message}</span>`;}
}

function updateBreadthBar(){
  const el=document.getElementById('breadth-container');
  if(!el) return;
  const rows=getVisibleRows().filter(r=>r.bias!=='ERROR'&&r.bias!=='NO_DATA');
  if(!rows.length){el.style.display='none';return;}
  const bull=rows.filter(r=>['STRONG BUY','BUY'].includes(r.bias)).length;
  const bear=rows.filter(r=>['STRONG SELL','SELL','AVOID'].includes(r.bias)).length;
  const neu=rows.length-bull-bear;
  const bp=Math.round(bull/rows.length*100), brp=Math.round(bear/rows.length*100), np=100-bp-brp;
  document.getElementById('breadth-bull').style.width=bp+'%';
  document.getElementById('breadth-neutral').style.width=np+'%';
  document.getElementById('breadth-bear').style.width=brp+'%';
  document.getElementById('breadth-lbl-bull').textContent='▲ '+bp+'% ('+bull+')';
  document.getElementById('breadth-lbl-neutral').textContent='◆ '+np+'% ('+neu+')';
  document.getElementById('breadth-lbl-bear').textContent='▼ '+brp+'% ('+bear+')';
  document.getElementById('breadth-total').textContent=rows.length+' stocks';
  el.style.display='block';
}

function updateSectorHeatmap(){
  const el=document.getElementById('sector-heatmap');
  if(!el) return;
  const rows=getVisibleRows().filter(r=>r.bias!=='ERROR'&&r.bias!=='NO_DATA');
  if(!rows.length){el.style.display='none';return;}
  const sd={};
  rows.forEach(r=>{
    const sec=sectorOf(r.sym);
    if(!sd[sec]) sd[sec]={sum:0,n:0,bull:0,bear:0};
    sd[sec].sum+=r.score; sd[sec].n++;
    if(['STRONG BUY','BUY'].includes(r.bias)) sd[sec].bull++;
    if(['STRONG SELL','SELL','AVOID'].includes(r.bias)) sd[sec].bear++;
  });
  const entries=Object.entries(sd).filter(([,d])=>d.n>0)
    .map(([sec,d])=>({sec,avg:Math.round(d.sum/d.n*10)/10,n:d.n,bull:d.bull,bear:d.bear}))
    .sort((a,b)=>b.avg-a.avg);
  const _hmaxS = scanData.find(r=>r.maxScore>8)?.maxScore || 9;
  el.innerHTML=entries.map(({sec,avg,n,bull,bear})=>{
    const col=avg>=(_hmaxS*7/9)?'var(--green)':avg>=(_hmaxS*4/9)?'var(--yellow)':'#ff5252';
    const pct=Math.round(avg/_hmaxS*100);
    const active=filterSec===sec?' htactive':'';
    return`<div class="heat-tile${active}" onclick="filterSector('${sec}',this)">
      <div class="heat-name">${sectorLabel(sec)}</div>
      <div class="heat-score" style="color:${col}">${avg}</div>
      <div class="heat-bar-track"><div class="heat-bar-fill" style="width:${pct}%;background:${col}"></div></div>
      <div class="heat-counts"><span style="color:var(--green)">▲${bull}</span><span style="color:#ff5252">▼${bear}</span><span>${n}</span></div>
    </div>`;
  }).join('');
  el.style.display=entries.length?'flex':'none';
  updateSectorRotation();
}

// Plain-language change summary for each criterion key
const CRIT_SHORT = {
  emaStack: { gained: 'trend stack aligned',        lost: 'trend stack broken'       },
  ema200:   { gained: 'price crossed above EMA 200', lost: 'price fell below EMA 200' },
  rsi:      { gained: 'RSI entered momentum zone',   lost: 'RSI left momentum zone'   },
  macd:     { gained: 'MACD turned bullish',          lost: 'MACD turned bearish'      },
  vol:      { gained: 'volume surged',               lost: 'volume retreated'         },
  vwap:     { gained: 'price moved above VWAP',      lost: 'price dropped below VWAP' },
};
const CRIT_SHORT_BEAR = {
  emaStack: { gained: 'bearish EMA stack confirmed', lost: 'bearish stack broken'   },
  ema200:   { gained: 'price dropped below EMA 200', lost: 'price recovered EMA 200'},
  rsi:      { gained: 'RSI in weak zone',             lost: 'RSI left weak zone'     },
  macd:     { gained: 'MACD turned bearish',          lost: 'MACD turned bullish'    },
  vol:      { gained: 'volume confirmed',             lost: 'volume retreated'       },
  vwap:     { gained: 'price fell below VWAP',        lost: 'price recovered above VWAP' },
};
function buildMoverSummary(d){
  if(!d.criteria_changes||!d.criteria_changes.length){
    // No criterion changed — bias threshold crossed with same score
    return d.direction==='improved'
      ? 'Score crossed into higher signal band — same criteria, stronger reading'
      : 'Score dropped into lower signal band — conditions weakened';
  }
  const isBear=['STRONG SELL','SELL','AVOID'].includes(d.curr_bias);
  const map=isBear?CRIT_SHORT_BEAR:CRIT_SHORT;
  const gained=d.criteria_changes.filter(c=>c.now&&!c.was).map(c=>(map[c.key]||{}).gained||c.label);
  const lost  =d.criteria_changes.filter(c=>c.was&&!c.now).map(c=>(map[c.key]||{}).lost  ||c.label);
  const parts=[];
  if(gained.length) parts.push(gained.join(', '));
  if(lost.length)   parts.push((gained.length?'but ':'') + lost.join(', '));
  if(!parts.length) return '';
  const conclusion=d.direction==='improved'
    ? (d.curr_bias==='STRONG BUY'||d.curr_bias==='BUY' ? ' — strong setup forming' : d.curr_bias==='WATCH' ? ' — approaching entry zone' : ' — improving')
    : (d.curr_bias==='STRONG SELL'||d.curr_bias==='SELL'||d.curr_bias==='AVOID' ? ' — bearish signals confirmed' : d.curr_bias==='SKIP' ? ' — momentum fading' : ' — weakening');
  return parts.join(' ') + conclusion;
}

async function loadPreSignal() {
  const panel = document.getElementById('presignal-panel');
  if (!panel) return;
  panel.style.display = 'block';
  const posEl2 = document.getElementById('presignal-positive');
  const negEl2 = document.getElementById('presignal-negative');
  const loadMsg = `<div style="color:var(--text3);font-size:11px;padding:14px;text-align:center">Analysing…</div>`;
  if (posEl2) posEl2.innerHTML = loadMsg;
  if (negEl2) negEl2.innerHTML = loadMsg;
  try {
    const d = await fetch('/api/scan/presignal').then(r => r.json());

    // Update badge
    const badge = document.getElementById('presignal-badge');
    if (badge) {
      const exitCount = (d.presignal||[]).filter(s=>s.approaching==='EXIT_RISK').length;
      if (exitCount > 0) { badge.textContent = exitCount; badge.style.display='inline-block'; }
      else if (d.presignal?.length > 0) { badge.textContent = d.presignal.length; badge.style.display='inline-block'; }
      else { badge.style.display='none'; }
    }

    const posEl = document.getElementById('presignal-positive');
    const negEl = document.getElementById('presignal-negative');
    // Also keep list for backward compat
    const listEl = document.getElementById('presignal-list');

    const positiveTypes = new Set(['BUY','RECOVERY','ACCUMULATION']);
    const negativeTypes = new Set(['EXIT_RISK','SELL']);

    if (!d.presignal?.length) {
      const empty = `<div style="color:var(--text3);font-size:11px;padding:14px;text-align:center">No signals detected.<br>Run a full scan first.</div>`;
      if (posEl) posEl.innerHTML = empty;
      if (negEl) negEl.innerHTML = empty;
      if (listEl) listEl.innerHTML = '';
      return;
    }

    const catMeta = {
      EXIT_RISK:    { label:'🚨 Exit Risk',       cls:'exit_risk',    desc:'Deteriorating — consider reducing' },
      BUY:          { label:'→ Approaching BUY',  cls:'buy',          desc:'Close to a buy signal' },
      RECOVERY:     { label:'⬆ Recovering',       cls:'recovery',     desc:'Selling pressure easing' },
      ACCUMULATION: { label:'◎ Accumulation',     cls:'accumulation', desc:'Coiling — watch for breakout' },
      SELL:         { label:'→ Approaching SELL', cls:'sell',         desc:'Close to a sell signal' },
    };

    function buildRow(s) {
      const confBar = '█'.repeat(Math.round(s.confidence/2)) + '░'.repeat(5-Math.round(s.confidence/2));
      const confCol = s.confidence >= 7 ? 'var(--green)' : s.confidence >= 4 ? 'var(--orange)' : 'var(--text3)';
      const heldBadge = s.held ? `<span class="presignal-held-badge">📌</span>` : '';
      const durBadge  = s.accum_duration >= 2 ? `<span class="presignal-dur">${s.accum_duration}×</span>` : '';
      const rsiTxt    = s.rsi != null ? `RSI ${s.rsi.toFixed(0)}` : '';
      const ptsAway   = s.approaching==='BUY'?s.proximity?.pts_to_buy:s.approaching==='SELL'?s.proximity?.pts_to_sell:null;
      const ptsTxt    = ptsAway>0 ? `${ptsAway}pt` : '';
      const trendTxt  = s.trend>0.2?`↑${s.trend.toFixed(1)}`:s.trend<-0.2?`↓${s.trend.toFixed(1)}`:'';
      const detail    = [rsiTxt,ptsTxt,trendTxt].filter(Boolean).join(' · ');
      const proxBadge = ptsAway===1?'<span class="prox-badge prox-1">1 away</span>':ptsAway===2?'<span class="prox-badge prox-2">2 away</span>':ptsAway===3?'<span class="prox-badge prox-3">3 away</span>':'';
      const arName    = s.ar ? `<span style="font-size:9px;color:var(--text3)" dir="rtl">${s.ar}</span>` : '';
      const sigCol    = s.approaching==='BUY'||s.approaching==='RECOVERY'||s.approaching==='ACCUMULATION'?'var(--green)':s.approaching==='SELL'||s.approaching==='EXIT_RISK'?'var(--red)':'var(--yellow)';
      return `<div class="presignal-row" onclick="onRowClick(event,'${s.sym}')">
        <div style="flex:1;min-width:0;overflow:hidden">
          <div style="display:flex;align-items:center;gap:4px;flex-wrap:wrap">
            <strong style="font-size:11px">${tickerDisplay(s.sym)}</strong>${heldBadge}${durBadge}
            <span style="font-size:9px;color:var(--text3);font-family:'JetBrains Mono',monospace;color:${confCol}">${confBar}</span>
          </div>
          <div style="font-size:10px;color:var(--text2);white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${s.name} ${arName}</div>
          ${detail?`<div class="presignal-detail">${detail}</div>`:''}
          <div class="presignal-watch">${s.watch_for}</div>
        </div>
        <div style="display:flex;flex-direction:column;align-items:flex-end;gap:3px;flex-shrink:0;padding-inline-start:4px">
          ${proxBadge}
          <span style="font-size:10px;font-weight:700;color:${sigCol}">${s.score}/${s.maxScore}</span>
          <button onclick="event.stopPropagation();setAlertFromPresignal('${s.sym}','${s.name}',${s.score},'${s.approaching}')" style="font-size:9px;padding:1px 5px;background:rgba(61,142,255,.1);color:var(--blue);border:1px solid rgba(61,142,255,.2);border-radius:4px;cursor:pointer">🔔</button>
        </div>
      </div>`;
    }

    // Group by category, render positive and negative columns separately
    const groups = {};
    for (const s of d.presignal) {
      if (!groups[s.approaching]) groups[s.approaching] = [];
      groups[s.approaching].push(s);
    }
    // Sort each group by proximity (fewest criteria away = first)
    Object.keys(groups).forEach(cat=>{
      groups[cat].sort((a,b)=>{
        const pa=cat==='BUY'?a.proximity?.pts_to_buy:cat==='SELL'?a.proximity?.pts_to_sell:null;
        const pb=cat==='BUY'?b.proximity?.pts_to_buy:cat==='SELL'?b.proximity?.pts_to_sell:null;
        if(pa!=null&&pb!=null) return pa-pb;
        return (b.score??0)-(a.score??0);
      });
    });

    function renderColumn(types) {
      return Object.keys(catMeta)
        .filter(cat => types.has(cat) && groups[cat]?.length)
        .map(cat => {
          const m = catMeta[cat];
          const header = `<div style="padding:4px 10px;font-size:9px;font-weight:700;color:${m.cls==='buy'||m.cls==='recovery'||m.cls==='accumulation'?'var(--green)':m.cls==='exit_risk'||m.cls==='sell'?'var(--red)':'var(--text3)'};border-bottom:1px solid var(--border);background:rgba(255,255,255,.01)">${m.label}</div>`;
          return header + groups[cat].map(buildRow).join('');
        }).join('') || `<div style="color:var(--text3);font-size:11px;padding:14px;text-align:center">None</div>`;
    }

    if (posEl) posEl.innerHTML = renderColumn(positiveTypes);
    if (negEl) negEl.innerHTML = renderColumn(negativeTypes);
    if (listEl) listEl.innerHTML = '';

  } catch(e) {
    const posEl = document.getElementById('presignal-positive');
    const negEl = document.getElementById('presignal-negative');
    const errMsg = `<div style="color:var(--text3);font-size:11px;padding:14px">Error: ${e.message}</div>`;
    if (posEl) posEl.innerHTML = errMsg;
    if (negEl) negEl.innerHTML = errMsg;
  }
}

function setAlertFromPresignal(sym, name, score, approaching) {
  // Navigate to Alerts tab and pre-fill a rule
  const tabBtn = document.querySelector('.tab[onclick*="criteria"]');
  if (tabBtn) { switchTab('criteria', tabBtn); }
  setTimeout(() => {
    const symEl  = document.getElementById('rule-sym');
    const nameEl = document.getElementById('rule-name');
    if (symEl)  symEl.value  = sym;
    if (nameEl) nameEl.value = `${name} — ${approaching === 'BUY' ? 'Score≥5 BUY' : approaching === 'EXIT_RISK' ? 'Score≤4 Exit' : approaching + ' watch'}`;
    symEl?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }, 200);
}

function updateMovers(){
  const el=document.getElementById('movers-panel');
  const listEl=document.getElementById('movers-list');
  if(!el||!listEl) return;
  const mkt=activeMarket==='all'?null:activeMarket;
  const relevant=mkt?deltaData.filter(d=>marketOf(d.sym)===mkt):deltaData;
  if(!relevant.length){el.style.display='none';return;}
  const imp=relevant.filter(d=>d.direction==='improved');
  const deg=relevant.filter(d=>d.direction==='degraded');
  const impBadge=document.getElementById('movers-imp-badge');
  const degBadge=document.getElementById('movers-deg-badge');
  if(impBadge){impBadge.textContent=imp.length+' '+t('moversImp');impBadge.style.display=imp.length?'':'none';}
  if(degBadge){degBadge.textContent=deg.length+' '+t('moversDeg');degBadge.style.display=deg.length?'':'none';}
  listEl.innerHTML=relevant.slice(0,10).map(d=>{
    const dir=d.direction==='improved';
    const sign=d.score_delta>0?'+':'';
    const summary=buildMoverSummary(d);
    return`<div class="mover-row" onclick="onRowClick(event,'${d.sym}')">
      <div class="mover-top">
        <span class="mover-dir ${dir?'imp':'deg'}">${dir?'▲':'▼'}</span>
        <div class="mover-id">
          <span class="mover-ticker">${tickerDisplay(d.sym)}</span>
          <span class="mover-name">${d.name||''}</span>
        </div>
        <span class="mover-biases">${biasBadgeHtml(d.prev_bias)}<span class="mover-arr">→</span>${biasBadgeHtml(d.curr_bias)}</span>
        <span class="mover-pts ${dir?'imp':'deg'}">${sign}${d.score_delta} pts</span>
      </div>
      ${summary?`<div class="mover-summary">${summary}</div>`:''}
    </div>`;
  }).join('');
  el.style.display='block';
}

async function createAlertFromDrawer(price, label){
  const sym=openDrawerData?.sym;
  if(!sym||price==null) return;
  const btn=event.currentTarget;
  btn.disabled=true; btn.textContent='...';
  try{
    const r=await fetch('/api/alert/create',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({sym,price:parseFloat(price),message:tickerDisplay(sym)+' '+label+' @ '+parseFloat(price).toFixed(2)})}).then(x=>x.json());
    btn.textContent=r.success?t('alertSet'):t('alertFail');
    btn.style.color=r.success?'var(--green)':'var(--red)';
    setTimeout(()=>{btn.textContent=t('setAlert');btn.disabled=false;btn.style.color='';},2000);
  }catch(e){btn.textContent=t('alertFail');setTimeout(()=>{btn.textContent=t('setAlert');btn.disabled=false;},2000);}
}
function shariaHtml(sym){
  const s=shariaMap[sym];
  if(!s) return`<span class="sharia-badge sharia-unknown" title="No data">${t('sUnknown')}</span>`;
  const cls={'compliant':'sharia-compliant','non_compliant':'sharia-non-compliant','review':'sharia-review'}[s.status]||'sharia-unknown';
  const label={'compliant':t('sHalal'),'non_compliant':t('sNonHalal'),'review':t('sReview')}[s.status]||t('sUnknown');
  return`<span class="sharia-badge ${cls}" title="${s.basis}">${label}</span>`;
}
function biasBadgeHtml(bias){
  const cls={
    'STRONG BUY':'bias-strong-buy','BUY':'bias-buy','WATCH':'bias-watch',
    'SKIP':'bias-skip','ERROR':'bias-error','NO_DATA':'bias-skip',
    'STRONG SELL':'bias-strong-sell','SELL':'bias-sell','AVOID':'bias-avoid',
  }[bias]||'bias-skip';
  const icon={
    'STRONG BUY':'▲▲','BUY':'▲','WATCH':'◆','SKIP':'—','ERROR':'✗','NO_DATA':'?',
    'STRONG SELL':'▼▼','SELL':'▼','AVOID':'◆',
  }[bias]||'';
  const label={
    'STRONG BUY':t('bStrongBuy'),'BUY':t('bBuy'),'WATCH':t('bWatch'),
    'SKIP':t('bSkip'),'ERROR':t('bError'),'NO_DATA':t('bNoData'),
    'STRONG SELL':t('bStrongSell'),'SELL':t('bSell'),'AVOID':t('bAvoid'),
  }[bias]||bias;
  // Honest tooltip: this DESCRIBES current price state, it does NOT forecast or recommend.
  const tip={
    'STRONG BUY':'Strong Uptrend::Describes the current price state — trending up with momentum. NOT a forecast or buy advice. History: these scored-high names were profitable only ~37% of the time and LAGGED simple buy-and-hold. Use as context; the validated buy-list is the Momentum tab.',
    'BUY':'Uptrend::Price is in an uptrend. A description of current state, not a recommendation — the score does not predict returns (it lagged buy-and-hold in testing).',
    'WATCH':'Building::Mixed/early signals — trend not established. Descriptive only.',
    'SKIP':'Flat::No clear trend either way.',
    'AVOID':'Weak::Price showing weakness. Descriptive state, not a sell call.',
    'SELL':'Downtrend::Price is in a downtrend. NOT a short signal (no shorting on TASI) — context only.',
    'STRONG SELL':'Strong Downtrend::Price falling hard. Descriptive state, not a trade signal. You cannot short TASI, so this is context only.',
  }[bias];
  const titleAttr = tip ? ` title="${tip.replace(/"/g,'')}" style="cursor:help"` : '';
  return`<span class="bias-badge ${cls}"${titleAttr}>${icon} ${label}</span>`;
}
function emaStackHtml(r){ if(!r.emas)return'—'; const{ema13,ema34,ema89,ema200}=r.emas; return`<div class="ema-stack"><div class="ema-dot ${ema13>ema34&&ema34>ema89?'aligned':'broken'}"></div><div class="ema-dot ${r.price>ema200?'aligned':'broken'}"></div></div>`; }

// ────────────────────────────────────────────────────────────────────────────
// Render table
// ────────────────────────────────────────────────────────────────────────────
function renderTable(){
  // Always sync beginner view alongside the pro table
  renderMarketMood();
  renderBeginnerTable();
  const tbody=document.getElementById('screener-body');
  if(!scanData.length) return;
  if(!_riskLoaded){ loadRiskFlags().then(renderTable); } // load risk flags once, then re-render with badges
  let rows=getVisibleRows();
  rows.sort((a,b)=>{ const av=sortVal(a,sortKey),bv=sortVal(b,sortKey),cmp=typeof av==='string'?av.localeCompare(bv):av-bv; return sortAsc?cmp:-cmp; });
  // Update match count
  const cntEl=document.getElementById('search-match-count');
  if(cntEl){
    if(searchQuery) cntEl.textContent=rows.length?`${rows.length} of ${scanData.length} stocks`:'No matches';
    else cntEl.textContent=`${rows.length} stocks`;
  }
  // No results state
  if(!rows.length){
    tbody.innerHTML=`<tr><td colspan="17" style="text-align:center;padding:30px;color:var(--text3);font-size:13px">${
      searchQuery?`No stocks match "<strong style="color:var(--text2)">${searchQuery}</strong>" — try a different name or ticker`
      :'No stocks match current filters'}</td></tr>`;
    return;
  }
  // Pre-compute rank within each market by score (descending)
  const _rankMap = new Map();
  const _mktGroups = {};
  scanData.filter(r=>r.bias!=='ERROR'&&r.bias!=='NO_DATA').forEach(r=>{
    const m=marketOf(r.sym);
    if(!_mktGroups[m]) _mktGroups[m]=[];
    _mktGroups[m].push(r);
  });
  Object.values(_mktGroups).forEach(grp=>{
    grp.sort((a,b)=>b.score-a.score);
    grp.forEach((r,i)=>_rankMap.set(r.sym,{rank:i+1,total:grp.length}));
  });

  tbody.innerHTML=rows.map(r=>{
    const ticker=tickerDisplay(r.sym);
    const sec=sectorOf(r.sym);
    const isCrossCcy=nativeCcy(r.sym)!==currency;
    const priceV=(isCrossCcy?'<span class="price-tilde" title="Converted from '+nativeCcy(r.sym)+' at '+SAR_USD+' rate">~</span>':'')+fmtPrice(r.price, r.sym);
    const rsiV=r.rsi!=null?r.rsi.toFixed(1):'—';
    const macdV=r.macd_hist!=null?(r.macd_hist>0?'+':'')+r.macd_hist.toFixed(4):'—';
    const volV=r.vol_ratio!=null?r.vol_ratio+'×':'—';
    const chgV=r.change_pct!=null?((r.change_pct>0?'+':'')+r.change_pct.toFixed(2)+'%'):'—';
    const chgCol=r.change_pct==null?'var(--text3)':r.change_pct>0?'var(--green)':r.change_pct<0?'var(--red)':'var(--text2)';
    const col=scoreColor(r.score,r.maxScore||8);
    const pct=Math.round((r.score/(r.maxScore||8))*100);
    const sel=selectedSyms.has(r.sym);
    // Score delta
    const delta=deltaData.find(d=>d.sym===r.sym);
    const dHtml=delta&&delta.score_delta!==0?`<span class="${delta.score_delta>0?'delta-up':'delta-dn'}">${delta.score_delta>0?'+':''}${delta.score_delta}</span>`:`<span class="delta-na">—</span>`;
    // Bias badge with tooltip (natural language summary)
    const passFlags=(r.flags||[]).join(', ')||'—';
    const _sc=r.score||0, _mx=r.maxScore||9;
    const _bDesc=_sc>=7?'Strong, well-confirmed setup — all major filters are aligned.':_sc>=5?'Good setup — most filters aligned, a solid signal.':_sc>=3?'Approaching a signal — a few criteria still need to flip.':'Most criteria not yet aligned — no actionable signal.';
    const _warns=(r.warnings||[]).length?'\nWatch: '+(r.warnings||[]).join('. ')+'.':'';
    const biasTitle=`${r.bias} — ${_sc} of ${_mx} criteria aligned.\n${_bDesc}\nPassing: ${passFlags}.${_warns}`;
    // EMA tooltip (natural language)
    const _e=r.emas||{}, _eStack=_e.ema13>_e.ema34&&_e.ema34>_e.ema89;
    const emaTitle=`EMA trend stack — fast (13): ${_e.ema13?.toFixed(2)||'?'} | mid (34): ${_e.ema34?.toFixed(2)||'?'} | slow (89): ${_e.ema89?.toFixed(2)||'?'} | baseline (200): ${_e.ema200?.toFixed(2)||'?'}.\n${_eStack?'All three averages are stacked in uptrend order — strong bull structure confirmed.':'Averages are not in uptrend order — trend structure is incomplete.'}\n▲▲ = fully bullish · ▲ = partial · ◆ = neutral · ▼ = partial bear · ▼▼ = fully bearish`;
    // Error retry
    const isError=r.bias==='ERROR'||r.bias==='NO_DATA';
    const retryHtml=isError?`<button class="retry-btn" onclick="event.stopPropagation();retrySymbol('${r.sym}',this)" title="${r.error||'Data unavailable'}">${t('retryBtn')}</button>`:'';
    return`<tr data-sym="${r.sym}" class="${sel?'selected-row':''}" onclick="onRowClick(event,'${r.sym}')">
      <td class="cb-cell"><input type="checkbox" class="row-cb" ${sel?'checked':''} onclick="event.stopPropagation();toggleRow('${r.sym}',this.checked)"><button class="wl-star ${isWatched(r.sym)?'wl-active':''}" data-sym="${r.sym}" onclick="event.stopPropagation();toggleWatchlist('${r.sym}',event)" title="${isWatched(r.sym)?'Remove from watchlist':'Add to watchlist'}">${isWatched(r.sym)?'★':'☆'}</button></td>
      <td class="td-ticker">${ticker}</td>
      <td class="td-name">${r.name}${r.ar?`<span class="ar-name" dir="rtl">${r.ar}</span>`:''}${positionBadgeHtml(r.sym,r.price)}${calCache[r.sym]?calBadgeHtml(calCache[r.sym]):''}${riskCache[r.sym]?riskBadgeHtml(riskCache[r.sym]):''}${retryHtml}${r.whale_score>=7?'<span class="whale-badge" title="Extreme whale activity — whale score '+r.whale_score+'/10">🐋🐋🐋</span>':r.whale_score>=5?'<span class="whale-badge" title="Significant whale activity — score '+r.whale_score+'/10">🐋🐋</span>':r.whale_score>=3?'<span class="whale-badge" title="Unusual activity — score '+r.whale_score+'/10">🐋</span>':''}${(()=>{const sTags=(r.style_tags||[]).length?'<div style="margin-top:3px;display:flex;gap:3px;flex-wrap:wrap">'+(r.style_tags).map(s=>{const sc={'Momentum':'#5ba3ff','Trend':'#00e676','Breakout':'#ffd740','Recovery':'#3d8bff','Pullback':'#33d1e5'}[s]||'var(--text3)';return`<span style="font-size:8.5px;font-weight:700;padding:1px 5px;border-radius:10px;background:${sc}22;color:${sc};border:1px solid ${sc}44;cursor:pointer" onclick="event.stopPropagation();filterStyle('${s}',document.querySelector('[onclick*=filterStyle][onclick*=${s}]'))">${s}</span>`;}).join('')+'</div>':'';const pBadges=(r.patterns||[]).map(p=>{const pc=p.bullish?'#00e5aa':'#ff5252';return`<span style="font-size:8px;font-weight:700;padding:1px 5px;border-radius:4px;background:${pc}15;color:${pc};border:1px solid ${pc}33" title="${p.desc}">⬦ ${p.name}</span>`;}).join('');const pDiv=pBadges?`<div style="margin-top:3px;display:flex;gap:3px;flex-wrap:wrap">${pBadges}</div>`:'';return sTags+pDiv;})()}</td>
      <td class="hm"><span class="sector-badge sector-${sec}">${sectorLabel(sec)}</span></td>
      <td class="td-price" title="${nativeCcy(r.sym)} price · toggle header to convert">${priceV}</td>
      <td style="text-align:end;font-weight:700;font-size:12px;color:${chgCol};font-family:'JetBrains Mono',monospace">${chgV}</td>
      <td>${(()=>{const _rk=_rankMap.get(r.sym);const _rkHtml=_rk&&_rk.total>3?`<span style="font-size:9px;color:var(--text3);font-family:'JetBrains Mono',monospace;margin-inline-start:5px" title="Rank #${_rk.rank} of ${_rk.total} in this market by score">#${_rk.rank}</span>`:'';return`<div class="score-wrap" title="${r.score} of ${r.maxScore||9} criteria aligned. ${(r.score||0)>=7?'Very strong — all major filters confirm the direction.':( r.score||0)>=5?'Good — most filters aligned.':( r.score||0)>=3?'Moderate — approaching signal territory.':'Weak — most criteria not yet aligned.'}"><div class="score-bar"><div class="score-fill" style="width:${pct}%;background:${col}"></div></div><span class="score-text">${r.score}/${r.maxScore||9}</span>${_rkHtml}</div><div class="score-tier" style="color:${scoreLabel(r.score,r.maxScore||8).col}">${scoreLabel(r.score,r.maxScore||8).text}</div>${r.regime_discount>0?`<div style="font-size:9px;color:var(--orange);margin-top:2px" title="Regime-adjusted: ${r.regime_score}/${r.maxScore||8} — market is ${r.market_regime}">⚠ -${r.regime_discount} ${r.market_regime} mkt</div>`:''}${scoreSparklineHtml(r.sym)}${priceSparklineHtml(r.sym)}<div style="display:inline-flex;align-items:center;gap:2px;margin-top:1px">${velocityArrowHtml(r.sym)}</div>`;})()}</td>
      <td class="hm">${dHtml}</td>
      <td style="text-align:end"><span class="rsi-pill ${rsiClass(r.rsi)}">${rsiV}</span></td>
      <td class="td-macd hm ${r.macd_hist>0?'macd-pos':'macd-neg'}">${macdV}</td>
      <td class="td-vol hm ${r.vol_ratio>=1.2?'vol-ok':''}">${volV}</td>
      <td class="hm" title="${emaTitle}">${emaStackHtml(r)}</td>
      <td title="${biasTitle}">${biasBadgeHtml(r.bias)}<div class="plain-signal">${plainSignal(r.bias)}</div></td>
      <td class="hm">${divergenceBadgeHtml(r)}</td>
      <td class="hm">${shariaHtml(r.sym)}</td>
      <td class="hm" style="text-align:end">${rsHtml(r)}</td>
      <td class="hm">${weeklyBadgeHtml(r)}</td>
    </tr>`;
  }).join('');
  if(!rows.length) tbody.innerHTML=`<tr><td colspan="16"><div class="empty-state"><div class="icon">🔍</div><p>${t('emptyScreener')}</p></div></td></tr>`;
  updateBreadthBar();
  updateSectorHeatmap();
  updateMovers();
  document.getElementById('count-strong-buy').textContent =scanData.filter(r=>r.bias==='STRONG BUY').length;
  document.getElementById('count-buy').textContent        =scanData.filter(r=>r.bias==='BUY').length;
  document.getElementById('count-watch').textContent      =scanData.filter(r=>r.bias==='WATCH').length;
  document.getElementById('count-strong-sell').textContent=scanData.filter(r=>r.bias==='STRONG SELL').length;
  document.getElementById('count-total').textContent      =scanData.length;
}

// ────────────────────────────────────────────────────────────────────────────
// Detail drawer
// ────────────────────────────────────────────────────────────────────────────
function onRowClick(event,sym){
  // Ignore clicks on interactive children (checkbox, star, buttons, inputs)
  if(event.target.closest('input,button,select,a,.alert-btn,.retry-btn,.wl-star')) return;
  const r=scanData.find(x=>x.sym===sym);
  if(r){ openDrawer(r); }
  else if(sym){
    // No scan data — show minimal message in drawer
    openDrawerNoData(sym);
  }
}

function openDrawerNoData(sym){
  openDrawerData=null;
  openTickerParam(sym);
  document.getElementById('d-ticker').textContent=tickerDisplay(sym);
  document.getElementById('d-name').textContent='No scan data available';
  document.getElementById('d-price').textContent='—';
  document.getElementById('d-bias-badge').innerHTML='';
  document.getElementById('d-tv-actions').innerHTML='';
  document.getElementById('dtab-signal').innerHTML=`<div class="empty-state"><div class="icon">🔍</div><p>No data for <strong>${tickerDisplay(sym)}</strong>.<br>Run a scan first to see the full breakdown.</p></div>`;
  ['dtab-trade','dtab-analysis','dtab-fund','dtab-news'].forEach(id=>{
    const el=document.getElementById(id); if(el) el.innerHTML='';
  });
  document.querySelectorAll('.drawer-tab').forEach(b=>b.classList.remove('active'));
  document.querySelectorAll('.drawer-tab-panel').forEach(p=>p.classList.remove('dtab-active'));
  const firstTab=document.querySelector('.drawer-tab'); if(firstTab) firstTab.classList.add('active');
  document.getElementById('dtab-signal').classList.add('dtab-active');
  document.getElementById('detail-overlay').classList.add('open');
  document.getElementById('detail-drawer').classList.add('open');
}

// ─── Fix 3: Column header popovers ───────────────────────────────────────────
const COL_POPOVER_CONTENT = {
  ema: {
    title: 'EMA Signal',
    rows: [['▲▲','Full bull — EMA 13 > 34 > 89 AND price above 200 EMA'],['▲','Partial bullish alignment'],['◆','Neutral / mixed signals'],['▼','Partial bearish alignment'],['▼▼','Full bear — EMA 13 < 34 < 89 AND price below 200 EMA'],['—','Insufficient data']],
    note: 'EMAs used: 13-day, 34-day, 89-day, 200-day. All timeframes must align for ▲▲ or ▼▼.'
  },
  div: {
    title: 'RSI Divergence',
    rows: [['↗ Div','Bullish — price makes lower low but RSI makes higher low → hidden strength'],['↘ Div','Bearish — price makes higher high but RSI makes lower high → fading momentum'],['—','No divergence detected in last 30 bars']],
    note: 'Divergence is detected using the last 30 daily bars. Only shown when confirmed.'
  },
  halal: {
    title: 'Sharia Compliance',
    rows: [['Halal','AAOIFI-compliant — passes sector and financial screens'],['Non-Halal','Fails Sharia screening (interest-based or prohibited sector)'],['Review','Classification pending — consult a qualified Islamic finance scholar'],['—','Not assessed — no data available']],
    note: 'Based on AAOIFI sector screens. Not a fatwa. Verify with a qualified scholar.'
  },
  delta: {
    title: 'Score Delta (Δ)',
    rows: [['+2','Score improved by 2 points since last scan (green = improved)'],['−3','Score dropped by 3 points since last scan (red = degraded)'],['—','No change, or this is the first scan']],
    note: 'Click the Δ header to sort by biggest movers. Updated after every scan.'
  },
};

function showColPopover(key, e){
  e?.stopPropagation();
  const pop=document.getElementById('col-popover');
  const titleEl=document.getElementById('cpop-title');
  const bodyEl=document.getElementById('cpop-body');
  const noteEl=document.getElementById('cpop-note');
  if(!pop||!titleEl||!bodyEl) return;
  const d=COL_POPOVER_CONTENT[key];
  if(!d) return;
  titleEl.textContent=d.title;
  bodyEl.innerHTML=d.rows.map(([k,v])=>`<div class="cpop-row"><span class="cpop-key">${k}</span><span class="cpop-val">${v}</span></div>`).join('');
  if(d.note){noteEl.textContent=d.note;noteEl.style.display='block';}
  else noteEl.style.display='none';
  pop.classList.add('open');
  // Position near click
  const rect=e.currentTarget.getBoundingClientRect();
  pop.style.top=(rect.bottom+6)+'px';
  const left=Math.min(rect.left,window.innerWidth-310);
  pop.style.left=Math.max(8,left)+'px';
  // Dismiss on outside click
  const dismiss=(ev)=>{if(!pop.contains(ev.target)){pop.classList.remove('open');document.removeEventListener('click',dismiss);}};
  setTimeout(()=>document.addEventListener('click',dismiss),0);
}

// ─── Fix 2: Currency info bar update ─────────────────────────────────────────
function updateCcyInfoBar(){
  const text=document.getElementById('ccy-info-text');
  const btnLbl=document.getElementById('ccy-info-btn-label');
  const badge=document.getElementById('price-ccy-badge');
  if(text) text.innerHTML=currency==='SAR'?`TASI prices in <strong>SAR</strong> · US/Crypto/Commodity in <strong>USD</strong>`:`US/Crypto/Commodity in <strong>USD</strong> · TASI prices in <strong>SAR</strong>`;
  if(btnLbl) btnLbl.textContent=currency==='SAR'?'$ USD':'SAR';
  if(badge) badge.textContent=`(${currency})`;
}

// ─── Fix 1: Drawer URL param + signal actions ─────────────────────────────────
function openTickerParam(sym){
  try{ history.replaceState(null,'',`${location.pathname}?ticker=${encodeURIComponent(sym)}`); }catch(_){}
}

function clearTickerParam(){
  try{ history.replaceState(null,'',location.pathname); }catch(_){}
}

function openFromUrl(){
  const param=new URLSearchParams(location.search).get('ticker');
  if(!param||!scanData.length) return;
  const r=scanData.find(x=>x.sym===param||tickerDisplay(x.sym)===param);
  if(r) openDrawer(r);
}

function goToDrawerTab(tabName){
  const tabs=document.querySelectorAll('.drawer-tab');
  const tabMap={'trade':1,'analysis':2,'fund':3};
  const idx=tabMap[tabName]??0;
  if(tabs[idx]) switchDrawerTab(tabName,tabs[idx]);
}

// ─── Fix 1.1 Signal Legend ───────────────────────────────────────────────────
const SIGNAL_LEGEND = [
  {icon:'🟢',bias:'STRONG BUY',  en:'7+ criteria met (out of 9 in Swing, 8 in Breakout) — all bullish signals aligned. High-conviction long entry.',  ar:'7+ معايير متحققة (من 9 في وضع التأرجح) — جميع الإشارات صعودية. دخول شراء عالي الثقة.'},
  {icon:'🟩',bias:'BUY',         en:'5–6 criteria met — bullish bias with minor gaps. Consider partial entry.',       ar:'5–6 معايير — اتجاه صعودي مع ثغرات بسيطة. يُنصح بدخول جزئي.'},
  {icon:'🟡',bias:'WATCH',       en:'3–4 criteria met — mixed signals. Add to watchlist, wait for confirmation.',       ar:'3–4 معايير — إشارات مختلطة. أضف للمراقبة وانتظر التأكيد.'},
  {icon:'⚫',bias:'SKIP',        en:'Below 3 criteria — insufficient bullish evidence. No trade.',                    ar:'أقل من 3 معايير — أدلة صعودية غير كافية. لا تداول.'},
  {icon:'🟠',bias:'AVOID',       en:'3–4 bearish criteria met — early bearish lean. Do not buy.',                     ar:'3–4 معايير هبوطية — ميل هبوطي مبكر. لا تشتر.'},
  {icon:'🔴',bias:'SELL',        en:'5–6 bearish criteria — confirmed downtrend. Exit or reduce longs.',              ar:'5–6 معايير هبوطية — هبوط مؤكد. اخرج أو قلل مراكز الشراء.'},
  {icon:'🔴',bias:'STRONG SELL', en:'7+ bearish criteria — all signals bearish. High-conviction exit or avoid.',             ar:'7+ معايير هبوطية — جميع الإشارات هابطة. خروج عالي الثقة.'},
  {icon:'⚠️',bias:'ERROR',       en:'Data feed failure for this symbol. Check your data source or retry.',              ar:'فشل بيانات لهذا الرمز. تحقق من المصدر أو أعد المحاولة.'},
  {icon:'❓',bias:'NO DATA',     en:'Missing price, volume, or indicator data — symbol may not be active.',             ar:'بيانات سعر أو حجم مفقودة — قد لا يكون الرمز نشطاً.'},
];

function toggleLegend(){
  const bar=document.getElementById('legend-bar');
  const btn=document.getElementById('legend-toggle-btn');
  if(!bar||!btn) return;
  const open=bar.classList.toggle('open');
  btn.textContent=open?t('legendClose'):t('legendBtn');
  if(open&&!bar.innerHTML.trim()){
    bar.innerHTML=`<div style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:var(--text2);margin-bottom:8px">Signal Guide — Mawjah Scoring System</div>
    <div class="legend-grid">${SIGNAL_LEGEND.map(l=>`<div class="legend-item"><span class="legend-dot">${l.icon}</span><div class="legend-text"><strong>${l.bias}</strong> — ${lang==='ar'?l.ar:l.en}</div></div>`).join('')}</div>
    <div style="font-size:10px;color:var(--text3);margin-top:8px;border-top:1px solid var(--border);padding-top:6px">EMA arrows: ▲▲ All bullish (13&gt;34&gt;89, price &gt;200) · ▲ Partial · ◆ Neutral · ▼ Partial bearish · ▼▼ Full bearish stack</div>`;
  }
}

// ─── 1.3 Currency header badge ────────────────────────────────────────────────
function updatePriceCcyBadge(){
  const el=document.getElementById('price-ccy-badge');
  if(el) el.textContent=currency;
}

// ─── 1.4 Error retry ──────────────────────────────────────────────────────────
async function retrySymbol(sym,btn){
  if(btn){btn.disabled=true;btn.textContent='…';}
  try{
    await fetch('/api/scan/start',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({symbols:[sym]})});
    startPolling();
  }catch(e){}
}

// ─── 1.6 Data freshness ───────────────────────────────────────────────────────
function showFreshness(ts){
  const badge=document.getElementById('freshness-badge');
  if(!badge) return;
  if(!ts){badge.style.display='none';return;}
  const ageMin=Math.round((Date.now()-new Date(ts).getTime())/60000);
  const stale=ageMin>60;
  badge.style.display='inline-flex';
  badge.className='freshness-badge'+(stale?' freshness-stale':'');
  badge.title=stale?'Prices may not reflect current market — run a new scan to refresh':'Data is recent';
  badge.textContent=ageMin<1?'Just now':ageMin<60?`${ageMin}m ago`:`${Math.round(ageMin/60)}h ago`;
}

// ─── 2.3 Watchlist ───────────────────────────────────────────────────────────
function isWatched(sym){ return watchlistData.includes(sym); }

function toggleWatchlist(sym,e){
  if(e) e.stopPropagation();
  // Always read from localStorage first to stay in sync (handles cross-tab changes)
  watchlistData=JSON.parse(localStorage.getItem('mawjah_watchlist')||'[]');
  const wasWatched=watchlistData.includes(sym);
  watchlistData=wasWatched?watchlistData.filter(s=>s!==sym):[...watchlistData,sym];
  localStorage.setItem('mawjah_watchlist',JSON.stringify(watchlistData));
  // Update every star icon for this sym in the DOM (no full re-render needed)
  document.querySelectorAll(`.wl-star[data-sym="${sym}"]`).forEach(el=>{
    el.textContent=watchlistData.includes(sym)?'★':'☆';
    el.classList.toggle('wl-active',watchlistData.includes(sym));
  });
  // Update the sig-wl-btn in the open drawer if it's for this sym
  if(openDrawerData?.sym===sym){
    const sigBtn=document.getElementById('sig-wl-btn');
    if(sigBtn){
      const now=watchlistData.includes(sym);
      sigBtn.textContent=now?'★ Watchlist':'☆ Watchlist';
      sigBtn.classList.toggle('sig-watch-on',now);
    }
  }
  // Toast notification
  const n=document.createElement('div');
  n.style.cssText='position:fixed;bottom:20px;inset-inline-start:20px;background:var(--card);border:1px solid var(--border);color:var(--text);padding:8px 14px;border-radius:6px;font-size:12px;z-index:999;box-shadow:0 2px 8px rgba(0,0,0,.3)';
  n.textContent=(wasWatched?'☆ '+t('wlRemovedToast'):'★ '+t('wlAddedToast'))+' — '+tickerDisplay(sym);
  document.body.appendChild(n); setTimeout(()=>n.remove(),2000);
  // Refresh watchlist panel (no full table re-render)
  renderWatchlistPanel();
}

function renderWatchlistPanel(){
  // Always re-sync from localStorage — this is the single source of truth
  watchlistData=JSON.parse(localStorage.getItem('mawjah_watchlist')||'[]');
  const el=document.getElementById('watchlist-content');
  if(!el) return;
  if(!watchlistData.length){
    el.innerHTML=`<div class="wl-empty">${t('wlEmpty').replace(/\n/g,'<br>')}</div>`;
    return;
  }
  // Reload price alerts too
  priceAlerts=JSON.parse(localStorage.getItem('mawjah_price_alerts')||'[]');
  const rows=watchlistData.map(sym=>{
    const r=scanData.find(x=>x.sym===sym);
    const delta=deltaData.find(d=>d.sym===sym);
    const dHtml=delta&&delta.score_delta!==0?`<span class="${delta.score_delta>0?'delta-up':'delta-dn'}">${delta.score_delta>0?'+':''}${delta.score_delta}</span>`:'<span class="delta-na">—</span>';
    const symAlerts=priceAlerts.filter(a=>a.sym===sym);
    const activeAlert=symAlerts.find(a=>!a.triggered);
    const triggeredAlert=symAlerts.find(a=>a.triggered);
    const sid=sym.replace(/[^a-z0-9]/gi,'_');
    if(!r){
      return`<tr>
        <td><button class="wl-star wl-active" data-sym="${sym}" onclick="toggleWatchlist('${sym}',event)">★</button> <span class="td-ticker">${tickerDisplay(sym)}</span></td>
        <td colspan="6" style="color:var(--text3);font-size:11px">Not in last scan — run a scan to load data</td>
      </tr>`;
    }
    const col=scoreColor(r.score,r.maxScore||8);
    const pct2=Math.round(r.score/(r.maxScore||8)*100);
    const isCross=nativeCcy(r.sym)!==currency;
    const priceDisp=(isCross?'<span class="price-tilde">~</span>':'')+fmtPrice(r.price,r.sym);
    // Alert pill display
    let alertPill='';
    if(triggeredAlert) alertPill=`<div style="font-size:9px;color:var(--text3);margin-top:2px">✓ Triggered @ ${fmtPrice(triggeredAlert.price,sym)} <button class="pos-del-btn" onclick="deleteWlAlert('${sym}',event)" style="font-size:9px">×</button></div>`;
    else if(activeAlert) alertPill=`<div style="margin-top:2px"><span class="freshness-badge">${activeAlert.dir==='above'?'▲':'▼'} ${fmtPrice(activeAlert.price,sym)} <button class="pos-del-btn" onclick="deleteWlAlert('${sym}',event)" style="font-size:9px">×</button></span></div>`;
    return`<tr data-sym="${sym}" onclick="onRowClick(event,'${sym}')" style="cursor:pointer">
      <td style="white-space:nowrap">
        <button class="wl-star wl-active" data-sym="${sym}" onclick="toggleWatchlist('${sym}',event)">★</button>
        <span class="td-ticker" style="margin-inline-start:4px">${tickerDisplay(sym)}</span>
      </td>
      <td class="td-name">${r.name}<br><span style="font-size:10px;color:var(--text3)">${sectorLabel(sectorOf(r.sym))}</span></td>
      <td>${biasBadgeHtml(r.bias)}</td>
      <td><div class="score-wrap"><div class="score-bar"><div class="score-fill" style="width:${pct2}%;background:${col}"></div></div><span class="score-text">${r.score}/${r.maxScore||8}</span></div></td>
      <td class="td-price">${priceDisp}</td>
      <td><span class="rsi-pill ${rsiClass(r.rsi)}" style="font-size:10px">${r.rsi!=null?r.rsi.toFixed(1):'—'}</span></td>
      <td>${dHtml}</td>
      <td onclick="event.stopPropagation()">
        ${alertPill}
        <div id="wl-alert-form-${sid}" style="display:none">
          <div style="display:flex;gap:4px;align-items:center;flex-wrap:wrap;margin-top:4px">
            <select id="wl-d-${sid}" class="rule-select" style="font-size:10px">
              <option value="above">▲ Above</option>
              <option value="below">▼ Below</option>
            </select>
            <input id="wl-p-${sid}" class="add-criteria-input" style="max-width:80px;font-size:10px" type="number" step="0.01" placeholder="${fmtPrice(r.price,r.sym)}">
            <button class="alert-btn" onclick="savePriceAlert('${sym}')">Save</button>
            <button class="pos-del-btn" onclick="document.getElementById('wl-alert-form-${sid}').style.display='none'">×</button>
          </div>
        </div>
        ${!activeAlert?`<button class="alert-btn" style="margin-top:2px" onclick="document.getElementById('wl-alert-form-${sid}').style.display='flex'">+ Alert</button>`:''}
      </td>
    </tr>`;
  }).join('');
  el.innerHTML=`<div class="table-wrap" style="border:none;border-radius:0">
    <table class="pos-table">
      <thead><tr>
        <th>Ticker</th><th>Name</th><th>Signal</th><th>Score</th>
        <th>Price</th><th>RSI</th><th>Δ</th><th>Alert</th>
      </tr></thead>
      <tbody>${rows}</tbody>
    </table>
  </div>`;
}

function savePriceAlert(sym){
  const id=sym.replace(/[^a-z0-9]/gi,'_');
  const price=parseFloat(document.getElementById(`wl-p-${id}`)?.value||0);
  const dir=document.getElementById(`wl-d-${id}`)?.value||'above';
  if(!price||price<=0) return;
  priceAlerts=JSON.parse(localStorage.getItem('mawjah_price_alerts')||'[]');
  // Only one active alert per sym/dir
  priceAlerts=priceAlerts.filter(a=>!(a.sym===sym&&!a.triggered));
  priceAlerts.push({sym,dir,price,createdAt:new Date().toISOString(),triggered:false});
  localStorage.setItem('mawjah_price_alerts',JSON.stringify(priceAlerts));
  document.getElementById(`wl-alert-form-${id}`)?.style && (document.getElementById(`wl-alert-form-${id}`).style.display='none');
  renderWatchlistPanel();
}

// Keep old name as alias for backward compat
function setPriceAlert(sym){ savePriceAlert(sym); }

function deleteWlAlert(sym,e){
  if(e) e.stopPropagation();
  priceAlerts=JSON.parse(localStorage.getItem('mawjah_price_alerts')||'[]');
  priceAlerts=priceAlerts.filter(a=>a.sym!==sym);
  localStorage.setItem('mawjah_price_alerts',JSON.stringify(priceAlerts));
  renderWatchlistPanel();
}

function checkPriceAlerts(){
  priceAlerts=JSON.parse(localStorage.getItem('mawjah_price_alerts')||'[]');
  if(!priceAlerts.length||!scanData.length) return;
  let changed=false;
  priceAlerts.forEach(alert=>{
    if(alert.triggered) return;
    const r=scanData.find(x=>x.sym===alert.sym); if(!r?.price) return;
    const fired=(alert.dir==='above'&&r.price>=alert.price)||(alert.dir==='below'&&r.price<=alert.price);
    if(!fired) return;
    alert.triggered=true; alert.triggeredPrice=r.price; alert.triggeredAt=new Date().toISOString();
    changed=true;
    // In-app banner
    const n=document.createElement('div');
    n.style.cssText='position:fixed;top:64px;inset-inline-end:16px;background:rgba(255,214,0,.95);color:#000;padding:12px 16px;border-radius:8px;font-size:13px;font-weight:700;z-index:999;max-width:300px;box-shadow:0 4px 16px rgba(0,0,0,.4);cursor:pointer';
    n.innerHTML=`🔔 <strong>${tickerDisplay(alert.sym)}</strong> crossed your alert<br><span style="font-weight:400">${alert.dir==='above'?'▲':'▼'} ${fmtPrice(alert.price,alert.sym)} target. Now: ${fmtPrice(r.price,alert.sym)}</span>`;
    n.onclick=()=>n.remove();
    document.body.appendChild(n); setTimeout(()=>n.remove(),12000);
    // Telegram notification
    const tg=settingsData?.telegram;
    if(tg?.enabled&&tg.token&&tg.chat_id){
      const msg=`🔔 Mawjah Price Alert: ${r.name||tickerDisplay(alert.sym)} (${tickerDisplay(alert.sym)})\n`+
        `Your ${alert.dir} alert of ${alert.price} was triggered.\n`+
        `Current price: ${r.price?.toFixed(2)} | Signal: ${r.bias}`;
      fetch('https://api.telegram.org/bot'+tg.token+'/sendMessage',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({chat_id:tg.chat_id,text:msg})}).catch(()=>{});
    }
  });
  if(changed){
    localStorage.setItem('mawjah_price_alerts',JSON.stringify(priceAlerts));
    renderWatchlistPanel();
  }
}

// ─── 2.5 Price sparkline ─────────────────────────────────────────────────────
function priceSparklineHtml(sym){
  const hist=scoreHistory[sym];
  if(!hist||hist.length<2) return'';
  const prices=hist.slice(-10).filter(h=>h.p!=null).map(h=>h.p);
  if(prices.length<2) return'';
  const mn=Math.min(...prices),mx=Math.max(...prices),range=mx-mn||1;
  const w=44,h=12;
  const xs=(w-2)/Math.max(prices.length-1,1);
  const pts=prices.map((p,i)=>`${Math.round(i*xs+1)},${Math.round(h-1-(p-mn)/range*(h-2))}`).join(' ');
  const col=prices[prices.length-1]>=prices[0]?'var(--green)':'#ff5252';
  return`<svg width="${w}" height="${h}" class="price-spark"><polyline points="${pts}" fill="none" stroke="${col}" stroke-width="1.3" stroke-linejoin="round"/></svg>`;
}

// ─── 2.6 Scan archive ────────────────────────────────────────────────────────
const ARCHIVE_PFX='mawjah_archive_';

function saveArchiveSnapshot(){
  if(!scanData.length) return;
  const keys=Object.keys(localStorage).filter(k=>k.startsWith(ARCHIVE_PFX)).sort();
  while(keys.length>=10){ localStorage.removeItem(keys.shift()); }
  localStorage.setItem(ARCHIVE_PFX+Date.now(),JSON.stringify({ts:Date.now(),results:scanData}));
  renderArchiveDropdown();
  const btn=document.getElementById('archive-btn');
  if(btn) btn.style.display='';
}

function renderArchiveDropdown(){
  const el=document.getElementById('archive-dropdown-menu');
  if(!el) return;
  const keys=Object.keys(localStorage).filter(k=>k.startsWith(ARCHIVE_PFX)).sort().reverse();
  if(!keys.length){el.innerHTML=`<div style="padding:10px;font-size:11px;color:var(--text3)">${t('noScan')}</div>`;return;}
  el.innerHTML=`<div class="archive-menu-item${!archiveViewing?' active':''}" onclick="loadArchive(null)">🔴 ${t('archiveLive')}</div>`+
    keys.map(k=>{
      const d=JSON.parse(localStorage.getItem(k)||'{}');
      const date=new Date(d.ts).toLocaleString(lang==='ar'?'ar-SA':'en-SA',{month:'short',day:'numeric',hour:'2-digit',minute:'2-digit'});
      return`<div class="archive-menu-item${archiveViewing===k?' active':''}" onclick="loadArchive('${k}')">${date} <span style="color:var(--text3)">${d.results?.length||0}</span></div>`;
    }).join('');
}

function toggleArchiveDropdown(){
  const el=document.getElementById('archive-dropdown-menu');
  if(el){ renderArchiveDropdown(); el.classList.toggle('open'); }
  document.addEventListener('click',function h(e){if(!e.target.closest('.archive-wrap')){el?.classList.remove('open');document.removeEventListener('click',h);}},{once:false});
}

function loadArchive(key){
  document.getElementById('archive-dropdown-menu')?.classList.remove('open');
  document.getElementById('archive-banner-el')?.remove();
  if(!key){ archiveViewing=null; renderTable(); showFreshness(null); return; }
  const data=JSON.parse(localStorage.getItem(key)||'{}');
  if(!data.results) return;
  archiveViewing=key;
  scanData=data.results;
  renderTable();
  const date=new Date(data.ts).toLocaleString(lang==='ar'?'ar-SA':'en-SA',{dateStyle:'medium',timeStyle:'short'});
  const banner=document.createElement('div');
  banner.id='archive-banner-el'; banner.className='archive-banner';
  banner.innerHTML=`📦 Viewing scan from <strong>${date}</strong> (${data.results.length} stocks) · <button onclick="loadArchive(null)" style="background:none;border:none;color:var(--yellow);cursor:pointer;font-size:11px;text-decoration:underline">Return to live</button>`;
  document.getElementById('panel-screener')?.insertBefore(banner,document.querySelector('.screener-toolbar'));
  renderArchiveDropdown();
}

// ─── 2.7 Batch calendar fetch ─────────────────────────────────────────────────
function batchFetchCalendars(){
  const top=getVisibleRows().slice(0,20);
  top.filter(r=>calCache[r.sym]===undefined).forEach(r=>fetchCalendar(r.sym).then(()=>{ const row=document.querySelector(`tr[data-sym="${r.sym}"] .td-name`); if(row&&calCache[r.sym]) row.insertAdjacentHTML('beforeend',calBadgeHtml(calCache[r.sym])); }));
}

// ─── 2.1 TradingView embed (legacy — kept for compatibility) ─────────────────
function loadTVEmbed(sym){
  const wrap=document.getElementById('tv-embed-wrap');
  if(!wrap) return;
  const url=`https://s.tradingview.com/widgetembed/?symbol=${encodeURIComponent(sym)}&interval=D&theme=dark&hide_top_toolbar=1&save_image=0&style=1&timezone=exchange&hide_legend=0`;
  wrap.innerHTML=`<iframe src="${url}" style="width:100%;height:100%;border:none" loading="lazy" allowfullscreen></iframe>`;
}

// ─── 2.2 Native canvas price chart ──────────────────────────────────────────
async function loadNativeChart(sym, containerId, opts = {}) {
  const wrap = document.getElementById(containerId);
  if (!wrap) return;
  wrap.innerHTML = '<div class="native-chart-loading">Loading chart…</div>';
  try {
    const res = await fetch('/api/ohlcv?sym=' + encodeURIComponent(sym) + '&count=252');
    if (!res.ok) {
      wrap.innerHTML = `<div class="native-chart-loading" style="color:var(--red)">Chart unavailable (${res.status}) — restart the server</div>`;
      return;
    }
    const d = await res.json();
    if (!d.success || !d.bars?.length) {
      wrap.innerHTML = `<div class="native-chart-loading" style="color:var(--red)">${d.error || 'No data'}</div>`;
      return;
    }
    wrap.innerHTML = '';
    const canvas = document.createElement('canvas');
    wrap.appendChild(canvas);
    const tooltip = document.createElement('div');
    tooltip.className = 'native-chart-tooltip';
    wrap.appendChild(tooltip);
    drawCandleChart(canvas, tooltip, d.bars, opts);
    // Redraw on resize
    const ro = new ResizeObserver(() => drawCandleChart(canvas, tooltip, d.bars, opts));
    ro.observe(wrap);
    wrap._chartObserver = ro;
  } catch(e) {
    wrap.innerHTML = `<div class="native-chart-loading" style="color:var(--red)">${e.message}</div>`;
  }
}

function drawCandleChart(canvas, tooltip, bars, opts = {}) {
  const { discoveryPrice = null, currentPrice = null } = opts;
  const wrap = canvas.parentElement;
  const dpr = window.devicePixelRatio || 1;
  const W = wrap.clientWidth || 540;
  const H = wrap.clientHeight || 280;
  canvas.width  = W * dpr;
  canvas.height = H * dpr;
  canvas.style.width  = W + 'px';
  canvas.style.height = H + 'px';
  const ctx = canvas.getContext('2d');
  ctx.scale(dpr, dpr);

  // Layout
  const PAD_R = 60, PAD_B = 22, PAD_L = 8, PAD_T = 10;
  const priceH = Math.floor((H - PAD_T - PAD_B) * 0.76);
  const volH   = (H - PAD_T - PAD_B) - priceH - 4;
  const chartW = W - PAD_L - PAD_R;
  const priceY = PAD_T;
  const volY   = PAD_T + priceH + 4;

  // Price min/max
  const highs = bars.map(b => b.high);
  const lows  = bars.map(b => b.low);
  let pMin = Math.min(...lows), pMax = Math.max(...highs);
  const pPad = (pMax - pMin) * 0.06;
  pMin -= pPad; pMax += pPad;

  // Volume max
  const vols = bars.map(b => b.volume || 0);
  const vMax = Math.max(...vols, 1);

  const toX = i => PAD_L + (i / (bars.length - 1)) * chartW;
  const toY = p => priceY + priceH - ((p - pMin) / (pMax - pMin)) * priceH;
  const toVY = v => volY + volH - (v / vMax) * volH;

  // ── Background
  ctx.fillStyle = '#080a0f';
  ctx.fillRect(0, 0, W, H);

  // ── Grid lines (horizontal price)
  const pStep = nicePriceStep(pMin, pMax, 5);
  let gP = Math.ceil(pMin / pStep) * pStep;
  ctx.strokeStyle = 'rgba(255,255,255,.045)';
  ctx.lineWidth = 1;
  while (gP <= pMax) {
    const gy = Math.round(toY(gP)) + 0.5;
    ctx.beginPath(); ctx.moveTo(PAD_L, gy); ctx.lineTo(PAD_L + chartW, gy); ctx.stroke();
    gP = +(gP + pStep).toFixed(10);
  }

  // ── Candlestick body width
  const candleW = Math.max(1, Math.min(10, chartW / bars.length * 0.65));
  const wickW   = Math.max(0.5, candleW * 0.15);

  // ── Volume bars
  for (let i = 0; i < bars.length; i++) {
    const b = bars[i];
    const x = toX(i);
    const isUp = b.close >= b.open;
    ctx.fillStyle = isUp ? 'rgba(0,230,118,.25)' : 'rgba(255,61,113,.22)';
    const vTop = toVY(b.volume || 0);
    ctx.fillRect(x - candleW / 2, vTop, candleW, volY + volH - vTop);
  }

  // ── Discovery price line (dashed accent)
  if (discoveryPrice && discoveryPrice >= pMin && discoveryPrice <= pMax) {
    const dy = Math.round(toY(discoveryPrice)) + 0.5;
    ctx.save();
    ctx.strokeStyle = '#4f8bff';
    ctx.lineWidth = 1;
    ctx.setLineDash([4, 4]);
    ctx.beginPath(); ctx.moveTo(PAD_L, dy); ctx.lineTo(PAD_L + chartW, dy); ctx.stroke();
    ctx.setLineDash([]);
    ctx.fillStyle = '#4f8bff';
    ctx.font = '9px JetBrains Mono, monospace';
    ctx.fillText('Disc ' + fmtPriceShort(discoveryPrice), PAD_L + chartW + 2, dy + 3);
    ctx.restore();
  }

  // ── Current price line (dashed white)
  const lastClose = bars[bars.length - 1]?.close;
  if (lastClose && lastClose >= pMin && lastClose <= pMax) {
    const cy = Math.round(toY(lastClose)) + 0.5;
    ctx.save();
    ctx.strokeStyle = 'rgba(255,255,255,.35)';
    ctx.lineWidth = 1;
    ctx.setLineDash([3, 5]);
    ctx.beginPath(); ctx.moveTo(PAD_L, cy); ctx.lineTo(PAD_L + chartW, cy); ctx.stroke();
    ctx.setLineDash([]);
    ctx.restore();
  }

  // ── Candles
  for (let i = 0; i < bars.length; i++) {
    const b = bars[i];
    const x = toX(i);
    const isUp = b.close >= b.open;
    const col = isUp ? '#00e676' : '#ff3d71';
    const bodyTop    = toY(Math.max(b.open, b.close));
    const bodyBot    = toY(Math.min(b.open, b.close));
    const bodyHeight = Math.max(1, bodyBot - bodyTop);

    // Wick
    ctx.strokeStyle = col;
    ctx.lineWidth = wickW;
    ctx.beginPath();
    ctx.moveTo(x, toY(b.high));
    ctx.lineTo(x, toY(b.low));
    ctx.stroke();

    // Body
    ctx.fillStyle = isUp ? col : col;
    if (isUp) {
      ctx.fillStyle = col;
    } else {
      ctx.fillStyle = col;
    }
    ctx.fillRect(x - candleW / 2, bodyTop, candleW, bodyHeight);
  }

  // ── Price axis labels (right side)
  let gP2 = Math.ceil(pMin / pStep) * pStep;
  ctx.fillStyle = 'rgba(107,115,148,.75)';
  ctx.font = '9px JetBrains Mono, monospace';
  ctx.textAlign = 'left';
  while (gP2 <= pMax) {
    const gy = Math.round(toY(gP2));
    ctx.fillText(fmtPriceShort(gP2), PAD_L + chartW + 4, gy + 3);
    gP2 = +(gP2 + pStep).toFixed(10);
  }

  // ── Date axis labels (bottom)
  const dateCount = 5;
  const step = Math.max(1, Math.floor(bars.length / dateCount));
  ctx.fillStyle = 'rgba(107,115,148,.7)';
  ctx.font = '9px JetBrains Mono, monospace';
  ctx.textAlign = 'center';
  for (let i = step; i < bars.length - step / 2; i += step) {
    const b = bars[i];
    const x = toX(i);
    const d = new Date(b.time * 1000);
    const label = d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    ctx.fillText(label, x, H - 5);
  }

  // ── Hover + touch interaction
  canvas._chartState = { bars, toX, toY, pMin, pMax, priceY, priceH, PAD_L, PAD_R, PAD_T, PAD_B, W, H, candleW };
  const args = [canvas, tooltip, bars, toX, toY, priceH, priceY, PAD_L, chartW, H, discoveryPrice];
  canvas.onmousemove  = (e) => handleChartHover(e, ...args);
  canvas.onmouseleave = ()  => { tooltip.style.display = 'none'; };
  canvas.ontouchstart = (e) => { e.preventDefault(); handleChartHover(e.touches[0], ...args); };
  canvas.ontouchmove  = (e) => { e.preventDefault(); handleChartHover(e.touches[0], ...args); };
  canvas.ontouchend   = ()  => { setTimeout(() => { tooltip.style.display = 'none'; }, 1200); };
}

function handleChartHover(e, canvas, tooltip, bars, toX, toY, priceH, priceY, PAD_L, chartW, H, discoveryPrice) {
  const rect = canvas.getBoundingClientRect();
  const mx = e.clientX - rect.left;
  if (mx < PAD_L || mx > PAD_L + chartW) { tooltip.style.display = 'none'; return; }
  const idx = Math.max(0, Math.min(bars.length - 1, Math.round((mx - PAD_L) / chartW * (bars.length - 1))));
  const b = bars[idx];
  if (!b) { tooltip.style.display = 'none'; return; }
  const d = new Date(b.time * 1000);
  const dateStr = d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  const chg = bars[idx - 1] ? ((b.close - bars[idx - 1].close) / bars[idx - 1].close * 100) : 0;
  const chgStr = (chg >= 0 ? '+' : '') + chg.toFixed(2) + '%';
  const chgCol = chg >= 0 ? '#00e676' : '#ff3d71';
  const vol = b.volume ? (b.volume >= 1e6 ? (b.volume / 1e6).toFixed(1) + 'M' : b.volume >= 1e3 ? (b.volume / 1e3).toFixed(0) + 'K' : b.volume) : '—';
  tooltip.innerHTML =
    `<span style="color:rgba(255,255,255,.5)">${dateStr}</span>\n` +
    `O <strong>${fmtPriceShort(b.open)}</strong>  H <strong>${fmtPriceShort(b.high)}</strong>  L <strong>${fmtPriceShort(b.low)}</strong>  C <strong>${fmtPriceShort(b.close)}</strong>\n` +
    `<span style="color:${chgCol}">${chgStr}</span>   Vol <span style="color:rgba(255,255,255,.6)">${vol}</span>` +
    (discoveryPrice ? `\n<span style="color:#4f8bff">Disc ${fmtPriceShort(discoveryPrice)}</span>` : '');
  // Position tooltip — always inside chart bounds, flip side near right edge
  const tipW = Math.min(260, chartW - 8);
  const cx = toX(idx);
  const leftPos = cx > PAD_L + chartW / 2 ? Math.max(4, cx - tipW - 4) : Math.min(cx + 8, PAD_L + chartW - tipW - 4);
  tooltip.style.maxWidth = tipW + 'px';
  tooltip.style.display = 'block';
  tooltip.style.left = leftPos + 'px';
  tooltip.style.top = '8px';
}

function fmtPriceShort(v) {
  if (v == null) return '—';
  if (v >= 1000) return v.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 1 });
  if (v >= 10)   return v.toFixed(2);
  return v.toFixed(3);
}

function nicePriceStep(min, max, targetLines) {
  const range = max - min;
  const raw = range / targetLines;
  const pow = Math.pow(10, Math.floor(Math.log10(raw)));
  const norm = raw / pow;
  const nice = norm < 1.5 ? 1 : norm < 3 ? 2 : norm < 7 ? 5 : 10;
  return nice * pow;
}

// ─── Score sparkline ──────────────────────────────────────────────────────────
function scoreSparklineHtml(sym){
  const hist=scoreHistory[sym];
  if(!hist||hist.length<2) return'';
  const scores=hist.slice(-10).map(h=>h.s);
  const maxS=8,w=44,h=14;
  const xStep=(w-2)/Math.max(scores.length-1,1);
  const pts=scores.map((s,i)=>`${Math.round(i*xStep+1)},${Math.round(h-1-(s/maxS)*(h-2))}`).join(' ');
  const last=scores[scores.length-1],first=scores[0];
  const col=last>first?'var(--green)':last<first?'#ff5252':'var(--text3)';
  return`<svg width="${w}" height="${h}" class="score-spark"><polyline points="${pts}" fill="none" stroke="${col}" stroke-width="1.5" stroke-linejoin="round"/></svg>`;
}

function velocityOf(sym){
  // Use server-enriched velocity if already in scanData, otherwise compute from scoreHistory
  const r=scanData.find(x=>x.sym===sym);
  if(r&&r.velocity) return r.velocity;
  const hist=scoreHistory[sym]||[];
  const pts=hist.slice(-3).map(h=>h.s);
  if(pts.length<2) return{slope:0,direction:'stable'};
  const n=pts.length,mx=(n-1)/2,my=pts.reduce((a,b)=>a+b,0)/n;
  let num=0,den=0;
  pts.forEach((v,i)=>{num+=(i-mx)*(v-my);den+=(i-mx)**2;});
  const slope=den?+(num/den).toFixed(2):0;
  return{slope,direction:slope>=0.5?'rising':slope<=-0.5?'falling':'stable'};
}

function velocityArrowHtml(sym){
  const v=velocityOf(sym);
  if(v.direction==='rising') return`<span style="color:var(--green);font-size:11px;font-weight:700" title="Score rising (slope +${v.slope}/scan)">↗</span>`;
  if(v.direction==='falling') return`<span style="color:#ff5252;font-size:11px;font-weight:700" title="Score falling (slope ${v.slope}/scan)">↘</span>`;
  return`<span style="color:var(--text3);font-size:11px" title="Score stable">→</span>`;
}

// ─── TradingView Actions ──────────────────────────────────────────────────────
async function openOnChart(sym){
  const btn=event?.currentTarget;
  if(btn){btn.textContent='…';btn.disabled=true;}
  try{
    await fetch('/api/tv/open-symbol',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({sym})});
    if(btn){btn.textContent='✓ '+t('tvOpenChart');setTimeout(()=>{btn.textContent=t('tvOpenChart');btn.disabled=false;},1500);}
  }catch(e){if(btn){btn.textContent=t('tvOpenChart');btn.disabled=false;}}
}

async function tvCopySymbol(sym){
  try{ await navigator.clipboard.writeText(tickerDisplay(sym)); }catch(_){}
  const btn=event?.currentTarget;
  if(btn){const o=btn.textContent;btn.textContent='✓ Copied';setTimeout(()=>btn.textContent=o,1200);}
}

function tvAddToWatchlist(sym,name,market){
  // 1. Add to scan universe
  const mkt=market||marketOf(sym)||'tasi';
  if(!universeData[mkt]) universeData[mkt]=[];
  const alreadyInUniverse=universeData[mkt].some(s=>(typeof s==='object'?s.sym:s)===sym);
  if(!alreadyInUniverse){
    universeData[mkt].push({sym,name:name||tickerDisplay(sym)});
    fetch('/api/universe',{method:'PUT',headers:{'Content-Type':'application/json'},body:JSON.stringify({market:mkt,symbols:universeData[mkt]})});
  }
  // 2. Also add to Portfolio watchlist (the internal ☆/★ list)
  watchlistData=JSON.parse(localStorage.getItem('mawjah_watchlist')||'[]');
  const wasWatched=watchlistData.includes(sym);
  if(!wasWatched){
    watchlistData=[...watchlistData,sym];
    localStorage.setItem('mawjah_watchlist',JSON.stringify(watchlistData));
    renderWatchlistPanel();
  }
  // Update button and drawer star
  const btn=event?.currentTarget;
  const nowWatched=watchlistData.includes(sym);
  if(btn){
    btn.textContent=alreadyInUniverse&&wasWatched?'★ Watchlisted':'★ Added to Watchlist';
    btn.style.color='var(--yellow)';
    setTimeout(()=>{btn.textContent=nowWatched?'★ Watchlist':'⭐ Watchlist';btn.style.color='';},1500);
  }
  // Sync the sig-wl-btn inside the drawer
  if(openDrawerData?.sym===sym){
    const sigBtn=document.getElementById('sig-wl-btn');
    if(sigBtn){sigBtn.textContent='★ Watchlist';sigBtn.classList.add('sig-watch-on');}
  }
  // Update all star icons in the table
  document.querySelectorAll(`.wl-star[data-sym="${sym}"]`).forEach(el=>{el.textContent='★';el.classList.add('wl-active');});
}

function renderTVActions(r){
  const el=document.getElementById('d-tv-actions');
  if(!el) return;
  const watched=isWatched(r.sym);
  el.innerHTML=`
    <button class="tv-btn" onclick="openOnChart('${r.sym}')">${t('tvOpenChart')}</button>
    <button class="tv-btn${watched?' tv-btn-watched':''}" id="d-tv-wl-btn" onclick="tvAddToWatchlist('${r.sym}','${r.name.replace(/'/g,"\\'")}','${marketOf(r.sym)}')">${watched?'★ Watchlist':'⭐ Watchlist'}</button>
    <button class="tv-btn" onclick="tvCopySymbol('${r.sym}')">${t('tvCopySymbol')}</button>
    <button class="tv-btn tv-btn-warn" onclick="openAddAlertRuleModal('${r.sym}','${r.name.replace(/'/g,"\\'")}')">📋 Smart Rule</button>`;
}

// ─── Multi-timeframe alignment ────────────────────────────────────────────────
async function loadTFAlignment(sym){
  const el=document.getElementById('tf-align-content');
  if(!el) return;
  el.innerHTML=`<div class="tf-loading"><span class="spin">⟳</span> ${t('tfLoading')}</div>`;
  try{
    const d=await fetch('/api/tf-align?sym='+encodeURIComponent(sym)).then(r=>r.json());
    if(d.error){el.innerHTML=`<div class="tf-loading" style="color:var(--red)">${d.error}</div>`;return;}
    const tfHtml=(data,label)=>{
      if(!data) return`<div class="tf-col"><div class="tf-label">${label}</div><div class="tf-row"><span>—</span></div></div>`;
      const emaOk=data.ema_stack,a200ok=data.above_200,rsiOk=data.rsi>=52&&data.rsi<78;
      const ok=(v,lbl)=>`<div class="tf-row"><span>${lbl}</span><span class="${v?'tf-pass':'tf-fail'}">${v?'✓':'✗'}</span></div>`;
      const score=[emaOk,a200ok,rsiOk].filter(Boolean).length;
      const col=score===3?'var(--green)':score===2?'var(--yellow)':'#ff5252';
      return`<div class="tf-col"><div class="tf-label" style="color:${col}">${label} ${score}/3</div>${ok(emaOk,'EMA')}${ok(a200ok,'EMA200')}<div class="tf-row"><span>RSI</span><span class="${rsiOk?'tf-pass':data.rsi>=78?'tf-neutral':'tf-fail'}">${data.rsi?.toFixed(1)}</span></div></div>`;
    };
    el.innerHTML=`<div class="tf-grid">${tfHtml(d.h4,'4H')}${tfHtml(d.d,'Daily')}${tfHtml(d.w,'Weekly')}</div>`;
  }catch(e){el.innerHTML=`<div class="tf-loading" style="color:var(--red)">${e.message}</div>`;}
}

// ─── News ─────────────────────────────────────────────────────────────────────
async function loadNewsForDrawer(sym){
  const el=document.getElementById('news-content');
  if(!el) return;
  el.innerHTML=`<div class="tf-loading"><span class="spin">⟳</span></div>`;
  try{
    const d=await fetch('/api/news?sym='+encodeURIComponent(sym)).then(r=>r.json());
    if(!d.articles||!d.articles.length){
      el.innerHTML=`<div class="news-no-token">${t(d.error?'newsNone':'newsNoToken')}</div>`;
      return;
    }
    el.innerHTML=d.articles.map(a=>{
      const date=new Date(a.datetime*1000).toLocaleDateString();
      const sent=a.sentiment;
      const sentHtml=sent>0.1?`<span class="news-sentiment-pos">▲ Positive</span>`:sent<-0.1?`<span class="news-sentiment-neg">▼ Negative</span>`:'';
      return`<div class="news-item">
        <div class="news-headline"><a href="${a.url}" target="_blank">${a.headline}</a></div>
        <div class="news-meta"><span>${date}</span><span>${a.source}</span>${sentHtml}</div>
      </div>`;
    }).join('');
  }catch(e){el.innerHTML=`<div class="news-no-token">${e.message}</div>`;}
}

// ─── Smart Alert Rules ────────────────────────────────────────────────────────
async function loadAlertRules(){
  try{ alertRulesData=await fetch('/api/alert-rules').then(r=>r.json()); }catch(_){}
  renderAlertRules();
}

function renderAlertRules(){
  const el=document.getElementById('alert-rules-list');
  if(!el) return;
  if(!alertRulesData.length){el.innerHTML=`<div style="padding:12px;font-size:12px;color:var(--text3);text-align:center">${t('ruleEmpty')}</div>`;return;}
  el.innerHTML=alertRulesData.map(r=>`<div class="rule-row">
    <span class="rule-name">${r.name}</span>
    <span class="rule-cond">${tickerDisplay(r.sym)} ${r.field} ${r.op} ${r.threshold}</span>
    <span class="rule-last">${r.lastTriggered||'Never'}</span>
    <button class="pos-del-btn" onclick="deleteAlertRule('${r.id}')">✕</button>
  </div>`).join('');
}

async function addAlertRule(){
  const name=(document.getElementById('rule-name')?.value||'').trim();
  const sym=(document.getElementById('rule-sym')?.value||'').trim().toUpperCase();
  const field=document.getElementById('rule-field')?.value||'score';
  const op=document.getElementById('rule-op')?.value||'gte';
  const threshold=document.getElementById('rule-threshold')?.value||'';
  if(!name||!sym||!threshold) return;
  const threshVal=field==='bias'?threshold:parseFloat(threshold);
  try{
    const r=await fetch('/api/alert-rules',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({name,sym,field,op,threshold:threshVal})}).then(x=>x.json());
    if(r.ok){ alertRulesData.push(r.rule); renderAlertRules(); ['rule-name','rule-sym','rule-threshold'].forEach(id=>{const el=document.getElementById(id);if(el)el.value='';}); }
  }catch(e){alert(e.message);}
}

async function deleteAlertRule(id){
  try{
    await fetch('/api/alert-rules/'+id,{method:'DELETE'});
    alertRulesData=alertRulesData.filter(r=>r.id!==id);
    renderAlertRules();
  }catch(e){alert(e.message);}
}

function openAddAlertRuleModal(sym,name){
  // Pre-fill the alert rule form and switch to criteria tab
  switchTab('criteria',document.querySelector('.tab:nth-child(3)'));
  setTimeout(()=>{
    const el=document.getElementById('rule-sym'); if(el) el.value=sym;
    const nl=document.getElementById('rule-name'); if(nl) nl.value=name+' Score≥6';
    const tl=document.getElementById('rule-threshold'); if(tl) tl.value='6';
  },100);
}

// ─── Portfolio Heat Map (treemap) ─────────────────────────────────────────────
function layoutTreemap(items,x,y,w,h){
  if(!items.length) return[];
  if(items.length===1) return[{...items[0],x,y,w,h}];
  const total=items.reduce((s,i)=>s+i.value,0);
  let cum=0,splitAt=1;
  const half=total/2;
  for(let i=0;i<items.length;i++){cum+=items[i].value;if(cum>=half){splitAt=i+1;break;}}
  const left=items.slice(0,splitAt),right=items.slice(splitAt);
  const lf=left.reduce((s,i)=>s+i.value,0)/total;
  if(w>=h){const lw=Math.round(w*lf);return[...layoutTreemap(left,x,y,lw,h),...layoutTreemap(right,x+lw,y,w-lw,h)];}
  else{const lh=Math.round(h*lf);return[...layoutTreemap(left,x,y,w,lh),...layoutTreemap(right,x,y+lh,w,h-lh)];}
}

function renderHeatMap(){
  const svg=document.getElementById('heatmap-svg');
  const section=document.getElementById('pos-heatmap');
  if(!svg||!section) return;
  const entries=Object.values(positionsData).filter(p=>p.sym&&!p.sym.startsWith('_'));
  if(!entries.length){section.style.display='none';return;}
  section.style.display='block';
  const W=svg.parentElement.offsetWidth||400,H=120;
  svg.setAttribute('viewBox',`0 0 ${W} ${H}`);
  svg.setAttribute('width',W);
  const items=entries.map(pos=>{
    const scanRow=scanData.find(r=>r.sym===pos.sym);
    const curP=scanRow?.price||pos.entry_price;
    const value=(pos.shares||1)*curP;
    const pct=((curP-pos.entry_price)/pos.entry_price*100);
    return{...pos,value,pct};
  }).sort((a,b)=>b.value-a.value);
  const layout=layoutTreemap(items,0,0,W,H);
  svg.innerHTML=layout.map(item=>{
    const pct=item.pct??0;
    const fill=pct>=3?'#00695c':pct>=0?'#1b5e20':pct>=-3?'#b71c1c':'#7f0000';
    const textCol='rgba(255,255,255,.9)';
    const pad=3;
    const tw=item.w-pad*2,th=item.h-pad*2;
    if(tw<20||th<14) return`<rect x="${item.x+1}" y="${item.y+1}" width="${item.w-2}" height="${item.h-2}" rx="3" fill="${fill}"/>`;
    return`<g onclick="openDrawer(scanData.find(r=>r.sym==='${item.sym}'))" style="cursor:pointer">
      <rect x="${item.x+1}" y="${item.y+1}" width="${item.w-2}" height="${item.h-2}" rx="3" fill="${fill}" opacity=".85"/>
      <text x="${item.x+item.w/2}" y="${item.y+item.h/2-4}" text-anchor="middle" font-size="${Math.min(13,tw/3+4)}" font-weight="700" fill="${textCol}" font-family="SF Mono,Fira Code,monospace">${tickerDisplay(item.sym)}</text>
      <text x="${item.x+item.w/2}" y="${item.y+item.h/2+9}" text-anchor="middle" font-size="${Math.min(11,tw/4+3)}" fill="${textCol}" opacity=".8">${pct>=0?'+':''}${pct.toFixed(1)}%</text>
    </g>`;
  }).join('');
}

// ─── Dividend tracker ─────────────────────────────────────────────────────────
const divCache={};
async function fetchDividends(sym){
  if(divCache[sym]!==undefined) return divCache[sym];
  try{
    const d=await fetch('/api/dividends?sym='+encodeURIComponent(sym)).then(r=>r.json());
    divCache[sym]=d.dividends||[];
    return divCache[sym];
  }catch(_){divCache[sym]=[];return[];}
}

async function addDividendBadges(){
  const rows=document.querySelectorAll('#positions-body tr[data-pos-sym]');
  rows.forEach(async row=>{
    const sym=row.dataset.posSym;
    if(!sym) return;
    const divs=await fetchDividends(sym);
    if(!divs.length) return;
    const next=divs[0];
    const yield_pct=next.yield!=null?(next.yield*100).toFixed(1)+'%':null;
    const nameCell=row.querySelector('td:nth-child(2)');
    if(nameCell&&yield_pct&&!nameCell.querySelector('.div-badge')){
      nameCell.insertAdjacentHTML('beforeend',`<span class="div-badge" title="Dividend yield ${yield_pct}">💰 ${yield_pct}</span>`);
    }
  });
}

// ─── Industry Benchmarks (sector-average P/E, P/B, D/E) ──────────────────────
const SECTOR_BENCHMARKS = {
  banking:    { pe:10,  pb:1.2, de:3.5 }, energy:     { pe:12,  pb:1.5, de:0.6 },
  petrochem:  { pe:14,  pb:2.0, de:0.5 }, telecom:    { pe:18,  pb:2.5, de:1.2 },
  utility:    { pe:20,  pb:1.8, de:1.5 }, food:       { pe:22,  pb:2.5, de:0.4 },
  retail:     { pe:20,  pb:3.0, de:0.6 }, health:     { pe:25,  pb:3.5, de:0.3 },
  realestate: { pe:15,  pb:1.5, de:0.8 }, cement:     { pe:16,  pb:1.8, de:0.4 },
  industrial: { pe:18,  pb:2.0, de:0.5 }, insurance:  { pe:14,  pb:1.6, de:2.0 },
  tech:       { pe:28,  pb:5.0, de:0.3 }, financials: { pe:14,  pb:1.8, de:2.5 },
  consumer:   { pe:22,  pb:3.5, de:0.5 }, retailus:   { pe:24,  pb:4.0, de:0.7 },
  healthus:   { pe:22,  pb:4.0, de:0.4 }, energyus:   { pe:13,  pb:1.6, de:0.5 },
  etf_equity: { pe:22,  pb:3.5, de:null}, metal:      { pe:15,  pb:1.5, de:0.3 },
  crude:      { pe:12,  pb:1.4, de:0.5 }, other:      { pe:18,  pb:2.0, de:0.6 },
};

// ─── Global Markets Overview ──────────────────────────────────────────────────
async function loadMarketsPanel(force=false){
  const grid=document.getElementById('mkt-grid');
  const btn=document.getElementById('mkt-refresh-btn');
  if(btn){btn.disabled=true;btn.innerHTML='<span class="spin">⟳</span>';}
  if(grid&&!force) grid.innerHTML='<div class="mkt-loading"><span class="spin">⟳</span><span>'+t('mktLoading')+'</span></div>';
  try{
    const url='/api/markets/overview'+(force?'?force=1':'');
    const d=await fetch(url).then(r=>r.json());
    if(d.error){
      if(grid) grid.innerHTML=`<div style="color:var(--text3);font-size:12px;padding:16px">${d.error}</div>`;
    } else {
      renderMarketsPanel(d);
    }
  }catch(e){
    if(grid) grid.innerHTML=`<div style="color:var(--red);font-size:12px;padding:16px">${e.message}</div>`;
  }finally{
    if(btn){btn.disabled=false;btn.innerHTML=t('mktRefresh');}
  }
  // Load macro panel alongside market data
  loadMacroPanel(force);
  loadWhaleTab(force);
}

// ── Market helper (mirrors server logic) ──────────────────────────────────────
function marketFromSym(sym) {
  if (!sym) return 'us';
  if (sym.startsWith('TADAWUL:')) return 'tasi';
  if (sym.includes('USD') || sym.includes('BTC') || sym.includes('ETH')) return 'crypto';
  if (['TVC:','NYMEX:','COMEX:'].some(p => sym.startsWith(p))) return 'commodity';
  return 'us';
}
const MARKET_META = {
  tasi:      { flag: '🇸🇦', label: 'TASI', color: '#33d46a'   },
  us:        { flag: '🇺🇸', label: 'US Equity', color: '#5ba3ff' },
  crypto:    { flag: '₿',   label: 'Crypto', color: '#ffd740'  },
  commodity: { flag: '🥇',  label: 'Commodities', color: '#ffaa33' },
};

async function loadPlaybook() {
  const el = document.getElementById('playbook-panel');
  if (!el) return;
  try {
    const d = await fetch('/api/playbook').then(r => r.json());
    if (!d.ok && d.error) { el.innerHTML = `<div style="color:var(--text3);font-size:12px;padding:8px 0">${d.error}</div>`; return; }

    const moodCol  = d.market_mood === 'Good' ? 'var(--green)' : d.market_mood === 'Cautious' ? 'var(--yellow)' : '#ff5252';
    const regCol   = d.market_regime === 'bull' ? 'var(--green)' : d.market_regime === 'bear' ? '#ff5252' : 'var(--text2)';
    const riskCol  = d.risk_posture === 'Aggressive' ? 'var(--green)' : d.risk_posture === 'Defensive' ? '#ff5252' : 'var(--yellow)';

    const moodTip  = d.market_mood === 'Good'     ? 'More than 55% of scanned stocks have bullish signals — market conditions favor new entries.'
                   : d.market_mood === 'Cautious' ? '35–55% of stocks are bullish — mixed conditions. Be selective, size smaller.'
                   :                                'Below 35% bullish — market is weak. Avoid new longs, protect open positions.';
    const regTip   = d.market_regime === 'bull'   ? 'Dominant regime: Bullish — most stocks are above their trend lines. Favor long setups.'
                   : d.market_regime === 'bear'   ? 'Dominant regime: Bearish — most stocks are below their trend lines. Reduce exposure.'
                   :                                'Dominant regime: Neutral/Range — no clear directional edge. Trade smaller, tighter stops.';
    const riskTip  = d.risk_posture === 'Aggressive' ? 'Conditions support larger position sizes and more active trading — strong bull regime with high breadth.'
                   : d.risk_posture === 'Defensive'  ? 'Risk-off posture recommended — reduce position sizes, protect profits, and avoid new setups.'
                   :                                   'Be selective — only the highest-conviction setups (score 7+) justify new entries right now.';

    // Header strip
    const header = `<div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;margin-bottom:12px">
      <span style="font-size:13px;font-weight:800;color:${moodCol}" title="Market Mood::${moodTip}">${d.market_mood === 'Good' ? '🟢' : d.market_mood === 'Cautious' ? '🟡' : '🔴'} ${d.market_mood}</span>
      <span style="font-size:11px;color:${regCol};font-weight:700;padding:2px 8px;background:${regCol}18;border-radius:10px;border:1px solid ${regCol}33" title="Market Regime::${regTip}">${d.market_regime?.toUpperCase()}</span>
      <span style="font-size:11px;color:${riskCol};font-weight:700;padding:2px 8px;background:${riskCol}18;border-radius:10px;border:1px solid ${riskCol}33" title="Risk Posture::${riskTip}">⚖ ${d.risk_posture}</span>
      <span style="margin-inline-start:auto;font-size:10px;color:var(--text3)" title="Scan breadth — ${d.bull_pct}% of ${d.scanned} stocks are in buy territory (${d.buy_count} buys, ${d.sell_count} sells)">${d.bull_pct}% bullish · ${d.buy_count} buys · ${d.sell_count} sells · ${d.scanned} scanned</span>
    </div>`;

    // Top setups — grouped by market
    const setups = d.top_setups || [];
    let setupsHtml = '';
    if (setups.length) {
      // Group by market
      const byMkt = {};
      setups.forEach(s => {
        const mkt = marketFromSym(s.sym);
        if (!byMkt[mkt]) byMkt[mkt] = [];
        byMkt[mkt].push(s);
      });
      const mktOrder = ['tasi','us','crypto','commodity'];
      const mktSections = mktOrder.filter(m => byMkt[m]).map(mkt => {
        const meta = MARKET_META[mkt];
        const cards = byMkt[mkt].map(s => {
          const velArrow = s.velocity?.direction === 'rising'  ? '<span style="color:var(--green)" title="Score rising — momentum building">↗</span>'
                         : s.velocity?.direction === 'falling' ? '<span style="color:#ff5252" title="Score falling — setup weakening">↘</span>'
                         :                                       '<span style="color:var(--text3)" title="Score stable">→</span>';
          const biasCol = ['STRONG BUY','BUY'].includes(s.bias) ? 'var(--green)' : '#ff5252';
          const coilBadge = s.atr_pct_rank != null && s.atr_pct_rank <= 25
            ? `<div style="font-size:9px;color:var(--accent);margin-top:3px" title="Coiling::ATR in the bottom 25% of its range — volatility is compressed. Compressed volatility often precedes a sharp directional move. Watch for volume expansion as the trigger.">⬦ Coiling</div>`
            : '';
          return `<div style="background:rgba(255,255,255,.03);border:1px solid var(--border);border-radius:6px;padding:8px 10px;cursor:pointer;transition:border-color .15s" onmouseenter="this.style.borderColor='var(--border2)'" onmouseleave="this.style.borderColor='var(--border)'" onclick="openDrawerBySym('${s.sym}')" title="${s.name}::Score ${s.score}/${s.maxScore||9} · ${s.bias} · Click to open full analysis">
              <div style="display:flex;align-items:center;gap:4px;margin-bottom:3px">
                <span style="font-family:monospace;font-size:11px;font-weight:700;color:var(--accent)">${tickerDisplay(s.sym)}</span>
                ${velArrow}
                <span style="margin-inline-start:auto;font-size:10px;font-weight:700;color:${biasCol}">${s.score}/${s.maxScore||9}</span>
              </div>
              <div style="font-size:10px;color:var(--text2);overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${s.name}</div>
              ${coilBadge}
            </div>`;
        }).join('');
        return `<div style="margin-bottom:10px">
          <div style="font-size:9px;font-weight:700;color:${meta.color};text-transform:uppercase;letter-spacing:.7px;margin-bottom:5px;display:flex;align-items:center;gap:4px">
            <span>${meta.flag}</span><span>${meta.label}</span>
          </div>
          <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(145px,1fr));gap:6px">${cards}</div>
        </div>`;
      }).join('');
      setupsHtml = `<div style="margin-bottom:12px">
        <div style="font-size:10px;font-weight:700;color:var(--text3);text-transform:uppercase;letter-spacing:.6px;margin-bottom:8px" title="Top Setups::The highest-conviction buy signals from the last scan — at least score 6+, rising or stable momentum, grouped by market. Click any card to open the full analysis.">Top Setups</div>
        ${mktSections}
      </div>`;
    }

    // Position alerts (only if any flagged)
    const alertRows = (d.position_alerts || []).filter(a => a.action !== 'HOLD');
    const alertsHtml = alertRows.length
      ? `<div style="margin-bottom:12px">
          <div style="font-size:10px;font-weight:700;color:var(--text3);text-transform:uppercase;letter-spacing:.6px;margin-bottom:6px" title="Position Alerts::Your open positions that are showing exit warning signals — 2+ criteria have turned negative. EXIT means act now; WATCH means prepare.">Position Alerts</div>
          ${alertRows.map(a => {
            const ac = a.action === 'EXIT' ? '#ff5252' : 'var(--yellow)';
            const tipMsg = a.action === 'EXIT'
              ? `${a.sym} — 2 or more exit criteria triggered. Consider closing or reducing this position.`
              : `${a.sym} — 1 warning signal. Monitor closely on the next scan.`;
            return `<div style="display:flex;align-items:center;gap:8px;padding:5px 8px;background:${ac}0d;border:1px solid ${ac}33;border-radius:5px;margin-bottom:4px;font-size:11px;cursor:pointer" onclick="openDrawerBySym('${a.sym}')" title="${tipMsg}">
              <span style="font-weight:700;color:var(--text)">${tickerDisplay(a.sym)}</span>
              <span style="color:var(--text2)">${a.name}</span>
              ${(a.exitSignals||[]).length ? `<span style="font-size:9px;color:var(--text3)">${a.exitSignals[0]}</span>` : ''}
              <span style="margin-inline-start:auto;font-weight:800;color:${ac};font-size:10px">${a.action}</span>
            </div>`;
          }).join('')}
        </div>`
      : '';

    // Top sectors
    const topSectors = (d.sector_summary || []).slice(0, 6);
    const sectorsHtml = topSectors.length
      ? `<div>
          <div style="font-size:10px;font-weight:700;color:var(--text3);text-transform:uppercase;letter-spacing:.6px;margin-bottom:6px" title="Sector Leaders::Which sectors have the highest proportion of bullish stocks. 60%+ = sector in strong uptrend. 40–60% = mixed. Below 40% = sector in decline.">Sector Leaders</div>
          <div style="display:flex;gap:5px;flex-wrap:wrap">
            ${topSectors.map(s => {
              const c = s.bull_pct >= 60 ? 'var(--green)' : s.bull_pct >= 40 ? 'var(--yellow)' : '#ff5252';
              return `<span style="font-size:10px;font-weight:700;padding:2px 8px;border-radius:10px;background:${c}18;color:${c};border:1px solid ${c}33;cursor:default" title="${s.sector}::${s.bull_pct}% of stocks in this sector have a bullish signal right now (${s.total} stocks scanned).">${s.sector} ${s.bull_pct}%</span>`;
            }).join('')}
          </div>
        </div>`
      : '';

    const ts = d.scanned_at ? `<div style="font-size:10px;color:var(--text3);margin-top:10px">Last scan: ${new Date(d.scanned_at).toLocaleTimeString()}</div>` : '';
    el.innerHTML = `<div style="background:rgba(255,255,255,.018);border:1px solid var(--border);border-radius:8px;padding:12px 14px">${header}${setupsHtml}${alertsHtml}${sectorsHtml}${ts}</div>`;
  } catch(e) {
    el.innerHTML = `<div style="color:var(--red);font-size:12px;padding:8px 0">Error: ${e.message}</div>`;
  }
}

function openDrawerBySym(sym) {
  const r = scanData.find(x => x.sym === sym);
  if (r) openDrawer(r);
}

function renderMarketsPanel(d){
  const grid=document.getElementById('mkt-grid');
  const ts=document.getElementById('mkt-ts');
  if(ts&&d.ts){ const age=Math.round((Date.now()-d.ts)/60000); ts.textContent=d.cached?`Cached ${age}m ago`:'Just updated'; }
  if(!grid) return;
  const fmt=v=>v!=null?v.toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:2}):'—';
  grid.innerHTML=(d.data||[]).map(m=>{
    if(m.error) return`<div class="mkt-card"><div class="mkt-flag-label"><span class="mkt-flag">${m.flag}</span><span class="mkt-label">${m.label}</span></div><div class="mkt-err">${m.error}</div></div>`;
    const chgCol=m.change_pct>0?'var(--green)':m.change_pct<0?'#ff5252':'var(--text2)';
    const trendCls=m.trend==='bullish'?'regime-bull':m.trend==='bearish'?'regime-bear':'regime-range';
    const trendLbl=m.trend==='bullish'?t('mktBull'):m.trend==='bearish'?t('mktBear'):t('mktRange');
    const pos=m.pos52??50;
    return`<div class="mkt-card">
      <div class="mkt-flag-label"><span class="mkt-flag">${m.flag}</span><span class="mkt-label">${m.label}</span></div>
      <div class="mkt-price">${fmt(m.price)}</div>
      <div class="mkt-change" style="color:${chgCol}">${m.change_pct>0?'+':''}${m.change_pct}%</div>
      <span class="regime-trend ${trendCls}" style="font-size:10px;padding:2px 7px;margin-bottom:6px;display:inline-flex">${trendLbl}</span>
      <div class="mkt-metrics">
        <span>${t('mktRsi')}: <span class="mkt-metric-val" style="color:${m.rsi>=52?'var(--green)':m.rsi<=48?'#ff5252':'var(--yellow)'}">${m.rsi??'—'}</span></span>
        <span>${t('mkt20d')}: <span class="mkt-metric-val" style="color:${(m.perf20d??0)>=0?'var(--green)':'#ff5252'}">${m.perf20d!=null?(m.perf20d>=0?'+':'')+m.perf20d+'%':'—'}</span></span>
      </div>
      <div class="mkt-52w"><div class="mkt-52w-fill"></div><div class="mkt-52w-cur" style="inset-inline-start:${pos}%"></div></div>
    </div>`;
  }).join('');
}

// ── Opportunity signal definitions (mirrors server SIGNAL_DEFS) ──────────────
const OPP_DEFS = {
  STRONG_BUY_CONFIRMED:     { label:'Signal Confirmed',    icon:'✅', color:'#00c853', bg:'rgba(0,200,83,.13)',    tip:'Signal Confirmed::Score 7+ across all criteria — every major filter (trend, momentum, volume, weekly) is aligned. Highest conviction setup in the screener.' },
  MTF_CONFLUENCE:           { label:'Multi-TF Confluence', icon:'🎯', color:'#16a34a', bg:'rgba(22,163,74,.13)',   tip:'Multi-TF Confluence::The same bullish signal is confirmed on both the daily and weekly timeframe. Two timeframes pointing the same direction = higher probability of follow-through.' },
  PRE_BREAKOUT_COIL:        { label:'Pre-Breakout Coil',   icon:'🌀', color:'#3d8bff', bg:'rgba(61,139,255,.13)', tip:'Pre-Breakout Coil::Volatility (ATR) is compressed into its bottom 25% — the stock is in a "coil." Compressed volatility historically precedes sharp moves. Score is rising and volume is starting to pick up.' },
  SMART_MONEY_ACCUMULATION: { label:'Smart Money',         icon:'🐳', color:'#0891b2', bg:'rgba(8,145,178,.13)',  tip:'Smart Money::Unusual institutional-scale activity detected — block deals, above-average whale score, or insider buying — alongside a valid technical setup. The big money is moving before the price does.' },
  SCORE_TRAJECTORY:         { label:'Building Momentum',   icon:'📈', color:'#059669', bg:'rgba(5,150,105,.13)',  tip:'Building Momentum::Score has been rising for 2+ consecutive scans, projecting a potential buy signal in the next 1–2 scan cycles. Not a buy yet — a "pre-buy" alert to watch closely.' },
  STEALTH_RS_LEADER:        { label:'Stealth RS Leader',   icon:'⚡', color:'#d97706', bg:'rgba(217,119,6,.13)',  tip:'Stealth RS Leader::Relative Strength vs. the index is in the top 20% of the universe, but the technical score hasn\'t fully caught up yet. Strong RS stocks tend to extend — this setup often triggers a full signal on the next scan.' },
  DIVERGENCE_REVERSAL:      { label:'Divergence Reversal', icon:'↩',  color:'#dc2626', bg:'rgba(220,38,38,.13)', tip:'Divergence Reversal::Price made a lower low but RSI made a higher low (bullish divergence) — hidden buying pressure is building beneath the surface. Divergences often precede reversals by 2–5 bars.' },
  INSIDER_TECHNICAL_SYNC:   { label:'Insider + Setup',     icon:'🔍', color:'#3d8bff', bg:'rgba(61,139,255,.13)', tip:'Insider + Setup::A director or executive recently bought shares with their own money AND the technical setup is valid. When insiders buy alongside a strong chart, conviction is very high.' },
  VOLATILITY_EXPANSION:     { label:'Volatility Breakout', icon:'💥', color:'#ea580c', bg:'rgba(234,88,12,.13)', tip:'Volatility Breakout::ATR is expanding (volatility increasing) alongside a rising score and volume surge — a move is underway and picking up speed. Momentum-style entry, smaller stop required.' },
};

// renderOppCard removed Phase 4 — Top Opportunities UI cut Phase 1 (score-derived, no edge). OPP_DEFS kept (used by Strategy Validation).

// loadOpportunities / refreshOpportunities / renderOpportunities removed Phase 4 — Top Opportunities UI cut Phase 1, /api/opportunities routes removed.

// ── Strategy Validation ────────────────────────────────────────────────────────

let svData = null; // cached API response
let svActiveTab = 'tracks';

function svTab(name) {
  svActiveTab = name;
  ['tracks','closed','leaderboard','insights'].forEach(t => {
    document.getElementById(`sv-panel-${t}`).style.display = t === name ? '' : 'none';
    document.getElementById(`svt-${t}`)?.classList.toggle('active', t === name);
  });
  if (name === 'insights') svRenderInsights();
}

function svPnlClass(pnl, status) {
  if (status === 'hit_stop') return 'stopped';
  if (status === 'hit_t2')   return 'hit_t2';
  if (pnl == null)           return 'pending';
  return pnl >= 0 ? 'win' : 'loss';
}

function svMilestoneHtml(m, capital) {
  if (!m) return `<div class="sv-milestone pending"><div class="sv-milestone-label">—</div><div class="sv-milestone-val" style="color:var(--text3)">—</div></div>`;
  const cls  = svPnlClass(m.pnl_pct, m.status);
  const val  = m.pnl_pct != null ? `${m.pnl_pct >= 0 ? '+' : ''}${m.pnl_pct.toFixed(2)}%` : 'Pending';
  const sar  = m.pnl_sar != null ? `${m.pnl_sar >= 0 ? '+' : ''}${m.pnl_sar.toFixed(0)} SAR` : '';
  const icon = m.status === 'hit_stop' ? '🛑' : m.status === 'hit_t2' ? '🎯' : m.status === 'hit_t1' ? '✓' : '';
  return `<div class="sv-milestone ${cls}">
    <div class="sv-milestone-label">${m.checkpoint}</div>
    <div class="sv-milestone-val">${icon}${val}</div>
    ${sar ? `<div class="sv-milestone-sar">${sar}</div>` : ''}
  </div>`;
}

function svRenderTracks(tracks, panel, onlyOpen) {
  const filtered = tracks.filter(t => onlyOpen ? t.status === 'tracking' : t.status !== 'tracking');
  if (!filtered.length) {
    panel.innerHTML = onlyOpen
      ? '<div class="sv-empty">No open tracks. Click 📌 on any opportunity card to start tracking it with SAR 20,000.</div>'
      : '<div class="sv-empty">No closed trades yet.</div>';
    return;
  }
  const OPP = OPP_DEFS || {};
  panel.innerHTML = filtered.map(t => {
    const def = OPP[t.signal_type] || { label: t.signal_type, icon: '•', color: '#888' };
    const ms  = t.milestones || {};
    const daysHeld = Math.round((Date.now() - new Date(t.tracked_at).getTime()) / 86400000);
    const latestMs = ['6m','3m','1m','1w'].map(cp => ms[cp]).find(m => m?.pnl_pct != null);
    const livePnlPct = latestMs?.pnl_pct;
    const liveSar    = latestMs?.pnl_sar;
    const pnlCol = livePnlPct == null ? 'var(--text3)' : livePnlPct >= 0 ? '#00c853' : '#ff5252';

    const outcomeLabel = t.status !== 'tracking'
      ? `<span style="font-size:10px;font-weight:700;padding:2px 7px;border-radius:3px;background:${t.status==='stopped'?'rgba(255,82,82,.15)':'rgba(0,200,83,.15)'};color:${t.status==='stopped'?'#ff5252':'#00c853'}">${t.status.toUpperCase()}</span>`
      : `<span style="font-size:10px;color:var(--text3)">${daysHeld}d held</span>`;

    // MAE/MFE visual excursion bar
    const mae = t.mae ?? 0, mfe = t.mfe ?? 0;
    const range = Math.max(10, Math.abs(mae) + mfe);
    const maeW  = Math.min(50, Math.abs(mae)/range*100);
    const mfeW  = Math.min(50, mfe/range*100);

    return `<div class="sv-track-card">
      <div class="sv-track-header">
        <span style="font-size:11px;font-weight:700;background:${def.color}22;color:${def.color};padding:2px 7px;border-radius:3px">${def.icon} ${def.label}</span>
        <span style="font-family:'JetBrains Mono',monospace;font-size:13px;font-weight:700;color:var(--accent)">${tickerDisplay(t.sym)}</span>
        <span style="font-size:11px;color:var(--text2)">${t.name||''}</span>
        ${t.conviction ? `<span style="font-size:10px;color:var(--text3)">conv ${t.conviction}</span>` : ''}
        ${outcomeLabel}
        ${livePnlPct != null ? `<span style="font-size:12px;font-weight:800;font-family:'JetBrains Mono',monospace;color:${pnlCol};margin-inline-start:auto">${livePnlPct>=0?'+':''}${livePnlPct.toFixed(2)}%</span>` : ''}
      </div>
      <div style="font-size:10px;color:var(--text3);margin-bottom:6px">
        Entry: ${t.entry_price?.toFixed(2)} SAR · ${t.shares?.toFixed(0)} shares · SAR ${(t.simulated_capital??20000).toLocaleString()} ·
        ${t.stop ? `Stop ${t.stop}` : ''}${t.target2 ? ` · T2 ${t.target2}` : ''}
        ${t.rsi ? ` · RSI ${t.rsi.toFixed(1)}` : ''}${t.mfi ? ` · MFI ${t.mfi}` : ''}${t.whale_score ? ` · Whale ${t.whale_score}/10` : ''}
      </div>
      <div class="sv-milestone-row">
        ${['1w','1m','3m','6m'].map(cp => svMilestoneHtml(ms[cp], t.simulated_capital)).join('')}
      </div>
      ${(mae || mfe) ? `<div class="sv-excursion-bar">
        <span style="color:#ff5252;width:32px;text-align:right;flex-shrink:0">↓${Math.abs(mae).toFixed(1)}%</span>
        <div class="sv-excursion-track">
          <div style="position:absolute;right:50%;width:${maeW}%;height:100%;background:rgba(255,82,82,.35);border-radius:3px 0 0 3px"></div>
          <div style="position:absolute;left:50%;width:${mfeW}%;height:100%;background:rgba(0,200,83,.35);border-radius:0 3px 3px 0"></div>
          <div style="position:absolute;left:50%;top:-2px;width:2px;height:10px;background:var(--text3)"></div>
        </div>
        <span style="color:#00c853;width:32px;flex-shrink:0">↑${mfe.toFixed(1)}%</span>
        <span style="font-size:9px;color:var(--text3)">MAE/MFE excursion</span>
      </div>` : ''}
      ${t.notes ? `<div style="font-size:11px;color:var(--text2);margin-top:6px;font-style:italic">"${t.notes}"</div>` : ''}
      <div style="display:flex;gap:6px;margin-top:8px">
        <button onclick="svAddNote(${t.id})" style="font-size:10px;padding:2px 8px;border-radius:4px;border:1px solid var(--border);background:var(--bg2);color:var(--text2);cursor:pointer">✏ Note</button>
        ${t.status === 'tracking' ? `<button onclick="svClose(${t.id})" style="font-size:10px;padding:2px 8px;border-radius:4px;border:1px solid rgba(255,82,82,.3);background:rgba(255,82,82,.08);color:#ff8080;cursor:pointer">✕ Close</button>` : ''}
        <button onclick="svDelete(${t.id})" style="font-size:10px;padding:2px 8px;border-radius:4px;border:1px solid var(--border);background:var(--bg2);color:var(--text3);cursor:pointer;margin-inline-start:auto">🗑</button>
      </div>
    </div>`;
  }).join('');
}

function svRenderLeaderboard(tracks) {
  const panel = document.getElementById('sv-panel-leaderboard');
  if (!panel) return;
  const allMs = tracks.flatMap(t => Object.values(t.milestones || {}));
  const withM1 = tracks.filter(t => t.milestones?.['1m']?.pnl_pct != null)
    .map(t => ({ ...t, ret: t.milestones['1m'].pnl_pct, win: t.milestones['1m'].pnl_pct > 0 }));

  if (withM1.length < 2) {
    panel.innerHTML = `<div class="sv-empty">Need at least 2 completed 1-month trades for leaderboard. Keep tracking!</div>`;
    return;
  }

  const byType = {};
  withM1.forEach(t => { (byType[t.signal_type] = byType[t.signal_type]||[]).push(t); });
  const stats = Object.entries(byType).map(([type, ts]) => ({
    type, count: ts.length,
    winRate: Math.round(ts.filter(t=>t.win).length/ts.length*100),
    avgRet:  +(ts.reduce((s,t)=>s+t.ret,0)/ts.length).toFixed(2),
    totalSar: +ts.reduce((s,t)=>s+((t.simulated_capital??20000)*t.ret/100),0).toFixed(0),
  })).sort((a,b) => b.winRate - a.winRate);

  const maxWR = Math.max(...stats.map(s => s.winRate));
  const OPP = OPP_DEFS || {};
  panel.innerHTML = `
    <div style="font-size:10px;color:var(--text3);margin-bottom:8px">Based on ${withM1.length} trades with 1-month data</div>
    ${stats.map(s => {
      const def = OPP[s.type] || { icon: '•', color: '#888', label: s.type };
      const col = s.winRate >= 60 ? '#00c853' : s.winRate >= 45 ? '#ffd600' : '#ff5252';
      const barW = Math.round(s.winRate/maxWR*100);
      return `<div class="sv-leaderboard-row">
        <span style="font-size:13px;flex-shrink:0">${def.icon}</span>
        <span style="font-size:10px;font-weight:700;width:140px;flex-shrink:0;color:${def.color}">${def.label}</span>
        <div class="sv-bar-wrap"><div class="sv-bar-fill" style="width:${barW}%;background:${col}"></div></div>
        <span style="font-size:12px;font-weight:800;font-family:'JetBrains Mono',monospace;color:${col};width:38px;text-align:right">${s.winRate}%</span>
        <span style="font-size:10px;color:${s.avgRet>=0?'#00c853':'#ff5252'};width:52px;text-align:right">${s.avgRet>=0?'+':''}${s.avgRet}%</span>
        <span style="font-size:9px;color:var(--text3);width:36px;text-align:right">${s.count}×</span>
        <span style="font-size:10px;font-weight:700;color:${s.totalSar>=0?'#00c853':'#ff5252'};width:72px;text-align:right">${s.totalSar>=0?'+':''}${s.totalSar} SAR</span>
      </div>`;
    }).join('')}`;
}

async function svRenderInsights() {
  const panel = document.getElementById('sv-panel-insights');
  if (!panel) return;
  panel.innerHTML = '<div class="sv-empty"><span class="spin">⟳</span> Computing edge map…</div>';
  try {
    const ins = await fetch('/api/strategy-validation/insights').then(r => r.json());
    if (ins.insufficient) {
      panel.innerHTML = `<div class="sv-empty">Need ${ins.needed} completed trades with 1-month data to compute insights. Currently: ${ins.count}. Keep tracking!</div>`;
      return;
    }

    let html = '';

    // Decay alerts (most urgent)
    if (ins.decayAlerts?.length) {
      html += ins.decayAlerts.map(d => `<div class="sv-decay-alert">
        ⚠ <strong>Signal Decay Detected:</strong> ${d.type} — lifetime win rate ${d.lifetime}% dropped to ${d.recent}% in last 20 trades (-${d.drop}%). Consider reducing size on this signal.
      </div>`).join('');
    }

    // Overall stats
    html += `<div class="sv-insight-block">
      <div class="sv-insight-title">Overall Performance</div>
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px">
        <div style="text-align:center"><div style="font-size:20px;font-weight:800;color:${ins.overallWinRate>=50?'#00c853':'#ff5252'}">${ins.overallWinRate}%</div><div style="font-size:10px;color:var(--text3)">Win Rate</div></div>
        <div style="text-align:center"><div style="font-size:20px;font-weight:800;color:${ins.overallAvgRet>=0?'#00c853':'#ff5252'}">${ins.overallAvgRet>=0?'+':''}${ins.overallAvgRet}%</div><div style="font-size:10px;color:var(--text3)">Avg Return</div></div>
        <div style="text-align:center"><div style="font-size:20px;font-weight:800;color:${ins.totalCapitalPnl>=0?'#00c853':'#ff5252'}">${ins.totalCapitalPnl>=0?'+':''}${ins.totalCapitalPnl?.toLocaleString()}</div><div style="font-size:10px;color:var(--text3)">Total P&L (SAR)</div></div>
      </div>
    </div>`;

    // RSI edge
    if (ins.rsiEdge?.length) {
      const best = ins.rsiEdge.filter(b => b.winRate != null).sort((a,b) => b.winRate - a.winRate)[0];
      html += `<div class="sv-insight-block">
        <div class="sv-insight-title">RSI Edge — Where Is Your Alpha?</div>
        ${best ? `<div style="font-size:11px;margin-bottom:8px;color:var(--text2)">💡 Your best RSI zone: <strong style="color:#00c853">${best.label}</strong> — ${best.winRate}% win rate (${best.count} trades)</div>` : ''}
        ${ins.rsiEdge.map(b => `<div style="display:flex;align-items:center;gap:8px;margin-bottom:4px;font-size:10px">
          <span style="width:45px;color:var(--text3)">${b.label}</span>
          <div style="flex:1;height:4px;background:var(--bg);border-radius:2px;overflow:hidden">
            <div style="width:${b.winRate??0}%;height:100%;background:${(b.winRate??0)>=60?'#00c853':(b.winRate??0)>=45?'#ffd600':'#ff5252'};border-radius:2px"></div>
          </div>
          <span style="width:28px;font-weight:700;color:${(b.winRate??0)>=60?'#00c853':(b.winRate??0)>=45?'#ffd600':'#ff5252'}">${b.winRate??'—'}%</span>
          <span style="color:var(--text3)">${b.count}×</span>
        </div>`).join('')}
      </div>`;
    }

    // Conviction calibration
    if (ins.convCalibration?.some(b => b.actual != null)) {
      html += `<div class="sv-insight-block">
        <div class="sv-insight-title">Conviction Calibration — Is Your Scoring Accurate?</div>
        <div style="font-size:10px;color:var(--text3);margin-bottom:8px">Compare predicted conviction vs actual win rate. Well-calibrated = higher score → higher win rate.</div>
        ${ins.convCalibration.map(b => {
          if (b.actual == null) return '';
          const gap = b.actual - (b.min + (b.max - b.min) / 2);
          const status = Math.abs(gap) < 10 ? '✓ calibrated' : gap > 10 ? '⬆ underestimating' : '⬇ overestimating';
          return `<div style="display:flex;align-items:center;gap:8px;margin-bottom:4px;font-size:10px">
            <span style="width:45px;color:var(--text3)">${b.label}</span>
            <div style="flex:1;height:4px;background:var(--bg);border-radius:2px;overflow:hidden">
              <div style="width:${b.actual}%;height:100%;background:var(--accent);border-radius:2px"></div>
            </div>
            <span style="width:28px;font-weight:700;color:var(--accent)">${b.actual}%</span>
            <span style="color:var(--text3)">${b.count}× · ${status}</span>
          </div>`;
        }).join('')}
      </div>`;
    }

    // Time decay
    if (ins.timeReturn?.length) {
      html += `<div class="sv-insight-block">
        <div class="sv-insight-title">Optimal Hold Period — When Do Winners Peak?</div>
        <div style="display:flex;gap:8px;flex-wrap:wrap">
          ${ins.timeReturn.map(t => `<div style="text-align:center;padding:6px 10px;background:var(--bg);border-radius:6px">
            <div style="font-size:12px;font-weight:800;color:${(t.avg??0)>=0?'#00c853':'#ff5252'}">${(t.avg??0)>=0?'+':''}${t.avg}%</div>
            <div style="font-size:9px;color:var(--text3);text-transform:uppercase">${t.cp} (${t.count}×)</div>
          </div>`).join('')}
        </div>
      </div>`;
    }

    // Regime sensitivity
    if (ins.regimeStats?.length) {
      html += `<div class="sv-insight-block">
        <div class="sv-insight-title">Regime Sensitivity</div>
        ${ins.regimeStats.map(r => `<div style="display:flex;gap:8px;align-items:center;font-size:11px;margin-bottom:3px">
          <span style="width:60px;text-transform:capitalize;color:var(--text2)">${r.regime}</span>
          <span style="font-weight:700;color:${(r.winRate??0)>=55?'#00c853':(r.winRate??0)>=40?'#ffd600':'#ff5252'}">${r.winRate??'—'}% win</span>
          <span style="color:var(--text3)">${r.avgRet!=null?(r.avgRet>=0?'+':'')+r.avgRet+'%':''} · ${r.count}×</span>
        </div>`).join('')}
      </div>`;
    }

    panel.innerHTML = html || '<div class="sv-empty">No insights yet.</div>';
  } catch(e) {
    panel.innerHTML = `<div style="color:var(--red);font-size:11px;padding:8px">${e.message}</div>`;
  }
}

async function loadStrategyValidation() {
  const tracksPanel = document.getElementById('sv-panel-tracks');
  const closedPanel = document.getElementById('sv-panel-closed');
  const lbPanel     = document.getElementById('sv-panel-leaderboard');
  if (!tracksPanel) return;
  tracksPanel.innerHTML = '<div class="sv-empty"><span class="spin">⟳</span> Updating milestones…</div>';
  try {
    const d = await fetch('/api/strategy-validation').then(r => r.json());
    svData = d;
    svRenderTracks(d.tracks, tracksPanel, true);
    svRenderTracks(d.tracks, closedPanel, false);
    svRenderLeaderboard(d.tracks);
    if (svActiveTab === 'insights') svRenderInsights();
  } catch(e) {
    tracksPanel.innerHTML = `<div style="color:var(--red);font-size:11px">${e.message}</div>`;
  }
}

async function svTrackOpp(dataStr) {
  try {
    const data = JSON.parse(dataStr);
    if (!confirm(`📌 Track ${data.name || data.sym}?\n\nSimulating SAR 20,000 at ${data.entry_price?.toFixed(2)} SAR\nStop: ${data.stop || '—'} · Target2: ${data.target2 || '—'}\n\nMilestones checked at 1W, 1M, 3M, 6M.`)) return;
    const r = await fetch('/api/strategy-validation/track', {
      method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data),
    }).then(r => r.json());
    if (r.error) { alert(r.error); return; }
    // Switch to strategy validation tab
    await loadStrategyValidation();
    svTab('tracks');
    // Scroll to section
    document.getElementById('sv-root')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  } catch(e) { alert(e.message); }
}

async function svAddNote(id) {
  const note = prompt('Add a note for this track:');
  if (!note) return;
  await fetch(`/api/strategy-validation/${id}/note`, {
    method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ note }),
  });
  loadStrategyValidation();
}

async function svClose(id) {
  const reason = prompt('Close reason (e.g. "target hit manually", "thesis changed"):');
  if (!reason) return;
  const price = parseFloat(prompt('Exit price (SAR):') || '0') || null;
  await fetch(`/api/strategy-validation/${id}/close`, {
    method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ reason, exit_price: price }),
  });
  loadStrategyValidation();
}

async function svDelete(id) {
  if (!confirm('Remove this track? This cannot be undone.')) return;
  await fetch(`/api/strategy-validation/${id}`, { method: 'DELETE' });
  loadStrategyValidation();
}

// ─── Virtual Portfolio ────────────────────────────────────────────────────────
async function loadVirtualPanel(){
  try{ const r=await fetch('/api/virtual'); virtualData=await r.json(); }catch(_){}
  renderVirtual();
}

function renderVirtual(){
  const vp=virtualData;
  if(!vp) return;
  const positions=Object.values(vp.positions||{});
  const fmt=(v,sym)=>ccySign(sym)+' '+fmtPrice(v,sym);
  const fmtCash=v=>ccySign('TADAWUL:1')+' '+fmtPrice(v,'TADAWUL:1'); // cash is SAR-basis
  // Compute portfolio value
  let invested=0, marketVal=0;
  positions.forEach(pos=>{
    const scanRow=scanData.find(r=>r.sym===pos.sym);
    const curP=scanRow?.price||pos.avg_cost;
    invested+=pos.shares*pos.avg_cost;
    marketVal+=pos.shares*curP;
  });
  const totalValue=convertPrice(vp.cash,'TADAWUL:1')+(positions.length?convertPrice(marketVal,'TADAWUL:1'):0);
  const startVal=convertPrice(vp.balance_start,'TADAWUL:1');
  const pnl=totalValue-startVal;
  const ret=startVal?((pnl/startVal)*100):0;
  const pnlCol=pnl>=0?'var(--green)':'#ff5252';
  // Summary cards
  const cashEl=document.getElementById('vp-cash'); if(cashEl){cashEl.textContent=fmtCash(vp.cash);cashEl.style.color='var(--accent)';}
  const valEl=document.getElementById('vp-value'); if(valEl){valEl.textContent=fmtCash(vp.cash+marketVal);valEl.style.color='var(--text)';}
  const pnlEl=document.getElementById('vp-pnl'); if(pnlEl){pnlEl.textContent=(pnl>=0?'+':'')+fmtCash(pnl*SAR_USD*(currency==='SAR'?1:1/SAR_USD));pnlEl.style.color=pnlCol;}
  const retEl=document.getElementById('vp-return'); if(retEl){retEl.textContent=(ret>=0?'+':'')+ret.toFixed(2)+'%';retEl.style.color=pnlCol;}
  // Holdings
  const hbody=document.getElementById('vp-holdings');
  if(hbody){
    if(!positions.length){
      hbody.innerHTML=`<tr><td colspan="9" style="padding:24px;text-align:center;color:var(--text3);font-size:12px">${t('vpEmpty')}</td></tr>`;
    } else {
      hbody.innerHTML=positions.map(pos=>{
        const scanRow=scanData.find(r=>r.sym===pos.sym);
        const curP=scanRow?.price??null;
        const curDisp=curP!=null?fmtPrice(curP,pos.sym):'—';
        const posVal=curP!=null?pos.shares*curP:null;
        const posValDisp=posVal!=null?fmt(posVal,pos.sym):'—';
        const pnlV=curP!=null?((curP-pos.avg_cost)*pos.shares):null;
        const pnlPct=curP!=null?((curP-pos.avg_cost)/pos.avg_cost*100):null;
        const pnlCls=pnlV==null?'':pnlV>=0?'pos-pnl-pos':'pos-pnl-neg';
        const pnlStr=pnlV!=null?`${pnlV>=0?'+':''}${fmt(pnlV,pos.sym)}`:'—';
        const pctStr=pnlPct!=null?` <span style="font-size:10px;opacity:.7">(${pnlPct>=0?'+':''}${pnlPct.toFixed(1)}%)</span>`:'';
        return`<tr>
          <td class="td-ticker">${tickerDisplay(pos.sym)}</td>
          <td>${pos.name}</td>
          <td style="font-family:monospace">${pos.shares}</td>
          <td style="font-family:monospace">${fmt(pos.avg_cost,pos.sym)}</td>
          <td style="font-family:monospace">${curDisp}</td>
          <td style="font-family:monospace">${posValDisp}</td>
          <td class="${pnlCls}" style="font-family:monospace;font-weight:700">${pnlStr}${pctStr}</td>
          <td class="${pnlCls}">${pnlPct!=null?(pnlPct>=0?'+':'')+pnlPct.toFixed(2)+'%':'—'}</td>
          <td><button class="pos-del-btn" onclick="quickVirtualSell('${pos.sym}',${pos.shares},${curP||pos.avg_cost})" title="Sell all">✕</button></td>
        </tr>`;
      }).join('');
    }
  }
  // History
  const histry=document.getElementById('vp-history');
  if(histry){
    const trades=vp.trades||[];
    if(!trades.length){
      histry.innerHTML=`<tr><td colspan="7" style="padding:16px;text-align:center;color:var(--text3);font-size:12px">${t('vpNoTrades')}</td></tr>`;
    } else {
      histry.innerHTML=trades.slice(0,30).map(tr=>{
        const badgeCls=tr.action==='buy'?'vp-buy-badge':'vp-sell-badge';
        const total=tr.shares*tr.price;
        return`<tr class="vp-trade-row">
          <td style="color:var(--text3)">${tr.date}</td>
          <td><span class="${badgeCls}">${tr.action}</span></td>
          <td class="td-ticker">${tickerDisplay(tr.sym)}</td>
          <td style="font-family:monospace">${tr.shares}</td>
          <td style="font-family:monospace">${fmtPrice(tr.price,tr.sym)}</td>
          <td style="font-family:monospace">${fmtPrice(total,tr.sym)}</td>
          <td style="font-family:monospace;color:var(--text2)">${fmtPrice(tr.cash_after,'TADAWUL:1')}</td>
        </tr>`;
      }).join('');
    }
  }
}

async function resetVirtual(){
  const bal=parseFloat(document.getElementById('vp-reset-bal')?.value||100000);
  if(!confirm(`Reset virtual portfolio to ${fmtPrice(bal,'TADAWUL:1')}?`)) return;
  try{
    const r=await fetch('/api/virtual/reset',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({balance:bal})}).then(x=>x.json());
    if(r.ok){virtualData=r.virtual;renderVirtual();}
  }catch(e){alert(e.message);}
}

async function virtualBuyFromDrawer(){
  const r=openDrawerData; if(!r) return;
  const sharesEl=document.getElementById('vp-buy-shares');
  const shares=parseInt(sharesEl?.value||0);
  if(!shares||shares<1){sharesEl?.focus();return;}
  // Show trade checklist before proceeding
  showTradeChecklist(r, ()=>_executevirtualBuy(r,sharesEl,shares));
}
async function _executevirtualBuy(r,sharesEl,shares){
  const statusEl=document.getElementById('vp-trade-status');
  if(statusEl){statusEl.textContent='…';statusEl.style.color='var(--text3)';}
  try{
    const res=await fetch('/api/virtual/buy',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({sym:r.sym,name:r.name,shares,price:r.price})}).then(x=>x.json());
    if(res.ok){
      virtualData=res.virtual;
      if(statusEl){statusEl.textContent=`✓ ${t('vpBuyOk')} ${shares} × ${fmtPrice(r.price,r.sym)}`;statusEl.style.color='var(--green)';}
      if(sharesEl) sharesEl.value='';
      renderVirtual();
      buildTradeTab(r); // refresh to show updated held shares
    } else {
      if(statusEl){statusEl.textContent=res.error||t('vpErrFunds');statusEl.style.color='var(--red)';}
    }
  }catch(e){if(statusEl){statusEl.textContent=e.message;statusEl.style.color='var(--red)';}}
}

async function virtualSellFromDrawer(){
  const r=openDrawerData; if(!r) return;
  const pos=virtualData?.positions?.[r.sym];
  if(!pos){return;}
  const sharesEl=document.getElementById('vp-buy-shares');
  const shares=parseInt(sharesEl?.value||0)||pos.shares;
  const statusEl=document.getElementById('vp-trade-status');
  if(statusEl){statusEl.textContent='…';statusEl.style.color='var(--text3)';}
  try{
    const res=await fetch('/api/virtual/sell',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({sym:r.sym,shares,price:r.price})}).then(x=>x.json());
    if(res.ok){
      virtualData=res.virtual;
      if(statusEl){statusEl.textContent=`✓ ${t('vpSellOk')} ${shares} × ${fmtPrice(r.price,r.sym)}`;statusEl.style.color='var(--green)';}
      if(sharesEl) sharesEl.value='';
      renderVirtual();
      buildTradeTab(r);
    } else {
      if(statusEl){statusEl.textContent=res.error||t('vpErrShares');statusEl.style.color='var(--red)';}
    }
  }catch(e){if(statusEl){statusEl.textContent=e.message;statusEl.style.color='var(--red)';}}
}

async function quickVirtualSell(sym,shares,price){
  if(!confirm(`Sell all ${shares} shares of ${tickerDisplay(sym)}?`)) return;
  try{
    const res=await fetch('/api/virtual/sell',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({sym,shares,price})}).then(x=>x.json());
    if(res.ok){virtualData=res.virtual;renderVirtual();}
    else alert(res.error||'Failed');
  }catch(e){alert(e.message);}
}

// ─── Drawer tabs ──────────────────────────────────────────────────────────────
function switchDrawerTab(tab,btn){
  document.querySelectorAll('.drawer-tab').forEach(b=>b.classList.remove('active'));
  document.querySelectorAll('.drawer-tab-panel').forEach(p=>p.classList.remove('dtab-active'));
  btn.classList.add('active');
  document.getElementById('dtab-'+tab).classList.add('dtab-active');
  // Lazy-load native chart when the Chart tab becomes visible
  if (tab === 'analysis') {
    const wrap = document.getElementById('drawer-native-chart');
    if (wrap && wrap.dataset.sym && !wrap.dataset.chartLoaded) {
      wrap.dataset.chartLoaded = '1';
      const sym = wrap.dataset.sym;
      const dp  = wrap.dataset.dp  ? parseFloat(wrap.dataset.dp)  : null;
      const cp  = wrap.dataset.cp  ? parseFloat(wrap.dataset.cp)  : null;
      loadNativeChart(sym, 'drawer-native-chart', { discoveryPrice: dp, currentPrice: cp });
    }
  }
}

async function loadDrawerNews(sym, name) {
  const el = document.getElementById('dtab-news');
  if (!el) return;
  el.innerHTML = '<div style="color:var(--text3);font-size:12px;padding:10px 0">Loading news…</div>';
  try {
    const d = await fetch('/api/news/' + encodeURIComponent(sym)).then(r => r.json());
    const articles = d.articles || [];
    if (!articles.length) {
      el.innerHTML = '<div style="color:var(--text3);font-size:12px;padding:10px 0">No recent news found for this stock.</div>';
      return;
    }
    function timeAgo(pubDate) {
      if (!pubDate) return '';
      const diff = Date.now() - new Date(pubDate).getTime();
      const h = Math.floor(diff / 3600000);
      if (h < 1)  return Math.floor(diff / 60000) + 'm ago';
      if (h < 24) return h + 'h ago';
      return Math.floor(h / 24) + 'd ago';
    }
    el.innerHTML = articles.map(a => {
      const lang  = a.lang === 'ar' ? '<span style="font-size:9px;font-weight:700;padding:1px 5px;border-radius:3px;background:rgba(61,139,255,.12);color:var(--accent)">AR</span>' : '<span style="font-size:9px;font-weight:700;padding:1px 5px;border-radius:3px;background:rgba(61,139,255,.12);color:var(--accent)">EN</span>';
      const ago   = timeAgo(a.published);
      const src   = a.source ? `<span style="font-size:10px;color:var(--text3)">${a.source}</span>` : '';
      const dir   = a.lang === 'ar' ? ' dir="rtl"' : '';
      return `<a href="${a.url}" target="_blank" rel="noopener" style="display:block;text-decoration:none;padding:10px 12px;background:rgba(255,255,255,.025);border:1px solid var(--border);border-radius:6px;margin-bottom:6px;transition:background .15s" onmouseover="this.style.background='rgba(255,255,255,.045)'" onmouseout="this.style.background='rgba(255,255,255,.025)'">
        <div style="display:flex;align-items:center;gap:5px;margin-bottom:5px">${lang}${src}<span style="margin-inline-start:auto;font-size:10px;color:var(--text3)">${ago}</span></div>
        <div style="font-size:12px;font-weight:600;color:var(--text);line-height:1.45"${dir}>${a.title}</div>
      </a>`;
    }).join('');
  } catch(e) {
    el.innerHTML = `<div style="color:var(--red);font-size:12px;padding:8px 0">Error: ${e.message}</div>`;
  }
}

// ─── Market Regime Panel ──────────────────────────────────────────────────────
async function fetchAndShowRegime(market){
  const panel=document.getElementById('regime-panel');
  if(!panel) return;
  if(market==='all'){panel.style.display='none';return;}
  panel.style.display='block';
  try{
    const d=await fetch('/api/regime?market='+market).then(r=>r.json());
    if(d.price!=null) renderRegimePanel(d);
    else panel.style.display='none';
  }catch(_){panel.style.display='none';}
}

function renderRegimePanel(data){
  const fmt=v=>v!=null?v.toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:2}):'—';
  const sf=(id,v)=>{const el=document.getElementById(id);if(el)el.textContent=v;};
  const symLabel=data.sym?(data.sym.includes(':')?data.sym.split(':')[1]:data.sym):'—';
  sf('rg-sym',symLabel);
  const priceEl=document.getElementById('rg-price');
  if(priceEl) priceEl.textContent=fmt(data.price);
  const chgEl=document.getElementById('rg-change');
  if(chgEl){const chg=data.change_pct;chgEl.textContent=chg!=null?(chg>=0?'+':'')+chg.toFixed(2)+'%':'—';chgEl.style.color=chg>0?'var(--green)':chg<0?'#ff1744':'var(--text2)';}
  const trendEl=document.getElementById('rg-trend');
  if(trendEl){const cls=data.trend==='bullish'?'regime-bull':data.trend==='bearish'?'regime-bear':'regime-range';trendEl.className='regime-trend '+cls;trendEl.textContent=data.trend==='bullish'?'▲ Bull':data.trend==='bearish'?'▼ Bear':'◆ Range';}
  const emaEl=document.getElementById('rg-ema');
  if(emaEl){emaEl.textContent=data.ema_stack?'✓':'✗';emaEl.style.color=data.ema_stack?'var(--green)':'#ff5252';}
  const e200El=document.getElementById('rg-200');
  if(e200El){e200El.textContent=data.above_200?'✓':'✗';e200El.style.color=data.above_200?'var(--green)':'#ff5252';}
  const rsiEl=document.getElementById('rg-rsi');
  if(rsiEl){rsiEl.textContent=data.rsi!=null?data.rsi.toFixed(1):'—';rsiEl.style.color=data.rsi>=52?'var(--green)':data.rsi<=48?'#ff5252':'var(--yellow)';}
  const volEl=document.getElementById('rg-vol');
  if(volEl) volEl.textContent=data.atr_pct!=null?data.atr_pct.toFixed(1)+'%':'—';
  const perfEl=document.getElementById('rg-20d');
  if(perfEl){const p=data.perf20d;perfEl.textContent=p!=null?(p>=0?'+':'')+p.toFixed(1)+'%':'—';perfEl.style.color=p>0?'var(--green)':p<0?'#ff5252':'var(--text2)';}
  const posEl=document.getElementById('rg-pos');
  if(posEl) posEl.textContent=data.pos52!=null?data.pos52.toFixed(0)+'%':'—';
  const loEl=document.getElementById('rg-lo52'),hiEl=document.getElementById('rg-hi52'),cursorEl=document.getElementById('rg-cursor');
  if(loEl) loEl.textContent=fmt(data.lo52);if(hiEl) hiEl.textContent=fmt(data.hi52);if(cursorEl) cursorEl.style.insetInlineStart=(data.pos52||50)+'%';
  const sigEl=document.getElementById('rg-signal');
  if(sigEl) sigEl.innerHTML=`<strong>${symLabel}</strong> is in a <strong>${data.trend}</strong> regime. RSI ${data.rsi?.toFixed(1)||'—'} | ATR ${data.atr?.toFixed(2)||'—'} (${data.atr_pct?.toFixed(1)||'—'}% daily vol). 20d perf: ${data.perf20d!=null?(data.perf20d>=0?'+':'')+data.perf20d.toFixed(1)+'%':'—'}. 52w pos: ${data.pos52?.toFixed(0)||'—'}%.`;
}
function refreshRegime(){ fetchAndShowRegime(activeMarket); }

// ─── Divergence badge ─────────────────────────────────────────────────────────
function divergenceBadgeHtml(r){
  if(!r.divergence) return'—';
  if(r.divergence==='bullish') return'<span class="div-bull">↗ Div</span>';
  if(r.divergence==='bearish') return'<span class="div-bear">↘ Div</span>';
  return'—';
}

// ─── Position sizer calculator ────────────────────────────────────────────────
function calcSizer(){
  const balance=parseFloat(document.getElementById('sz-balance')?.value||0);
  const risk=parseFloat(document.getElementById('sz-risk')?.value||0)/100;
  const entry=parseFloat(document.getElementById('sz-entry')?.value||0);
  const stop=parseFloat(document.getElementById('sz-stop')?.value||0);
  const el=document.getElementById('sz-result');
  if(!el) return;
  if(!balance||!risk||!entry||!stop||entry===stop){
    el.innerHTML='<div class="sizer-row"><span class="sizer-lbl" style="color:var(--text3)">Enter all values to calculate</span></div>';
    return;
  }
  const riskAmount=balance*risk;
  const riskPerShare=Math.abs(entry-stop);
  if(!riskPerShare){el.innerHTML='';return;}
  const shares=Math.floor(riskAmount/riskPerShare);
  const posValue=shares*entry;
  const isBear=entry<stop;
  const tgt1=openDrawerData?.atr?(isBear?entry-1.5*openDrawerData.atr:entry+1.5*openDrawerData.atr):null;
  const rr=tgt1!=null?(Math.abs(tgt1-entry)/riskPerShare).toFixed(1):'—';
  const pctOfPortfolio=(posValue/balance*100).toFixed(1);
  el.innerHTML=`
    <div class="sizer-row"><span class="sizer-lbl">Shares</span><span class="sizer-val sizer-shares">${shares.toLocaleString()}</span></div>
    <div class="sizer-row"><span class="sizer-lbl">Position Value</span><span class="sizer-val">${posValue.toLocaleString('en-US',{maximumFractionDigits:0})} <span style="color:var(--text3);font-size:10px">(${pctOfPortfolio}%)</span></span></div>
    <div class="sizer-row"><span class="sizer-lbl">Risk Amount</span><span class="sizer-val sizer-risk-neg">${riskAmount.toLocaleString('en-US',{maximumFractionDigits:0})}</span></div>
    <div class="sizer-row"><span class="sizer-lbl">R:R (to T1)</span><span class="sizer-val" style="color:${parseFloat(rr)>=2?'var(--green)':parseFloat(rr)>=1?'var(--yellow)':'#ff5252'}">${rr}:1</span></div>`;
  // Update trade plan card stats
  const tpcShares=document.getElementById('tpc-shares'); if(tpcShares) tpcShares.textContent=shares.toLocaleString();
  const tpcRisk=document.getElementById('tpc-risk');   if(tpcRisk)   tpcRisk.textContent=riskAmount.toLocaleString('en-US',{maximumFractionDigits:0});
  const tpcRR=document.getElementById('tpc-rr');       if(tpcRR){    tpcRR.textContent=rr+':1'; tpcRR.style.color=parseFloat(rr)>=2?'var(--green)':parseFloat(rr)>=1.5?'var(--yellow)':'#ff5252'; }
}

// ─── Fix B helpers ────────────────────────────────────────────────────────────
function buildCriteriaTable(r){
  const{ema13,ema34,ema89,ema200}=r.emas||{};
  const isBear=['STRONG SELL','SELL','AVOID'].includes(r.bias);
  let rows;
  if(isBear){
    const stackBear=ema13<ema34&&ema34<ema89,below200=r.price<ema200;
    const rsiWeak=r.rsi>22&&r.rsi<=48,rsiOs=r.rsi<=22;
    const macdBear=r.macd_hist<0,volOk=r.vol_ratio>=1.2;
    rows=[
      {pass:stackBear,name:t('lEmaStackBear'),pts:2,val:`EMA 13: ${ema13?.toFixed(2)} · 34: ${ema34?.toFixed(2)} · 89: ${ema89?.toFixed(2)}`,detail:stackBear?'Inverted stack confirmed':'Not yet inverted'},
      {pass:below200,name:t('lEma200Bear'),pts:2,val:`Price ${r.price?.toFixed(2)} vs EMA200 ${ema200?.toFixed(2)}`,detail:below200?'Below long-term trend line':'Still above 200 EMA'},
      {pass:rsiWeak&&!rsiOs,warn:rsiOs,name:t('lRsiBear'),pts:2,val:`RSI(14): ${r.rsi?.toFixed(1)}`,detail:rsiOs?'Oversold — potential bounce':'RSI not in bearish zone yet'},
      {pass:macdBear,name:t('lMacd'),pts:1,val:`Histogram: ${r.macd_hist?.toFixed(4)}`,detail:macdBear?'Negative — selling momentum':'MACD still positive'},
      {pass:volOk,name:t('lVol'),pts:1,val:`Volume: ${r.vol_ratio}×`,detail:volOk?'Above average — confirms selling pressure':'Below 1.2× threshold — weak distribution'},
    ];
  } else {
    const stack=ema13>ema34&&ema34>ema89,above200=r.price>ema200;
    const rsiOk=r.rsi>=52&&r.rsi<78,rsiOb=r.rsi>=78;
    const macdOk=r.macd_hist>0,volOk=r.vol_ratio>=1.2;
    rows=[
      {pass:stack,name:t('lEmaStack'),pts:2,val:`EMA 13: ${ema13?.toFixed(2)} · 34: ${ema34?.toFixed(2)} · 89: ${ema89?.toFixed(2)}`,detail:stack?'Staircase aligned upward':'Not fully aligned'},
      {pass:above200,name:t('lEma200'),pts:2,val:`Price ${r.price?.toFixed(2)} vs EMA200 ${ema200?.toFixed(2)}`,detail:above200?'In bull-market regime':'Below long-term trend'},
      {pass:rsiOk&&!rsiOb,warn:rsiOb,name:t('lRsi'),pts:2,val:`RSI(14): ${r.rsi?.toFixed(1)}`,detail:rsiOb?'Overbought — may need pullback':rsiOk?'In momentum zone 52–78':'Below momentum threshold'},
      {pass:macdOk,name:t('lMacd'),pts:1,val:`Histogram: ${r.macd_hist>0?'+':''}${r.macd_hist?.toFixed(4)}`,detail:macdOk?'Positive — momentum building':'Negative — not yet accelerating'},
      {pass:volOk,name:t('lVol'),pts:1,val:`Volume: ${r.vol_ratio}×`,detail:volOk?'Above 1.2× — institutional participation':'Below threshold — thin participation'},
    ];
  }
  const scoreCheck=rows.filter(rw=>rw.pass).reduce((s,rw)=>s+rw.pts,0);
  const trs=rows.map((rw,i)=>{
    const cls=rw.warn?'ct-warn':rw.pass?'ct-pass':'ct-fail';
    const icon=rw.warn?'⚠️':rw.pass?'✅':'❌';
    const ptsCls=rw.pass?'ct-pts pass':'ct-pts';
    return`<tr class="${cls}">
      <td class="ct-num">${i+1}</td>
      <td><div class="ct-name">${rw.name}</div><div class="ct-val">${rw.val}</div></td>
      <td><span class="${ptsCls}">${rw.pts} pt${rw.pts>1?'s':''}</span></td>
      <td class="${rw.warn?'ct-status-warn':rw.pass?'ct-status-pass':'ct-status-fail'}">${icon}</td>
      <td class="ct-val">${rw.detail}</td>
    </tr>`;
  }).join('');
  return`<div class="crit-table-wrap">
    <table class="crit-table">
      <thead><tr><th>#</th><th>Criterion</th><th>Pts</th><th>Status</th><th>Detail</th></tr></thead>
      <tbody>${trs}</tbody>
      <tfoot><tr style="background:var(--bg2)">
        <td colspan="2" style="font-size:11px;font-weight:700;padding:6px 10px;color:var(--text2)">Total</td>
        <td style="font-size:11px;font-weight:700;padding:6px 10px;color:var(--accent);text-align:center">${scoreCheck}/8</td>
        <td colspan="2" style="font-size:10px;color:var(--text3);padding:6px 10px">5 criteria · 8 points max</td>
      </tr></tfoot>
    </table>
  </div>`;
}

function scoreHistorySparkHtml(sym){
  const hist=scoreHistory[sym];
  if(!hist||hist.length<2) return'';
  const last5=hist.slice(-5);
  const modeIcon = { swing:'S', position:'P', breakout:'B' };
  const dots=last5.map((h,i)=>{
    const c=scoreColor(h.s,h.m||8);
    const md=h.md||'swing';
    const mismatch=md!==scanMode;
    const badge=mismatch?`<sup style="font-size:7px;color:var(--orange);font-weight:700">${modeIcon[md]||'?'}</sup>`:'';
    return`<span class="sh-dot" style="background:${c};${mismatch?'opacity:.7;outline:1px solid var(--orange);outline-offset:1px':''}" title="${h.d} [${md}]: ${h.s}/${h.m||8} — ${h.b||''}">${badge}</span>`;
  }).join('<span class="sh-arrow">→</span>');
  const scores=last5.map(h=>h.s).join(' → ');
  const modes=[...new Set(last5.map(h=>h.md||'swing'))];
  const mixedModes=modes.length>1||(modes.length===1&&modes[0]!==scanMode);
  const modeWarn=mixedModes?`<div style="font-size:9px;color:var(--orange);margin-top:3px;line-height:1.4">⚠ History includes ${modes.join('+')} mode scans — scores reflect different criteria</div>`:'';
  return`<div style="margin-top:2px"><div style="font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.4px;color:var(--text3);margin-bottom:4px">Score over last scans</div><div class="score-hist-wrap">${dots}<span style="font-size:11px;color:var(--text2);margin-inline-start:4px">${scores}</span></div>${modeWarn}</div>`;
}

function goToVirtualBuy(sym, price){
  closeDrawer();
  const tabBtn=document.querySelector('.tab[onclick*="virtual"]');
  if(tabBtn) switchTab('positions',tabBtn);
  setTimeout(()=>{
    const symEl=document.getElementById('pos-sym');
    const entryEl=document.getElementById('pos-entry');
    const ticker=sym.includes(':')?sym.split(':')[1]:sym;
    if(symEl){symEl.value=ticker;symEl.focus();}
    if(entryEl&&price) entryEl.value=price.toFixed(2);
    symEl?.closest('.pos-add-form')?.scrollIntoView({behavior:'smooth'});
  },200);
}

function goToSetAlert(sym, name){
  closeDrawer();
  const tabBtn=document.querySelector('.tab[onclick*="criteria"]');
  if(tabBtn) switchTab('criteria',tabBtn);
  setTimeout(()=>{
    const symEl=document.getElementById('rule-sym');
    const nameEl=document.getElementById('rule-name');
    if(symEl){symEl.value=sym;symEl.focus();}
    if(nameEl) nameEl.value=(name||tickerDisplay(sym))+' Score≥6';
    symEl?.closest('.rule-form')?.scrollIntoView({behavior:'smooth'});
  },200);
}

// ─── What Changed Since Last Scan ─────────────────────────────────────────────
function critJustification(key, gained, pm, r){
  const isBear=['STRONG SELL','SELL','AVOID'].includes(r.bias);
  const emas=r.emas||{}, pEmas=(pm&&pm.emas)||{};
  const f2=v=>v!=null?v.toFixed(2):'—', f1=v=>v!=null?v.toFixed(1):'—', f4=v=>v!=null?v.toFixed(4):'—';
  switch(key){
    case 'emaStack':
      if(isBear)
        return gained
          ? `EMA 13 (${f2(emas.ema13)}) < EMA 34 (${f2(emas.ema34)}) < EMA 89 (${f2(emas.ema89)}) — price trend confirmed downward`
          : `EMA 13 (${f2(emas.ema13)}) moved above EMA 34 (${f2(emas.ema34)}) — bearish stack broken`;
      return gained
        ? `EMA 13 (${f2(emas.ema13)}) > EMA 34 (${f2(emas.ema34)}) > EMA 89 (${f2(emas.ema89)}) — trend aligned bullish`
        : `EMA 13 (${f2(emas.ema13)}) dropped below EMA 34 (${f2(emas.ema34)}) — momentum stack broken`;
    case 'ema200':
      if(isBear)
        return gained
          ? `Price ${f2(r.price)} fell below EMA 200 (${f2(emas.ema200)}) — below long-term trend`
          : `Price ${f2(r.price)} recovered above EMA 200 (${f2(emas.ema200)}) — criteria no longer met`;
      return gained
        ? `Price ${f2(r.price)} crossed above EMA 200 (${f2(emas.ema200)}) — now in long-term uptrend`
        : `Price ${f2(r.price)} dropped below EMA 200 (${f2(emas.ema200)}) — broke below long-term support`;
    case 'rsi':
      if(pm&&pm.rsi!=null)
        return isBear
          ? `RSI: ${f1(pm.rsi)} → ${f1(r.rsi)} — ${gained?'entered weak zone (22–48)':'left weak zone'}`
          : `RSI: ${f1(pm.rsi)} → ${f1(r.rsi)} — ${gained?'entered momentum zone (52–78)':'fell out of momentum zone (52–78)'}`;
      return isBear
        ? `RSI at ${f1(r.rsi)} — ${gained?'in':'not in'} weak zone (22–48)`
        : `RSI at ${f1(r.rsi)} — ${gained?'in':'not in'} momentum zone (52–78)`;
    case 'macd':
      if(pm&&pm.macd_hist!=null)
        return `MACD histogram: ${f4(pm.macd_hist)} → ${f4(r.macd_hist)} — turned ${r.macd_hist>0?'positive (bullish momentum)':'negative (bearish momentum)'}`;
      return `MACD histogram ${r.macd_hist>0?'positive':'negative'} (${f4(r.macd_hist)}) — ${gained?'momentum confirmed':'momentum lost'}`;
    case 'vol':
      if(pm&&pm.vol_ratio!=null)
        return `Volume: ${pm.vol_ratio?.toFixed(2)}× → ${r.vol_ratio?.toFixed(2)}× average — ${gained?'volume surge, possible institutional activity':'volume dropped below 1.2× threshold'}`;
      return `Volume at ${r.vol_ratio?.toFixed(2)}× average — ${gained?'above':'below'} 1.2× threshold`;
    default: return '';
  }
}

function buildDeltaCallout(d, r){
  if(!d) return '';
  const improved=d.direction==='improved';
  const scoreCol=d.score_delta>0?'var(--green)':d.score_delta<0?'#ff5252':'var(--text2)';
  const sign=d.score_delta>0?'+':'';
  const maxSc=r.maxScore||8;
  // Bias transition row
  const biasRow=`<div class="wc-bias-row">
    <span class="wc-bias-prev">${biasBadgeHtml(d.prev_bias)}</span>
    <span class="wc-arrow">→</span>
    <span class="wc-bias-curr">${biasBadgeHtml(d.curr_bias)}</span>
    <span class="wc-score-jump" style="color:${scoreCol}">${sign}${d.score_delta} pts &nbsp;·&nbsp; ${d.prev_score}/${maxSc} → ${d.curr_score}/${maxSc}</span>
  </div>`;
  // Per-criterion change rows with justification
  const pm=d.prev_metrics||{};
  let critRows='';
  if(d.criteria_changes&&d.criteria_changes.length){
    critRows=d.criteria_changes.map(c=>{
      const gained=c.now&&!c.was;
      const col=gained?'var(--green)':'#ff5252';
      const icon=gained?'✅':'❌';
      const ptsTxt=gained?`+${c.pts} pt${c.pts>1?'s':''}`:c.pts>0?`−${c.pts} pt${c.pts>1?'s':''}`:'';
      const why=critJustification(c.key,gained,pm,r);
      return`<div class="wc-crit-row">
        <div class="wc-crit-main">
          <span class="wc-crit-icon">${icon}</span>
          <span class="wc-crit-label">${c.label}</span>
          <span class="wc-crit-pts" style="color:${col}">${ptsTxt}</span>
        </div>
        ${why?`<div class="wc-crit-why">${why}</div>`:''}
      </div>`;
    }).join('');
  } else {
    // bias changed but score unchanged — show a note
    critRows=`<div class="wc-crit-row"><div class="wc-crit-main"><span class="wc-crit-icon">ℹ️</span><span class="wc-crit-label" style="color:var(--text3)">Bias reclassified at same score — threshold boundary crossed</span></div></div>`;
  }
  // Prev metric snapshot (pm already declared above)
  let metricRows='';
  if(pm.rsi!=null||pm.macd_hist!=null||pm.vol_ratio!=null){
    const rsiDiff=r.rsi!=null&&pm.rsi!=null?(r.rsi-pm.rsi):null;
    const macdFlip=pm.macd_hist!=null&&r.macd_hist!=null&&Math.sign(pm.macd_hist)!==Math.sign(r.macd_hist);
    const volDiff=r.vol_ratio!=null&&pm.vol_ratio!=null?(r.vol_ratio-pm.vol_ratio):null;
    const fmtDiff=(v,decimals=1)=>v==null?'':(v>0?`<span style="color:var(--green)">+${v.toFixed(decimals)}</span>`:`<span style="color:#ff5252">${v.toFixed(decimals)}</span>`);
    metricRows=`<div class="wc-metrics">
      ${pm.rsi!=null?`<div class="wc-metric"><span class="wc-metric-lbl">RSI</span><span class="wc-metric-val">${pm.rsi?.toFixed(1)} → <strong>${r.rsi?.toFixed(1)}</strong></span>${rsiDiff!=null?`<span class="wc-metric-diff">${fmtDiff(rsiDiff)}</span>`:''}</div>`:''}
      ${pm.macd_hist!=null?`<div class="wc-metric"><span class="wc-metric-lbl">MACD</span><span class="wc-metric-val">${pm.macd_hist?.toFixed(4)} → <strong>${r.macd_hist?.toFixed(4)}</strong></span>${macdFlip?`<span class="wc-metric-diff" style="color:${r.macd_hist>0?'var(--green)':'#ff5252'}">${r.macd_hist>0?'turned +':'turned −'}</span>`:''}</div>`:''}
      ${pm.vol_ratio!=null?`<div class="wc-metric"><span class="wc-metric-lbl">Vol</span><span class="wc-metric-val">${pm.vol_ratio?.toFixed(2)}× → <strong>${r.vol_ratio?.toFixed(2)}×</strong></span>${volDiff!=null?`<span class="wc-metric-diff">${fmtDiff(volDiff,2)}</span>`:''}</div>`:''}
      ${pm.price!=null&&r.price!=null?`<div class="wc-metric"><span class="wc-metric-lbl">Price</span><span class="wc-metric-val">${fmtPrice(pm.price,r.sym)} → <strong>${fmtPrice(r.price,r.sym)}</strong></span>${fmtDiff(r.price-pm.price,2)?`<span class="wc-metric-diff">${fmtDiff(r.price-pm.price,2)}</span>`:''}</div>`:''}
    </div>`;
  }
  // Rapid reversal warning — direction flipped dramatically in one scan
  let rapidWarn = '';
  if (d.rapid_reversal) {
    const prevStreakTxt = d.prev_streak > 1
      ? `${d.name} was ${d.prev_bias} for ${d.prev_streak} consecutive scan${d.prev_streak>1?'s':''} before this reversal.`
      : `${d.name} was ${d.prev_bias} in the previous scan.`;
    const trajHtml = (d.trajectory||[]).map(h => {
      const isBear = ['STRONG SELL','SELL','AVOID'].includes(h.b);
      const col = isBear?'#ff3d71':['STRONG BUY','BUY','WATCH'].includes(h.b)?'var(--green)':'var(--text3)';
      return `<span class="rrw-scan" style="background:rgba(255,255,255,.04);color:${col}">${h.b.replace('STRONG ','S.')} ${h.s}/${h.m}</span>`;
    }).join('<span style="color:var(--text3);font-size:9px">→</span>');
    rapidWarn = `<div class="rapid-reversal-warn">
      <div class="rrw-title">⚠️ Rapid Direction Reversal — Verify Before Acting</div>
      <div class="rrw-body">${prevStreakTxt} A one-scan flip from <strong>${d.prev_bias}</strong> to <strong>${d.curr_bias}</strong> is a real market event but warrants manual chart verification. The signal is valid — but confirm the move isn't a short-covering bounce before entering.</div>
      ${trajHtml?`<div class="rrw-traj">${trajHtml}<span class="rrw-scan" style="background:rgba(79,139,255,.15);color:var(--accent)">${d.curr_bias} ${d.curr_score}/${r.maxScore||8}</span></div>`:''}
    </div>`;
  }

  const borderCol=improved?'var(--green)':'#ff5252';
  return`<div class="wc-card" style="border-inline-start:3px solid ${borderCol}">
    <div class="wc-title">${improved?'📈':'📉'} What Changed Since Last Scan</div>
    ${rapidWarn}
    ${biasRow}
    ${critRows}
    ${metricRows}
  </div>`;
}

// ─── Drawer tab builders ──────────────────────────────────────────────────────
// ─── 360° Analysis ────────────────────────────────────────────────────────────
function get360TechPillar(r) {
  const bull = ['STRONG BUY','BUY','WATCH'].includes(r.bias);
  const bear = ['STRONG SELL','SELL','AVOID'].includes(r.bias);
  const strong = ['STRONG BUY','STRONG SELL'].includes(r.bias);
  const col = bull ? 'var(--green)' : bear ? 'var(--red)' : 'var(--yellow)';
  const pct = Math.round((r.score / (r.maxScore||8)) * 100);
  const signal = bull ? (strong ? 'Strong Buy' : r.bias==='WATCH'?'Watch':'Buy')
               : bear ? (strong ? 'Strong Sell' : r.bias==='AVOID'?'Avoid':'Sell')
               : 'Neutral';
  return { bull, bear, neutral:!bull&&!bear, strong, col, pct, signal,
           sub: `${r.score}/${r.maxScore||8} pts · ${r.bias}` };
}

function get360FundPillar(fscore) {
  if (!fscore) return { bull:false, bear:false, neutral:true, col:'var(--text3)', pct:50,
                        signal:'Loading...', sub:'Fetching fundamentals', loading:true };
  const bull = fscore.score >= 65;
  const bear = fscore.score < 40;
  const col = bull ? 'var(--green)' : bear ? 'var(--red)' : 'var(--yellow)';
  return { bull, bear, neutral:!bull&&!bear, col, pct:fscore.score,
           signal: fscore.signal, sub: `Score ${fscore.score}/100`, loading:false };
}

function get360WhalePillar(r) {
  const ws  = r.whale_score ?? 0;
  const mfi = r.mfi ?? 50;
  const obv = r.obv_trend;

  // ── Block deal cross-reference ──────────────────────────────────────────
  const ticker = tickerDisplay(r.sym).replace('TADAWUL:','');
  const deals  = blockDealsCache.filter(d => {
    const ds = (d.sym||'').replace('TADAWUL:','');
    return ds === ticker || d.sym === r.sym || tickerDisplay(d.sym||'') === ticker;
  });
  const dealVal    = deals.reduce((a, b) => a + (b.value || b.price * b.qty || 0), 0);
  const latestDeal = deals[0] || null;
  // priceDiff: deal price vs today's close (positive = deal above close)
  const priceDiff  = latestDeal && r.price > 0
    ? ((latestDeal.price - r.price) / r.price * 100) : null;
  // Direction from MFI + OBV — this is the authoritative direction signal
  const dealAccum  = dealVal > 0 && (mfi > 55 || obv === 'rising');
  const dealDist   = dealVal > 0 && (mfi < 40 && obv === 'falling');
  const hasBigDiff = priceDiff != null && Math.abs(priceDiff) > 0.5;

  // Correct interpretation: combine MFI/OBV direction WITH price differential
  //   Accum + deal above close  → buyer paid premium, conviction entry
  //   Accum + deal below close  → buyer entered early, stock rallied after (already profitable)
  //   Dist  + deal above close  → seller got premium exit, systematic distribution
  //   Dist  + deal below close  → seller discounted to exit quickly
  let dealNote = '', dealBullish = false, dealBearish = false;
  if (dealVal > 0 && hasBigDiff) {
    if (dealAccum && priceDiff > 0) {
      dealNote = `+${priceDiff.toFixed(1)}% premium entry`;  dealBullish = true;
    } else if (dealAccum && priceDiff < 0) {
      dealNote = `early entry +${Math.abs(priceDiff).toFixed(1)}% profitable`;  dealBullish = true;
    } else if (dealDist && priceDiff > 0) {
      dealNote = `seller exited +${priceDiff.toFixed(1)}% above close`;  dealBearish = true;
    } else if (dealDist && priceDiff < 0) {
      dealNote = `seller discounted ${priceDiff.toFixed(1)}% to exit`;  dealBearish = true;
    }
  } else if (dealVal > 0) {
    dealNote = dealAccum ? 'accumulation' : dealDist ? 'distribution' : '';
  }

  // Block deals do NOT determine direction — MFI + OBV are authoritative.
  // Block deals only add context to the note. Letting a single deal flip
  // the pillar outcome overstates its reliability (no buyer/seller label available).
  const bull = ws >= 6 || mfi > 65 || (ws >= 4 && obv === 'rising');
  const bear = ws < 2 && mfi < 35;
  const col  = bull ? 'var(--green)' : bear ? 'var(--red)' : 'var(--yellow)';

  // CMA filing cross-reference — authoritative direction (±5 day window)
  const cmaMatches = cmaForSym(r.sym, null, 5).slice(0, 3);
  const cmaConfirmed = cmaMatches.length > 0;
  const cmaBuyCount  = cmaMatches.filter(f => f.direction === 'buy').length;
  const cmaSellCount = cmaMatches.filter(f => f.direction === 'sell').length;
  const cmaNet = cmaBuyCount - cmaSellCount;

  const fmtVal = v => v >= 1e6 ? (v/1e6).toFixed(1)+'M SAR' : v >= 1e3 ? (v/1e3).toFixed(0)+'K SAR' : v.toFixed(0)+' SAR';
  const cmaLabel = cmaConfirmed
    ? (cmaNet > 0 ? ' · CMA ✓ Buy' : cmaNet < 0 ? ' · CMA ✓ Sell' : ' · CMA filing')
    : '';
  const signal = bull ? (dealVal > 0 ? 'Accumulation + Block' : 'Accumulation')
               : bear ? (dealVal > 0 ? 'Distribution + Block' : 'Distribution') : 'Neutral';
  const pct    = Math.round((ws / 10) * 100);
  const mfiTxt = mfi != null ? `MFI ${mfi.toFixed(0)}` : '';
  const obvTxt = obv ? `OBV ${obv}` : '';
  const dealTxt = dealVal > 0 ? `${fmtVal(dealVal)}${dealNote ? ' · ' + dealNote : ''}` : '';
  const cmaTxt = cmaConfirmed
    ? (cmaNet > 0 ? `CMA: ${cmaBuyCount}× confirmed buy` : cmaNet < 0 ? `CMA: ${cmaSellCount}× confirmed sell` : 'CMA filing exists')
    : '';
  const sub    = [mfiTxt, obvTxt, dealTxt, cmaTxt].filter(Boolean).join(' · ') || `Whale ${ws}/10`;

  return { bull, bear, neutral:!bull&&!bear, col, pct, signal: signal + cmaLabel, sub,
           dealVal, deals, priceDiff, dealAccum, dealDist, dealNote, dealBullish, dealBearish,
           cmaMatches, cmaConfirmed, cmaNet };
}

function generate360Synthesis(r, tech, fund, whale) {
  const bullCount = [tech.bull, fund.bull, whale.bull].filter(Boolean).length;
  const bearCount = [tech.bear, fund.bear, whale.bear].filter(Boolean).length;
  const conf = Math.max(bullCount, bearCount) >= 3 ? 'HIGH'
             : Math.max(bullCount, bearCount) >= 2 ? 'MEDIUM' : 'LOW';

  // Block deal sentence: always factual on size/note, cautious on direction.
  // Direction is MFI/OBV inference — not confirmed by buyer/seller identity.
  function bdCtx() {
    if (!whale.dealVal) return '';
    const fmtV = v => v >= 1e6 ? (v/1e6).toFixed(1)+'M SAR' : (v/1e3).toFixed(0)+'K SAR';
    const noteStr = whale.dealNote ? ` — ${whale.dealNote}` : '';
    // Detect conflict: block deal direction opposes technical bias
    const isTechBear = ['STRONG SELL','SELL','AVOID'].includes(r.bias);
    const isTechBull = ['STRONG BUY','BUY'].includes(r.bias);
    const conflict = (whale.dealAccum && isTechBear) || (whale.dealDist && isTechBull);
    const conflictNote = conflict
      ? ` <em style="color:var(--yellow)">Note: block deal direction conflicts with technical bias — treat as ambiguous.</em>`
      : '';
    // Soft language: "consistent with" not "confirmed by"
    const dir = whale.dealAccum
      ? ` MFI/OBV are consistent with accumulation (direction is inferred — no buyer/seller label available).`
      : whale.dealDist
      ? ` MFI/OBV are consistent with distribution (direction is inferred — no buyer/seller label available).`
      : ` Direction ambiguous — no buyer/seller data available from Argaam.`;
    const cmaLine = whale.cmaConfirmed
      ? ` <strong style="color:var(--green)">CMA filing confirms direction.</strong>`
      : '';
    return ` <strong>Block deal: ${fmtV(whale.dealVal)}${noteStr}.</strong>${dir}${cmaLine}${conflictNote}`;
  }

  const isBear = tech.bear;
  let headline, body, action;

  if (bullCount === 3) {
    headline = 'Full alignment — all three dimensions confirm bullish';
    body = `Technical momentum is confirmed (${r.score}/8), the stock is ${fund.signal.toLowerCase()} on fundamentals, and institutional flow shows ${whale.signal.toLowerCase()} (${whale.sub}). This rare three-way convergence signals a high-conviction opportunity.${bdCtx()}`;
    action = `<strong>Consider entry</strong> near EMA 34 (${r.emas?.ema34?.toFixed(2)??'—'}). Both ATR-based and EMA 89 structure stops are valid. Preferred target: T2 at 2:1 R:R.`;
  } else if (bearCount === 3) {
    headline = 'Full alignment — all three dimensions confirm bearish';
    body = `Technicals are deteriorating (${r.score}/8 bearish), fundamentals score ${fund.pct}/100 (${fund.signal.toLowerCase()}), and institutional flow shows ${whale.signal.toLowerCase()} (${whale.sub}). Strong multi-dimensional bear case.${bdCtx()}`;
    action = `<strong>Avoid new long positions.</strong> If holding, consider exiting on any bounce toward EMA 34 (${r.emas?.ema34?.toFixed(2)??'—'}).`;
  } else if (bullCount === 2 && !fund.loading) {
    const missing = tech.neutral?'a technical breakout':fund.neutral?'fundamental value':whale.neutral?'institutional accumulation':'full alignment';
    headline = `Two pillars aligned bullish — awaiting ${missing}`;
    body = `Technical score ${r.score}/8, fundamentals ${fund.signal.toLowerCase()} (${fund.pct}/100), institutional ${whale.signal.toLowerCase()} (${whale.sub}). Two of three dimensions support a bullish view.${bdCtx()}`;
    action = `<strong>Entry possible at reduced size.</strong> Add once ${missing} confirms. Use tighter stop at 1× ATR.`;
  } else if (bearCount === 2 && !fund.loading) {
    const missing = tech.neutral?'technical breakdown':fund.neutral?'fundamental weakness':whale.neutral?'institutional distribution':'full alignment';
    headline = `Two pillars aligned bearish — ${missing} pending`;
    body = `Risk is elevated with two of three dimensions bearish. Technical ${tech.signal}, fundamentals ${fund.signal.toLowerCase()}, institutional ${whale.signal.toLowerCase()}.${bdCtx()}`;
    action = `<strong>Avoid.</strong> Wait for the third pillar to confirm before any contrarian entry.`;
  } else if (tech.bull && fund.bull && whale.neutral && !fund.loading) {
    headline = 'Technical + Fundamental aligned, institutions not yet confirmed';
    body = `Strong price action (${r.score}/8) on a ${fund.signal.toLowerCase()} stock. Whale activity is neutral — institutions haven't confirmed the move with unusual volume.${bdCtx()}`;
    action = `<strong>Valid setup.</strong> Watch for volume above 1.5× average as the trigger for full position entry.`;
  } else if (tech.bull && whale.bull && fund.neutral && !fund.loading) {
    headline = 'Momentum + Institutional backing, fair valuation';
    body = `Technical momentum (${r.score}/8) and institutional accumulation (${whale.sub}) align. The stock is fairly valued — this is a momentum trade, not a deep-value play. The trend has institutional support.${bdCtx()}`;
    action = `<strong>Momentum entry valid.</strong> This isn't a value play — tighten stops if momentum stalls. Take profits at T1 (1:1 R:R).`;
  } else if (fund.bull && whale.bull && tech.neutral && !fund.loading) {
    headline = 'Value + Smart money, waiting on technical confirmation';
    body = `Fundamentals look attractive (${fund.pct}/100) and institutions are accumulating (${whale.sub}), but technical structure hasn't confirmed yet (${r.score}/8). This may be early-stage accumulation before a breakout.${bdCtx()}`;
    action = `<strong>Partial entry reasonable for investors.</strong> Wait for RSI to cross 52 or MACD to turn positive before adding more.`;
  } else if (tech.bull && fund.bear && !fund.loading) {
    headline = 'Technical breakout on stretched valuation';
    body = `Price momentum is real (${r.score}/8) but the stock trades at a fundamental premium (${fund.pct}/100 — ${fund.signal.toLowerCase()}). Momentum can persist, but the margin of safety is thin.${bdCtx()}`;
    action = `<strong>Short-term swing trade only.</strong> Not suitable for buy-and-hold. Take profits at T1 and use tight stops.`;
  } else if (fund.loading) {
    headline = 'Technical + Institutional assessed, loading fundamentals...';
    body = `Technical: ${tech.signal} (${r.score}/8). Institutional: ${whale.signal} (${whale.sub}). Fundamental analysis loading — full synthesis will update shortly.${bdCtx()}`;
    action = 'Partial assessment available now. Full 360° analysis updating...';
  } else {
    headline = 'Mixed signals — no clear multi-dimensional edge';
    body = `Technical ${tech.signal} (${r.score}/8), fundamentals ${fund.signal.toLowerCase()} (${fund.pct}/100), institutional ${whale.signal.toLowerCase()} (${whale.sub}). The three dimensions don't yet align.${bdCtx()}`;
    action = `<strong>Wait for clearer alignment.</strong> No strong edge across all pillars — preserve capital.`;
  }

  return { headline, body, action, confidence:conf, bullCount, bearCount };
}

function build360Card(r, fscore) {
  const tech  = get360TechPillar(r);
  const fund  = get360FundPillar(fscore);
  const whale = get360WhalePillar(r);
  const syn   = generate360Synthesis(r, tech, fund, whale);

  const pillar = (icon, name, p) => `
    <div class="a360-pillar">
      <div class="a360-pillar-icon">${icon}</div>
      <div class="a360-pillar-name">${name}</div>
      <div class="a360-pillar-signal" style="color:${p.col}">${p.signal}</div>
      <div class="a360-pillar-sub">${p.sub}</div>
      <div class="a360-bar"><div class="a360-bar-fill" style="width:${p.pct}%;background:${p.col}"></div></div>
    </div>`;

  const confCls = syn.confidence==='HIGH'?'a360-conf-high':syn.confidence==='MEDIUM'?'a360-conf-medium':'a360-conf-low';
  const alignIcon = syn.bullCount===3?'🟢':syn.bearCount===3?'🔴':syn.bullCount>=2?'🟡':syn.bearCount>=2?'🟠':'⚪';

  // Block deal evidence strip — shown only when deals exist for this stock
  const bdStrip = whale.deals?.length > 0 ? (() => {
    const maxV = Math.max(...whale.deals.map(d => d.value || d.price * d.qty || 0), 1);
    const fmtV = v => v >= 1e6 ? (v/1e6).toFixed(1)+'M' : v >= 1e3 ? (v/1e3).toFixed(0)+'K' : v.toFixed(0);
    const rows = whale.deals.map(deal => {
      const sarV    = deal.value || deal.price * deal.qty || 0;
      const relPct  = Math.round(sarV / maxV * 100);
      const sigData = dealSignificanceVsADTV(sarV, deal.sym);
      const sigCol  = sigData.col;
      const sigLbl  = sigData.label + (sigData.pct != null ? ` ${sigData.pct.toFixed(0)}% ADTV` : '');
      // Context-aware label: direction + price diff combined
      const pDiff = whale.priceDiff;
      let prem = '';
      if (pDiff != null && Math.abs(pDiff) > 0.5) {
        if (whale.dealAccum && pDiff > 0)
          prem = `<span class="a360-deal-premium">+${pDiff.toFixed(1)}% premium entry</span>`;
        else if (whale.dealAccum && pDiff < 0)
          prem = `<span class="a360-deal-premium">+${Math.abs(pDiff).toFixed(1)}% profitable</span>`;
        else if (whale.dealDist && pDiff > 0)
          prem = `<span class="a360-deal-discount">seller +${pDiff.toFixed(1)}% exit</span>`;
        else if (whale.dealDist && pDiff < 0)
          prem = `<span class="a360-deal-discount">${pDiff.toFixed(1)}% discount exit</span>`;
      }
      const t = deal.time ? new Date(deal.time).toLocaleTimeString('en-SA',{hour:'2-digit',minute:'2-digit'}) : '';
      return `<div class="a360-deal-row">
        <span class="a360-deal-sig" style="background:${sigCol}22;color:${sigCol};border:1px solid ${sigCol}44">${sigLbl}</span>
        <div class="a360-deal-bar-wrap"><div class="a360-deal-bar" style="width:${relPct}%;background:${sigCol}"></div></div>
        <span class="a360-deal-val" style="color:${sigCol}">${fmtV(sarV)} SAR</span>
        ${prem}
        <span class="a360-deal-meta">${deal.qty.toLocaleString()} @ ${deal.price.toFixed(2)}${t?' · '+t:''}</span>
      </div>`;
    }).join('');
    const dir = whale.dealAccum ? '↑ Consistent with accumulation' : whale.dealDist ? '↓ Consistent with distribution' : '~ Direction ambiguous';
    const dirCol = whale.dealAccum ? 'var(--green)' : whale.dealDist ? '#ff5252' : 'var(--yellow)';
    // Conflict: inferred deal direction opposes technical bias
    const isTechBear = ['STRONG SELL','SELL','AVOID'].includes(r.bias);
    const isTechBull = ['STRONG BUY','BUY'].includes(r.bias);
    const hasConflict = (whale.dealAccum && isTechBear) || (whale.dealDist && isTechBull);
    const conflictBadge = hasConflict
      ? `<span style="font-size:9px;font-weight:700;padding:1px 7px;border-radius:8px;background:rgba(255,215,64,.12);color:var(--yellow);border:1px solid rgba(255,215,64,.25)">⚠ Conflicts with technical bias</span>`
      : `<span style="font-weight:400;letter-spacing:0;text-transform:none;color:var(--text3);font-size:9px">inferred from MFI/OBV · no buyer/seller label</span>`;
    return `<div class="a360-deal-strip">
      <div class="a360-deal-hdr">Block Deals Today
        <span style="color:${dirCol};font-weight:700">${dir}</span>
        ${conflictBadge}
      </div>
      ${rows}
    </div>`;
  })() : '';

  return `<div class="a360-card">
    <div class="a360-header">
      <span class="a360-title">🔮 360° Analysis</span>
      <span class="a360-confidence ${confCls}">${alignIcon} ${syn.confidence} confidence</span>
    </div>
    <div class="a360-pillars">
      ${pillar('📈','Technical', tech)}
      ${pillar('💰','Fundamental', fund)}
      ${pillar('🐋','Institutional', whale)}
    </div>
    ${bdStrip}
    ${whale.cmaConfirmed ? (() => {
      const f = whale.cmaMatches[0];
      const cls = f.direction === 'buy' ? 'a360-cma-confirmed' : f.direction === 'sell' ? 'a360-cma-confirmed a360-cma-sell' : 'a360-cma-confirmed';
      const icon = f.direction === 'buy' ? '↑' : f.direction === 'sell' ? '↓' : '~';
      const instLabel = f.institution_en || f.institution || 'Institution';
      const deltaStr = f.prev_pct != null && f.new_pct != null
        ? ` · ${f.prev_pct.toFixed(1)}% → ${f.new_pct.toFixed(1)}%` : '';
      return `<div class="a360-deal-strip">
        <div class="${cls}">
          <strong>🏛 CMA Confirmed</strong> ${icon} ${instLabel} ${f.direction} filing${deltaStr} · ${f.filing_date}
          ${whale.cmaMatches.length > 1 ? `<span style="opacity:.6;margin-inline-start:6px">+${whale.cmaMatches.length-1} more</span>` : ''}
        </div>
      </div>`;
    })() : ''}
    <div class="a360-divider"></div>
    <div class="a360-headline">${syn.headline}</div>
    <div class="a360-body">${syn.body}</div>
    <div class="a360-action">${syn.action}</div>
  </div>`;
}

async function load360Analysis(sym, r) {
  const el = document.getElementById('a360-card-wrap');
  if (!el) return;
  try {
    const res  = await fetch('/api/fundamentals?sym=' + encodeURIComponent(sym));
    const json = await res.json();
    if (!json.success) throw new Error(json.error || 'Fund load failed');
    el.innerHTML = build360Card(r, json.score);
  } catch(_) {
    // Keep the partial card (with loading fundamentals) — don't error out
  }
}

function buildDynamicsCard(r) {
  const H    = r.hurst;
  const rank = r.atr_pct_rank;
  if (H == null && rank == null) return '';

  let html = `<div class="crit-section-title">Market Dynamics</div>`;

  if (H != null) {
    const isTrending = H > 0.55, isMR = H < 0.45;
    const hLabel = isTrending ? 'Trending' : isMR ? 'Mean-Reverting' : 'Random Walk';
    const hCol   = isTrending ? 'var(--green)' : isMR ? 'var(--orange)' : 'var(--yellow)';
    const hDesc  = isTrending
      ? `Price shows <strong>persistence</strong> — it tends to continue in the same direction. The EMA trend stack and MACD signals are more reliable in this regime. Momentum entries have higher follow-through probability.`
      : isMR
      ? `Price oscillates around a mean — moves tend to <strong>reverse</strong>. Trend signals (EMA crossovers, breakouts) generate more false positives here. Wait for a stronger score before entering, or consider tighter targets.`
      : `Price movement is close to a <strong>random walk</strong> — no dominant trending or mean-reverting character. This is the baseline; use other signals to determine edge.`;
    html += `<div class="crit-card ${isTrending?'pass':isMR?'warn':''}">
      <div class="crit-card-header">
        <span class="crit-icon">${isTrending?'📈':isMR?'↔️':'〜'}</span>
        <span class="crit-label">Hurst Exponent (R/S)</span>
        <span class="crit-value" style="color:${hCol}">${H} — ${hLabel}</span>
      </div>
      <div class="crit-explain">${hDesc}</div>
    </div>`;
  }

  if (rank != null) {
    const isCoil = rank <= 20, isExp = rank >= 80;
    const rLabel = isCoil ? 'Compressed — volatility coil' : isExp ? 'Expanded — high volatility' : 'Normal range';
    const rCol   = isCoil ? 'var(--green)' : isExp ? 'var(--red)' : 'var(--yellow)';
    const rDesc  = isCoil
      ? `ATR is in its <strong>bottom ${rank}th percentile</strong> for the year. The stock is unusually calm — a coiling phase. Compressed volatility followed by a strong signal often produces sharp, sustained moves. This is the ideal setup to watch.`
      : isExp
      ? `ATR is in its <strong>top ${100 - rank}th percentile</strong> for the year. The stock is moving aggressively. Risk per share is elevated — <strong>reduce position size 30–50%</strong> and widen stops to avoid being shaken out by noise.`
      : `ATR is at its <strong>${rank}th percentile</strong> — within normal historical volatility range. Standard position sizing applies. No adjustment needed.`;
    html += `<div class="crit-card ${isCoil?'pass':isExp?'warn':''}">
      <div class="crit-card-header">
        <span class="crit-icon">${isCoil?'🪤':isExp?'⚡':'〜'}</span>
        <span class="crit-label">ATR Percentile Rank (252d)</span>
        <span class="crit-value" style="color:${rCol}">${rank}th %ile — ${rLabel}</span>
      </div>
      <div class="crit-explain">${rDesc}</div>
    </div>`;
  }

  // Combined synthesis when both values are available
  if (H != null && rank != null) {
    const isTrend = H > 0.55, isMR = H < 0.45, isCoil = rank <= 20, isExp = rank >= 80;
    let synth, synthCol;
    if (isTrend && isCoil) {
      synth = '⭐ Best-case setup: trending character + compressed volatility. The stock is building energy in a confirmed trend direction. High-conviction entry if the signal score is 7+.';
      synthCol = 'var(--green)';
    } else if (isTrend && isExp) {
      synth = '⚠ Trending but volatile: momentum is real, but risk per bar is elevated. Size down 30–40%, widen stops, and consider waiting for an intra-day pullback to reduce entry risk.';
      synthCol = 'var(--yellow)';
    } else if (isMR && isCoil) {
      synth = '⚠ Mean-reverting + compressed: the next move could snap back hard in either direction. Do not chase breakouts here — wait for the breakout to establish and close above key resistance.';
      synthCol = 'var(--yellow)';
    } else if (isMR && isExp) {
      synth = '🛑 Challenging environment: price tends to reverse AND volatility is high. Trend signals here have the lowest reliability. Reduce position size significantly or wait for a calmer regime.';
      synthCol = 'var(--red)';
    } else {
      synth = null;
    }
    if (synth) {
      html += `<div style="background:rgba(255,255,255,.025);border:1px solid rgba(255,255,255,.08);border-radius:8px;padding:10px 13px;font-size:11px;color:${synthCol};line-height:1.6">${synth}</div>`;
    }
  }

  return html;
}

function buildVolCard(r) {
  const vol = r.vol_ratio ?? 0;
  const isBear = ['STRONG SELL','SELL','AVOID'].includes(r.bias);
  // Zones: thin <0.8, normal 0.8-1.2, active 1.2-2, surge >2
  const THRESHOLD = 1.2;
  const MAX_DISPLAY = 3.0; // bar fills to max 3×
  const fillPct = Math.min(vol / MAX_DISPLAY * 100, 100);
  const thresholdPct = (THRESHOLD / MAX_DISPLAY) * 100;

  // Colour and zone label
  let zoneCol, zoneBg, zoneLabel, zoneDesc;
  if (vol >= 2.0) {
    zoneCol = isBear ? 'var(--red)' : 'var(--green)';
    zoneBg  = isBear ? 'var(--red-dim)' : 'var(--green-dim)';
    zoneLabel = isBear ? 'Surge — heavy selling' : 'Surge — strong demand';
    zoneDesc  = isBear
      ? `Volume at <strong>${vol}×</strong> average. A surge during a downtrend accelerates the selloff — institutions are actively distributing.`
      : `Volume at <strong>${vol}×</strong> average. Surging volume on an uptrend is a strong confirmation of genuine institutional buying demand.`;
  } else if (vol >= THRESHOLD) {
    zoneCol = isBear ? 'var(--orange)' : 'var(--green)';
    zoneBg  = isBear ? 'rgba(255,145,0,.12)' : 'var(--green-dim)';
    zoneLabel = isBear ? 'Active — confirms selling pressure' : 'Active — confirms participation (+1 pt)';
    zoneDesc  = isBear
      ? `Volume at <strong>${vol}×</strong> average. Above-average volume on a bearish setup confirms selling pressure, not buying. Check MFI in Whale Watch for direction.`
      : `Volume at <strong>${vol}×</strong> average. Above the 1.2× threshold — enough participation to validate the price move.`;
  } else if (vol >= 0.8) {
    zoneCol = 'var(--yellow)';
    zoneBg  = 'var(--yellow-dim)';
    zoneLabel = 'Moderate — below threshold (0 pts)';
    zoneDesc  = `Volume at <strong>${vol}×</strong> average. Below the 1.2× threshold. The price move lacks strong participation — higher risk of reversal without a volume follow-through.`;
  } else {
    zoneCol = 'var(--text3)';
    zoneBg  = 'rgba(255,255,255,.04)';
    zoneLabel = 'Thin — weak participation (0 pts)';
    zoneDesc  = `Volume at <strong>${vol}×</strong> average. Very low participation. Moves on thin volume are unreliable and often reversed when bigger players return.`;
  }

  // Bar segments shown as background gradient
  const barFill = `linear-gradient(90deg, ${zoneCol} 0%, ${zoneCol} ${fillPct}%, rgba(255,255,255,.06) ${fillPct}%, rgba(255,255,255,.06) 100%)`;

  return `<div class="crit-section-title">${t('lVol')}</div>
  <div class="vol-meter-card">
    <div class="vol-meter-top">
      <div class="vol-meter-reading">
        <span class="vol-meter-num" style="color:${zoneCol}">${vol}<span class="vol-meter-unit">×</span></span>
        <span class="vol-meter-avg">avg</span>
      </div>
      <span class="vol-meter-zone" style="background:${zoneBg};color:${zoneCol}">${zoneLabel}</span>
    </div>
    <div class="vol-meter-bar-wrap">
      <div class="vol-meter-bar" style="background:${barFill}"></div>
      <div class="vol-meter-threshold" style="left:${thresholdPct}%">
        <div class="vol-threshold-tick"></div>
        <div class="vol-threshold-label">1.2×</div>
      </div>
    </div>
    <div class="vol-meter-zones-row">
      <span>Thin</span><span>Moderate</span><span style="padding-inline-start:${thresholdPct * .6}%">Active</span><span>Surge</span>
    </div>
    <div class="crit-explain" style="margin-top:8px">${zoneDesc}</div>
  </div>`;
}

function buildSignalTab(r){
  if(r.bias==='NO_DATA'||r.bias==='ERROR'){
    document.getElementById('dtab-signal').innerHTML=`<div class="crit-card fail"><div class="crit-card-header"><span class="crit-icon">✗</span><span class="crit-label">${t('bNoData')}</span></div><div class="crit-explain">${r.error||''}</div></div>`;
    return;
  }
  const{ema13,ema34,ema89,ema200}=r.emas||{};
  const isBear=['STRONG SELL','SELL','AVOID'].includes(r.bias);
  const col=isBear?'#ff1744':scoreColor(r.score,r.maxScore||8);
  const pct=Math.round((r.score/(r.maxScore||8))*100);
  const verdict=(EXPL.verdicts[lang]||EXPL.verdicts.en)[r.bias];
  const verdictText=verdict?verdict(r.name):'';
  let crits;
  if(isBear){
    const stackBear=ema13<ema34&&ema34<ema89,below200=r.price<ema200,rsiWeak=r.rsi>22&&r.rsi<=48,rsiOs=r.rsi<=22,macdBear=r.macd_hist<0;
    crits=[
      buildCrit(stackBear,t('lEmaStackBear')+' (2'+t('pts')+')',`EMA 13: <strong>${ema13?.toFixed(2)}</strong> | EMA 34: <strong>${ema34?.toFixed(2)}</strong> | EMA 89: <strong>${ema89?.toFixed(2)}</strong>`,stackBear?EXPL.emaStackBear[lang].pass:EXPL.emaStackBear[lang].fail,null,buildProximityBar('emaStack',stackBear,r)),
      buildCrit(below200,t('lEma200Bear')+' (2'+t('pts')+')',`${lang==='ar'?'السعر':'Price'}: <strong>${r.price?.toFixed(2)}</strong> | EMA 200: <strong>${ema200?.toFixed(2)}</strong>`,below200?EXPL.ema200Bear[lang].pass:EXPL.ema200Bear[lang].fail,null,buildProximityBar('ema200',below200,r)),
      buildCrit(rsiWeak&&!rsiOs,t('lRsiBear')+' (2'+t('pts')+')',`RSI(14): <strong>${r.rsi?.toFixed(1)}</strong>`,rsiOs?EXPL.rsiOs[lang]:rsiWeak?EXPL.rsiWeakBear[lang]:EXPL.rsiNotWeak[lang],rsiOs?'warn':null,buildProximityBar('rsi',rsiWeak&&!rsiOs,r)),
      buildCrit(macdBear,t('lMacd')+' (1'+t('pts')+')',`${lang==='ar'?'هيستوجرام':'Histogram'}: <strong>${r.macd_hist?.toFixed(4)}</strong>`,macdBear?EXPL.macdBear[lang].pass:EXPL.macdBear[lang].fail,null,buildProximityBar('macd',macdBear,r)),
    ];
  } else {
    const stack=ema13>ema34&&ema34>ema89,above200=r.price>ema200,rsiOk=r.rsi>=52&&r.rsi<78,rsiOb=r.rsi>=78,macdOk=r.macd_hist>0;
    crits=[
      buildCrit(stack,t('lEmaStack')+' (2'+t('pts')+')',`EMA 13: <strong>${ema13?.toFixed(2)}</strong> | EMA 34: <strong>${ema34?.toFixed(2)}</strong> | EMA 89: <strong>${ema89?.toFixed(2)}</strong>`,stack?EXPL.emaStack[lang].pass:EXPL.emaStack[lang].fail,null,buildProximityBar('emaStack',stack,r)),
      buildCrit(above200,t('lEma200')+' (2'+t('pts')+')',`${lang==='ar'?'السعر':'Price'}: <strong>${r.price?.toFixed(2)}</strong> | EMA 200: <strong>${ema200?.toFixed(2)}</strong>`,above200?EXPL.ema200[lang].pass:EXPL.ema200[lang].fail,null,buildProximityBar('ema200',above200,r)),
      buildCrit(rsiOk&&!rsiOb,t('lRsi')+' (2'+t('pts')+')',`RSI(14): <strong>${r.rsi?.toFixed(1)}</strong>`,rsiOb?EXPL.rsiOb[lang]:rsiOk?EXPL.rsiOk[lang]:EXPL.rsiWeak[lang],rsiOb?'warn':null,buildProximityBar('rsi',rsiOk,r)),
      buildCrit(macdOk,t('lMacd')+' (1'+t('pts')+')',`${lang==='ar'?'هيستوجرام':'Histogram'}: <strong>${r.macd_hist>0?'+':''}${r.macd_hist?.toFixed(4)}</strong>`,macdOk?EXPL.macd[lang].pass:EXPL.macd[lang].fail,null,buildProximityBar('macd',macdOk,r)),
    ];
  }
  const shd=shariaMap[r.sym];
  const shCard=shd?`<div class="crit-section-title">${t('shariaTitle')}</div>
    <div class="crit-card ${'compliant'===shd.status?'pass':'non_compliant'===shd.status?'fail':'warn'}">
      <div class="crit-card-header"><span class="crit-icon">${'compliant'===shd.status?'✅':'non_compliant'===shd.status?'❌':'⚠️'}</span><span class="crit-label">${t('shariaTitle')}</span><span class="crit-value" style="color:${'compliant'===shd.status?'var(--green)':'non_compliant'===shd.status?'var(--red)':'var(--yellow)'}">${{'compliant':t('sHalal'),'non_compliant':t('sNonHalal'),'review':t('sReview')}[shd.status]||t('sUnknown')}</span></div>
      <div class="crit-explain">${shd.basis}</div><div class="crit-explain" style="margin-top:5px;font-size:11px;color:var(--text3)">${t('shariaDisc')}</div>
    </div>`:'';
  let rsCard='';
  if(r.rs_score!=null){
    const isLead=r.rs_score>2,isLag=r.rs_score<-2;
    const rsCol=isLead?'var(--green)':isLag?'#ff5252':'var(--yellow)';
    const sign=r.rs_score>0?'+':'';
    rsCard=`<div class="crit-section-title">${t('rsTitle')}</div>
    <div class="crit-card ${isLead?'pass':isLag?'fail':'warn'}">
      <div class="crit-card-header"><span class="crit-icon">${isLead?'📈':isLag?'📉':'➡️'}</span><span class="crit-label">${t('rsTitle')} vs index</span><span class="crit-value" style="color:${rsCol}">${sign}${r.rs_score.toFixed(1)}% — ${isLead?t('rsLeader'):isLag?t('rsLaggard'):'Neutral'}</span></div>
      <div class="crit-explain">${isLead?`Outperformed index by <strong>${sign}${r.rs_score.toFixed(1)}%</strong> over 20 sessions.`:isLag?`Underperformed index by <strong>${r.rs_score.toFixed(1)}%</strong> over 20 sessions.`:'Performing in line with its market index.'}</div>
    </div>`;
  }
  let weeklyCard='';
  if(scanMode==='position'&&r.weekly){
    const{ema_stack,above200,score}=r.weekly;
    weeklyCard=`<div class="crit-section-title">${t('weeklyTitle')}</div>
    <div class="crit-card ${score===4?'pass':score===0?'fail':'warn'}">
      <div class="crit-card-header"><span class="crit-icon">${score===4?'✅':score===0?'❌':'⚠️'}</span><span class="crit-label">${t('weeklyTitle')}</span><span class="crit-value" style="color:${score===4?'var(--green)':score===0?'var(--red)':'var(--yellow)'}">${weeklyBadgeHtml(r)}</span></div>
      <div class="crit-nums">${t('wEmaStack')}: ${ema_stack?'✓':'✗'} | ${t('wAbove200')}: ${above200===null?'N/A':above200?'✓':'✗'}</div>
      <div class="crit-explain">${score===4?'Weekly timeframe fully aligned.':score===0?'Weekly trend against daily — wait for alignment.':'Partially aligned — monitor for confirmation.'}</div>
    </div>`;
  }
  let divCard='';
  if(r.divergence){
    const isBullDiv=r.divergence==='bullish';
    divCard=`<div class="crit-section-title">RSI Divergence</div>
    <div class="crit-card ${isBullDiv?'pass':'warn'}">
      <div class="crit-card-header"><span class="crit-icon">${isBullDiv?'📈':'📉'}</span><span class="crit-label">${isBullDiv?'Bullish Divergence':'Bearish Divergence'}</span><span class="crit-value" style="color:${isBullDiv?'var(--green)':'var(--orange)'}">${isBullDiv?'↗ Bullish':'↘ Bearish'}</span></div>
      <div class="crit-explain">${isBullDiv?'Price made a lower low but RSI made a higher low — hidden bullish strength, potential reversal up.':'Price made a higher high but RSI made a lower high — momentum waning, potential reversal down.'}</div>
    </div>`;
  }
  let actionHtml='';
  if(r.bias==='STRONG BUY'||r.bias==='BUY') actionHtml=`<div class="entry-box"><div class="entry-box-title">${t('entryGuidanceTitle')}</div><p>${EXPL.entryGuide[lang](ema34?.toFixed(2),ema89?.toFixed(2))}</p></div>`;
  else if(r.bias==='WATCH') actionHtml=`<div class="entry-box"><div class="entry-box-title">${t('watchTitle')}</div><p>${EXPL.watchGuide[lang](r.warnings||[],ema34?.toFixed(2))}</p></div>`;
  else if(r.bias==='STRONG SELL'||r.bias==='SELL') actionHtml=`<div class="entry-box" style="background:rgba(255,23,68,.06);border-color:rgba(255,23,68,.25)"><div class="entry-box-title" style="color:#ff1744">${t('sellGuidanceTitle')}</div><p>${EXPL.sellGuide[lang](ema34?.toFixed(2),ema89?.toFixed(2))}</p></div>`;
  else if(r.bias==='AVOID') actionHtml=`<div class="entry-box" style="background:rgba(255,145,0,.06);border-color:rgba(255,145,0,.25)"><div class="entry-box-title" style="color:var(--orange)">${t('avoidTitle')}</div><p>${EXPL.avoidGuide[lang](r.warnings||[],ema34?.toFixed(2))}</p></div>`;
  // ── Executive Summary ────────────────────────────────────────────────────────
  const isBearExec=['STRONG SELL','SELL','AVOID'].includes(r.bias);
  const fmt2=v=>v!=null?fmtPrice(v,r.sym):'—';
  let execStop=null,execT1=null,execT2=null,execEntry=null;
  if(r.atr!=null){
    execStop = isBearExec?r.price+1.5*r.atr:r.price-1.5*r.atr;
    execT1   = isBearExec?r.price-1.5*r.atr:r.price+1.5*r.atr;
    execT2   = isBearExec?r.price-3*r.atr:r.price+3*r.atr;
    execEntry= isBearExec?r.price:r.emas?.ema34||r.price;
  }
  const rrRatio=execStop&&execT1?Math.abs(execT1-r.price)/Math.abs(r.price-execStop):null;
  const topRes=(r.sr?.resistance||[]).slice(0,2);
  const topSup=(r.sr?.support||[]).slice(0,2);
  const ind=(pass,label,tip='')=>`<span class="exec-ind ${pass?'exec-ind-pass':'exec-ind-fail'}"${tip?' title="'+tip+'"':''}>${pass?'✓':'✗'} ${label}</span>`;
  const indWarn=(label,tip='')=>`<span class="exec-ind exec-ind-warn"${tip?' title="'+tip+'"':''}>⚠ ${label}</span>`;
  const {ema13:ei13,ema34:ei34,ema89:ei89,ema200:ei200}=r.emas||{};
  const stackOk=isBearExec?(ei13<ei34&&ei34<ei89):(ei13>ei34&&ei34>ei89);
  const a200ok=isBearExec?r.price<ei200:r.price>ei200;
  const rsiOk=isBearExec?(r.rsi>22&&r.rsi<=48):(r.rsi>=52&&r.rsi<78);
  // Precomputed natural-language tooltip strings (avoid nested backtick escaping)
  const _eTip = isBearExec
    ? (stackOk ? 'EMA 13 < 34 < 89 — moving averages are stacked in downtrend order, confirming sellers are structurally in control.' : 'EMAs are not in downtrend order — the bear structure is incomplete. Downtrend lacks full confirmation.')
    : (stackOk ? 'EMA 13 > 34 > 89 — short, mid, and long averages all stacked in uptrend order. This is the core trend confirmation — buyers are structurally in control.' : 'EMAs are not in uptrend order — trend structure is broken or not yet formed. High risk zone for longs.');
  const _200Tip = isBearExec
    ? (a200ok ? 'Price is below its 200-day moving average — in a long-term downtrend. Most institutions treat this as the line below which a stock is worth avoiding.' : 'Price is above the 200-day average — the long-term bull trend is intact. This weakens the bearish thesis significantly.')
    : (a200ok ? 'Price is above its 200-day moving average — in a long-term bull regime. The single most-watched filter by institutional buyers for whether a stock is worth owning.' : 'Price is below the 200-day average — in a long-term downtrend. Risk is materially higher for longs below this line.');
  const _rsiTip = rsiOk ? 'RSI is in the momentum zone (52–78) — buyers are in control without the stock being overstretched. This is the ideal RSI territory for entering a swing trade.'
    : r.rsi>=78 ? 'RSI is overbought at '+r.rsi?.toFixed(0)+' — the stock has run too far without a pause. Entering here risks buying the peak of a stretched move. Wait for a pullback first.'
    : r.rsi<=48 ? 'RSI is at '+r.rsi?.toFixed(0)+' — sellers dominate. The trend signal lacks momentum support and is more likely to fail.'
    : 'RSI is at '+r.rsi?.toFixed(0)+' — not yet in the momentum zone (52–78). Wait for RSI to confirm before acting on this setup.';
  const _macdTip = r.macd_hist>0
    ? 'MACD histogram is positive ('+r.macd_hist?.toFixed(4)+') — the price trend has bullish momentum behind it. A growing histogram means momentum is still accelerating.'
    : 'MACD histogram is negative ('+r.macd_hist?.toFixed(4)+') — momentum has turned bearish. Upward price moves lack the internal force needed for follow-through.';
  const _volTip = r.vol_ratio!=null ? (r.vol_ratio>=1.2
    ? 'Volume is at '+r.vol_ratio?.toFixed(1)+'× the 20-day average — real buyers are driving this move. Above-average participation adds conviction to the signal.'
    : 'Volume is at '+r.vol_ratio?.toFixed(1)+'× average — below the 1.2× threshold. Moves on low volume are easier to reverse when larger players return.') : '';
  const _vwapTip = r.above_vwap ? 'Price is above the 20-day VWAP ('+r.vwap20?.toFixed(2)+') — the average buyer from the past month is profitable, reducing their incentive to sell. Bullish pressure structure.'
    : 'Price is below the 20-day VWAP ('+r.vwap20?.toFixed(2)+') — the average buyer from the past month is sitting at a loss. That overhead supply makes it harder to push price higher.';
  const _hurstTip = r.hurst==null ? '' : r.hurst>0.55 ? 'Hurst '+r.hurst+' — trending. Price shows persistence in one direction. EMA and momentum signals are more reliable here than usual.'
    : r.hurst<0.45 ? 'Hurst '+r.hurst+' — mean-reverting. Price tends to oscillate and reverse rather than trend. Trend signals have more false positives here — require a stronger overall score before acting.'
    : 'Hurst '+r.hurst+' — random walk. No dominant trending or mean-reverting character detected. Use other signals to determine edge.';
  const _atrTip = r.atr_pct_rank==null ? '' : r.atr_pct_rank<=20 ? 'ATR at '+r.atr_pct_rank+'th percentile — volatility is unusually compressed. This coiling phase often precedes a sharp, sustained breakout when combined with a strong signal. Ideal setup to watch.'
    : r.atr_pct_rank>=80 ? 'ATR at '+r.atr_pct_rank+'th percentile — volatility is expanded and the stock is moving aggressively. Reduce your position size and widen stops to avoid being shaken out by normal noise.'
    : 'ATR at '+r.atr_pct_rank+'th percentile — within normal historical volatility range. Standard position sizing applies.';
  const _divTip = r.divergence=='bullish' ? 'Bullish divergence — price made a lower low but RSI did not. Downward momentum is quietly fading. A reversal or bounce is likely brewing even though price looks weak.'
    : 'Bearish divergence — price made a higher high but RSI did not. Upward momentum is secretly fading. The rally may be running out of fuel.';
  const execCard=`<div class="exec-card">
    <div class="exec-top">
      <div>
        <div class="exec-score-num" style="color:${col}">${r.score}<span style="font-size:13px;color:var(--text3);font-weight:400">/${r.maxScore||8}</span></div>
        <div class="exec-score-lbl">${t('execTitle')}</div>
      </div>
      <div style="flex:1">
        <div style="margin-bottom:4px">${biasBadgeHtml(r.bias)}</div>
        <div class="exec-inds">
          ${ind(stackOk,'EMA',_eTip)}${ind(a200ok,'200',_200Tip)}
          ${rsiOk?ind(true,'RSI '+r.rsi?.toFixed(0),_rsiTip):r.rsi>=78?indWarn('RSI OB',_rsiTip):ind(false,'RSI '+r.rsi?.toFixed(0),_rsiTip)}
          ${ind(r.macd_hist>0,'MACD',_macdTip)}${ind(r.vol_ratio>=1.2,'Vol',_volTip)}
          ${r.above_vwap!=null?ind(r.above_vwap,'VWAP',_vwapTip):''}
          ${r.hurst!=null?`<span class="exec-ind ${r.hurst>0.55?'exec-ind-pass':r.hurst<0.45?'exec-ind-warn':'exec-ind-dim'}" title="${_hurstTip}">H ${r.hurst}</span>`:''}
          ${r.atr_pct_rank!=null?`<span class="exec-ind ${r.atr_pct_rank<=20?'exec-ind-pass':r.atr_pct_rank>=80?'exec-ind-warn':'exec-ind-dim'}" title="${_atrTip}">ATR ${r.atr_pct_rank}%</span>`:''}
          ${r.divergence?`<span class="exec-ind ${r.divergence==='bullish'?'exec-ind-pass':'exec-ind-warn'}" title="${_divTip}">${r.divergence==='bullish'?'↗':'↘'} Div</span>`:''}
        </div>
      </div>
    </div>
    <div class="exec-levels">
      <div class="exec-lvl exec-lvl-res" title="Nearest price level above where sellers previously stopped the advance. The stock needs to break cleanly above this ceiling before it can continue higher.">
        <div class="exec-lvl-label">${t('execRes')}</div>
        <div class="exec-lvl-val">${topRes.length?topRes.map(v=>fmt2(v)).join(' · '):'<span class="exec-lvl-na">—</span>'}</div>
      </div>
      <div class="exec-lvl exec-lvl-entry" title="${isBearExec?'Ideal short entry at the current price — the strategy enters at market when the bearish signal triggers.':'Ideal pullback entry near the EMA 34 (mid-term trend line). Waiting for price to return here gives you a better entry than chasing — lower risk, higher reward.'}">
        <div class="exec-lvl-label">${isBearExec?t('execEntry'):'Pullback entry <span style="font-size:9px;color:var(--text3)">(EMA 34)</span>'}</div>
        <div class="exec-lvl-val">${execEntry!=null?fmt2(execEntry):'<span class="exec-lvl-na">—</span>'}</div>
      </div>
      <div class="exec-lvl exec-lvl-t1" title="First profit target — your gain equals your risk (1:1 reward-to-risk). Taking partial profits here is prudent. If the stock keeps running, hold the rest toward T2.">
        <div class="exec-lvl-label">${t('execT1')} <span style="font-size:9px;color:var(--text3)">(1:1 R:R)</span></div>
        <div class="exec-lvl-val">${execT1!=null?fmt2(execT1):'<span class="exec-lvl-na">—</span>'}</div>
      </div>
      <div class="exec-lvl exec-lvl-sup" title="Nearest price level below where buyers previously stepped in and stopped a decline. A natural floor — if price falls here and holds, that is a sign of strength.">
        <div class="exec-lvl-label">${t('execSup')}</div>
        <div class="exec-lvl-val">${topSup.length?topSup.map(v=>fmt2(v)).join(' · '):'<span class="exec-lvl-na">—</span>'}</div>
      </div>
      <div class="exec-lvl exec-lvl-stop" title="Stop loss — 1.5× ATR from your entry price. If the stock closes at or below this level, the trade thesis is invalidated. Exit immediately to protect your capital — this is not negotiable.">
        <div class="exec-lvl-label">${t('execStop')}</div>
        <div class="exec-lvl-val">${execStop!=null?fmt2(execStop):'<span class="exec-lvl-na">—</span>'}</div>
      </div>
      <div class="exec-lvl exec-lvl-t2" title="Second profit target — your gain is twice your risk (2:1 reward-to-risk). This is the strategy's primary target. Hold for this when the trend is clearly in your favour and momentum is still building.">
        <div class="exec-lvl-label">${t('execT2')} <span style="font-size:9px;color:var(--text3)">(2:1 R:R)</span></div>
        <div class="exec-lvl-val">${execT2!=null?fmt2(execT2):'<span class="exec-lvl-na">—</span>'}</div>
      </div>
    </div>
    ${r.atr==null?`<div class="exec-atr-warn">⚠ Entry · Stop · Target levels require ATR — run a fresh scan to populate</div>`:''}
    <div class="exec-footer">
      ${rrRatio!=null?`<span class="exec-tag" style="background:rgba(61,142,255,.12);color:var(--accent)" title="Risk-to-reward ratio: for every 1 unit you risk, you stand to gain ${rrRatio.toFixed(1)}. Most professionals require at least 1.5:1 before entering a trade.">${t('execRR')} ${rrRatio.toFixed(1)}:1</span>`:''}
      <span class="exec-tag ${r.rs_score!=null?(r.rs_score>2?'exec-ind-pass':r.rs_score<-2?'exec-ind-fail':'exec-ind-dim'):'exec-ind-dim'}" title="${r.rs_score!=null?(r.rs_score>0?'Outperformed its market index by +'+r.rs_score.toFixed(1)+'% over the past 20 days — a relative strength leader. Institutions rotate into leaders first.':'Underperformed its market index by '+Math.abs(r.rs_score).toFixed(1)+'% over the past 20 days — a laggard. Money is rotating away from it.'):'Relative strength vs index not available.'}">RS ${r.rs_score!=null?(r.rs_score>0?'+':'')+r.rs_score.toFixed(1)+'%':'—'}</span>
      ${r.vwap20!=null?`<span class="exec-tag ${r.above_vwap?'exec-ind-pass':'exec-ind-fail'}" title="${r.above_vwap?'Price is above the 20-day VWAP ('+r.vwap20.toFixed(2)+') — buyers from the past month are profitable on average, reducing their incentive to sell. Bullish pressure.':'Price is below the 20-day VWAP ('+r.vwap20.toFixed(2)+') — the average buyer from the past month is underwater. That overhead supply makes it harder to push price higher.'}">VWAP ${r.above_vwap?'▲':'▼'} ${r.vwap20?.toFixed(2)}</span>`:''}
      ${r.weekly&&scanMode==='position'?`<span class="exec-tag exec-ind-${r.weekly.score===4?'pass':r.weekly.score===0?'fail':'warn'}" title="${r.weekly.score===4?'Weekly trend is fully confirmed — EMA stack and price above 200-day are both passing on the weekly chart. Adds strong conviction for longer-term positions.':r.weekly.score===0?'Weekly trend is not confirmed — the daily signal is not supported by the bigger weekly picture. Extra caution advised.':'Weekly trend is partially confirmed — some but not all weekly criteria are passing.'}">${weeklyBadgeHtml(r)}</span>`:''}
      <span style="margin-inline-start:auto;color:var(--text3)" title="ATR (Average True Range) — how much this stock typically moves in a single day. Used to calculate stop loss and profit targets. Wider ATR = larger stops needed.">ATR ${r.atr!=null?fmt2(r.atr):'—'}</span>
    </div>
  </div>`;

  // TF Alignment card (loads async)
  const tfCard=`<div class="tf-card">
    <div class="tf-header"><span>${t('tfTitle')}</span><button class="regime-refresh-btn" onclick="loadTFAlignment('${r.sym}')">⟳</button></div>
    <div id="tf-align-content"><div class="tf-loading">${t('tfLoading')}</div></div>
  </div>`;

  // News card (loads async)
  const newsCard=`<div class="crit-section-title">${t('newsTitle')}</div>
    <div class="vh-card"><div id="news-content"><div class="tf-loading"><span class="spin">⟳</span></div></div></div>`;

  // Score delta display
  const drawerDelta=deltaData.find(d=>d.sym===r.sym);
  let deltaLine='';
  if(drawerDelta){
    const dsign=drawerDelta.score_delta>0?'+':'';
    const dcol=drawerDelta.score_delta>0?'var(--green)':'#ff5252';
    deltaLine=`<div style="font-size:11px;color:var(--text3);margin-top:2px">Score <span style="color:${dcol}">${dsign}${drawerDelta.score_delta}</span> since last scan (was ${drawerDelta.prev_score}/${r.maxScore||8} · ${drawerDelta.prev_bias})</div>`;
  }
  // Action buttons
  const watchNow=watchlistData.includes(r.sym);
  const actBtns=`<div class="signal-actions">
    <button class="sig-act-btn${watchNow?' sig-watch-on':''}" id="sig-wl-btn"
      onclick="toggleWatchlist('${r.sym}',event)">${watchNow?'★ Watchlist':'☆ Watchlist'}</button>
    <button class="goto-btn" onclick="goToVirtualBuy('${r.sym}',${r.price||0})" title="Pre-fill Virtual Portfolio">💰 Virtual Buy</button>
    <button class="goto-btn" onclick="goToSetAlert('${r.sym}','${r.name.replace(/'/g,"\\'")}')" title="Pre-fill Smart Alert Rule">📋 Set Rule</button>
    <button class="goto-btn" onclick="openOnChart('${r.sym}')" title="Open on TradingView chart">📈 Chart</button>
  </div>`;

  // Score history spark + "What Changed" callout
  const histSpark=scoreHistorySparkHtml(r.sym);
  const deltaCallout=buildDeltaCallout(drawerDelta,r);

  // Criteria breakdown — natural language cards, with direction-aware heading
  const critHeading = isBear
    ? `<div class="crit-section-title crit-section-bear">⚠️ Bearish Criteria (Daily Chart) — checkmarks mean downtrend signals are active, NOT buy signals</div>`
    : `<div class="crit-section-title">✅ ${t('critBreakdown')} <span style="font-size:9px;font-weight:400;color:var(--text3);text-transform:none;letter-spacing:0;margin-inline-start:4px">· Daily · 7 pts here · volume (+1 pt) shown above</span></div>`;
  const criteriaSection=`${critHeading}${crits.join('')}`;

  // Plain-language banner for non-financial users
  const sl=scoreLabel(r.score,r.maxScore||8);
  const passCount=crits.filter ? (r.flags||[]).length : 0;
  const plainBannerText={
    'STRONG BUY': `${r.name} is showing strong bullish signals — price trend, momentum, and volume are all aligned for an upward move.`,
    'BUY':        `${r.name} looks positive — the main indicators are supportive of a buy. Consider entering near current price.`,
    'WATCH':      `${r.name} shows some promise but isn't fully ready yet. Monitor it — a breakout could confirm entry.`,
    'SKIP':       `${r.name} doesn't show a clear direction right now. No strong buy or sell signal — better opportunities may exist elsewhere.`,
    'AVOID':      `${r.name} has warning signs. Risk is elevated — best to avoid until conditions improve.`,
    'SELL':       `${r.name} is losing momentum. Existing holders may want to consider an exit or tighten stop-losses.`,
    'STRONG SELL':`${r.name} is showing multiple bearish signals. Price trend, momentum, and volume all point downward — exit positions.`,
  }[r.bias]||'';
  const plainBanner=plainBannerText?`<div class="plain-banner plain-banner-${isBear?'bear':'bull'}">
    <div class="pb-score" style="color:${sl.col}">${sl.text} signal &nbsp;·&nbsp; ${r.score}/${r.maxScore||8} pts</div>
    <div class="pb-text">${plainBannerText}</div>
    <button class="pb-glossary-btn" onclick="openGlossary()">📖 What do these terms mean?</button>
  </div>`:'';

  // ── Mode context banner ─────────────────────────────────────────────────────
  const isPosition = scanMode === 'position';
  const isBreakout = scanMode === 'breakout';
  const modeCtxIcon = isPosition ? '📊' : isBreakout ? '⚡' : '📈';
  const modeCtxTitle = isPosition ? 'Long-Term Position Analysis' : isBreakout ? 'Breakout Hunter Analysis' : 'Short-Term Swing Analysis';
  const modeCtxPillClass = isPosition ? 'position' : isBreakout ? 'breakout' : 'swing';
  const modeCtxPillLabel = isPosition ? 'Position' : isBreakout ? 'Breakout' : 'Swing';
  const modeCtxDesc = isPosition
    ? `This analysis uses <strong>daily + weekly</strong> timeframes. All 9 criteria are evaluated on the daily chart, then cross-referenced against weekly trend alignment. Best suited for investors holding <strong>weeks to months</strong>.`
    : isBreakout
    ? `This analysis uses <strong>volume surge + relative strength</strong> to find early movers. Criteria: price above EMA 200, 2× volume spike, RS outperformance vs index, RSI momentum zone, and MACD positive. Best suited for <strong>breakout entries</strong>.`
    : `This analysis uses the <strong>daily timeframe only</strong>. All 9 criteria — EMA stack, RSI momentum, MACD, volume, and VWAP — are evaluated on the daily chart. Best suited for swing traders holding <strong>days to a few weeks</strong>.`;
  const modeCtxTag3 = isPosition ? '<span class="mode-ctx-tag">🏛 Weekly alignment: separate pass/fail check</span>' : isBreakout ? '<span class="mode-ctx-tag">📡 RS vs index: 20-day outperformance</span>' : '<span class="mode-ctx-tag">⚡ Entry zone: EMA 34 pullback</span>';
  const modeCtx = `<div class="mode-ctx">
    <div class="mode-ctx-icon">${modeCtxIcon}</div>
    <div class="mode-ctx-body">
      <div class="mode-ctx-title">
        ${modeCtxTitle}
        <span id="mode-ctx-pill" class="mode-ctx-pill ${modeCtxPillClass}">${modeCtxPillLabel}</span>
      </div>
      <div class="mode-ctx-desc">${modeCtxDesc}
      </div>
      <div class="mode-ctx-tags">
        <span class="mode-ctx-tag">📅 ${isPosition ? 'Daily + Weekly' : 'Daily chart'}</span>
        <span class="mode-ctx-tag">⏳ ${isPosition ? 'Weeks – months' : isBreakout ? 'Early entry' : 'Days – weeks'}</span>
        <span class="mode-ctx-tag">🎯 ${isBreakout?'8':'9'}-pt score (daily only)</span>
        ${modeCtxTag3}
      </div>
    </div>
  </div>`;

  // Risk warnings (extension, near resistance, regime adjustment)
  const riskWarnings = [];
  if (r.extension_pct > 25) riskWarnings.push(`<span style="background:rgba(255,145,0,.1);color:var(--orange);border-radius:4px;padding:2px 6px;font-size:10px">⚠ Extended ${r.extension_pct}% from 20d low</span>`);
  if (r.near_resistance)     riskWarnings.push(`<span style="background:rgba(255,80,80,.08);color:var(--red);border-radius:4px;padding:2px 6px;font-size:10px">⚠ Near resistance</span>`);
  if (r.regime_discount > 0) riskWarnings.push(`<span style="background:rgba(255,145,0,.08);color:var(--orange);border-radius:4px;padding:2px 6px;font-size:10px">Market ${r.market_regime} → score adjusted to ${r.regime_score}/${r.maxScore||8}</span>`);
  const riskWarningsHtml = riskWarnings.length > 0
    ? `<div style="display:flex;flex-wrap:wrap;gap:6px;padding:8px 0 4px">${riskWarnings.join(' ')}</div>`
    : '';

  // Overview tab: verdict, score, action, what changed, entry guidance
  const initial360 = build360Card(r, null); // no fund data yet — shows loading
  document.getElementById('dtab-signal').innerHTML=`
    <div id="a360-card-wrap">${initial360}</div>
    ${plainBanner}
    ${execCard}
    ${riskWarningsHtml}
    ${modeCtx}
    ${actBtns}
    ${deltaCallout}
    ${histSpark}
    <div id="drawer-block-deals" style="display:none"></div>
    ${shCard}
    ${actionHtml}`;

  // Show block deals for this stock in the Overview tab (instant — uses cache)
  renderDrawerBlockDeals(r.sym);

  // Load fundamentals async and update the 360 card
  load360Analysis(r.sym, r);

  // Setup tab: all the supporting evidence
  document.getElementById('dtab-analysis').innerHTML=`
    <div class="crit-section-title" style="margin-bottom:8px">Price Chart — 1 Year Daily</div>
    <div class="native-chart-wrap" id="drawer-native-chart"><div class="native-chart-loading">Loading chart…</div></div>
    ${criteriaSection}
    ${buildVolCard(r)}
    ${buildDynamicsCard(r)}
    ${rsCard}
    ${weeklyCard}
    ${divCard}
    ${tfCard}
    ${newsCard}`;

  // Async sections live in Setup tab now
  loadTFAlignment(r.sym);
  loadNewsForDrawer(r.sym);
  // Store chart params on the container; load lazily when the Chart tab becomes visible
  const _chartWrap = document.getElementById('drawer-native-chart');
  if (_chartWrap) {
    const _dp = (_oppCache.find(o => o.sym === r.sym) || {}).discovery_price || null;
    _chartWrap.dataset.sym = r.sym;
    _chartWrap.dataset.dp  = _dp ?? '';
    _chartWrap.dataset.cp  = r.price ?? '';
  }
}

function buildTradeTab(r){
  const isBear=['STRONG SELL','SELL','AVOID'].includes(r.bias);
  const fmt=v=>v.toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:2});
  let atrHtml='';
  if(r.atr!=null){
    const stop=isBear?r.price+1.5*r.atr:r.price-1.5*r.atr;
    const tgt1=isBear?r.price-1.5*r.atr:r.price+1.5*r.atr;
    const tgt2=isBear?r.price-3*r.atr:r.price+3*r.atr;
    const stopCol=isBear?'var(--green)':'#ff5252',tgtCol=isBear?'#ff5252':'var(--green)';
    atrHtml=`<div class="crit-section-title">${t('atrTitle')} <span style="font-size:9px;font-weight:400;color:var(--text3);text-transform:none;letter-spacing:0;margin-inline-start:4px">· volatility-based · see Signal tab for structure stop (EMA 89)</span></div>
    <div class="atr-panel">
      <div class="atr-row"><span class="atr-label">ATR(14) <span style="font-size:10px;color:var(--text3);font-weight:400">daily volatility unit</span></span><span class="atr-val" style="color:var(--text2)">${fmt(r.atr)}</span></div>
      <div class="atr-row"><span class="atr-label">${t('atrStop')} <span style="font-size:10px;color:var(--text3);font-weight:400">1.5× ATR</span></span><span class="atr-val" style="color:${stopCol}">${fmt(stop)}</span><button class="alert-btn" onclick="createAlertFromDrawer(${stop.toFixed(4)},'${t('atrStop')}')">${t('setAlert')}</button></div>
      <div class="atr-row"><span class="atr-label">${t('atrT1')} <span style="font-size:10px;color:var(--text3);font-weight:400">1.5× · 1:1 R:R · partial exit</span></span><span class="atr-val" style="color:${tgtCol}">${fmt(tgt1)}</span><button class="alert-btn" onclick="createAlertFromDrawer(${tgt1.toFixed(4)},'T1')">${t('setAlert')}</button></div>
      <div class="atr-row"><span class="atr-label">${t('atrT2')} <span style="font-size:10px;color:var(--text3);font-weight:400">3× · 2:1 R:R · main target</span></span><span class="atr-val" style="color:${tgtCol}">${fmt(tgt2)}</span><button class="alert-btn" onclick="createAlertFromDrawer(${tgt2.toFixed(4)},'T2')">${t('setAlert')}</button></div>
    </div>`;
  }
  let srHtml='';
  if(r.sr&&(r.sr.resistance?.length||r.sr.support?.length)){
    const dist=v=>r.price?((v-r.price)/r.price*100).toFixed(1)+'%':'';
    const res=(r.sr.resistance||[]).slice(0,4);
    const sup=(r.sr.support||[]).slice(0,4);
    srHtml=`<div class="crit-section-title">Support &amp; Resistance</div>
    <div class="sr-panel">
      ${res.map(v=>`<div class="sr-level"><span class="sr-price sr-res">R ${fmt(v)}</span><span class="sr-dist">${dist(v)}</span><button class="alert-btn" onclick="createAlertFromDrawer(${v.toFixed(4)},'R')">${t('setAlert')}</button></div>`).join('')}
      ${sup.map(v=>`<div class="sr-level"><span class="sr-price sr-sup">S ${fmt(v)}</span><span class="sr-dist">${dist(v)}</span><button class="alert-btn" onclick="createAlertFromDrawer(${v.toFixed(4)},'S')">${t('setAlert')}</button></div>`).join('')}
    </div>`;
  }
  const defBalance=settingsData?.account_balance||100000;
  const defRisk=settingsData?.risk_percent||1.5;
  const defStop=r.atr!=null?(isBear?r.price+1.5*r.atr:r.price-1.5*r.atr):0;
  // ATR rank context banner for position sizer
  let atrRankBanner='';
  if(r.atr_pct_rank!=null){
    if(r.atr_pct_rank>=80){
      atrRankBanner=`<div style="background:rgba(255,61,113,.08);border:1px solid rgba(255,61,113,.22);border-radius:7px;padding:9px 12px;margin-bottom:8px;font-size:11px;line-height:1.55;color:rgba(255,255,255,.8)">
        <strong style="color:#ff5252">⚠ High Volatility (ATR Rank ${r.atr_pct_rank}%)</strong><br>
        ATR is in the top 20% of its 252-day range — market is unusually volatile right now. Consider <strong>reducing position size by 30–50%</strong> or widening your stop to avoid being shaken out. The standard 1.5× ATR stop may be too tight.
      </div>`;
    } else if(r.atr_pct_rank<=20){
      atrRankBanner=`<div style="background:rgba(0,230,118,.06);border:1px solid rgba(0,230,118,.18);border-radius:7px;padding:9px 12px;margin-bottom:8px;font-size:11px;line-height:1.55;color:rgba(255,255,255,.8)">
        <strong style="color:var(--green)">● Volatility Compressed (ATR Rank ${r.atr_pct_rank}%)</strong><br>
        ATR is in the bottom 20% of its 252-day range — price is coiling. If this is a valid setup, <strong>tighter stops are viable</strong> and potential reward is asymmetric. Watch for an expansion breakout.
      </div>`;
    } else {
      atrRankBanner=`<div style="background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.06);border-radius:7px;padding:7px 12px;margin-bottom:8px;font-size:11px;color:var(--text3)">
        ATR Rank ${r.atr_pct_rank}% — normal volatility range. Standard position sizing applies.
      </div>`;
    }
  }
  const sizerHtml=`<div class="crit-section-title">Position Sizer</div>
  ${atrRankBanner}
  <div class="sizer-panel">
    <div class="sizer-inputs">
      <div class="sizer-input-group"><label class="sizer-label">Balance</label><input class="sizer-input" id="sz-balance" type="number" value="${defBalance}" onchange="calcSizer()"></div>
      <div class="sizer-input-group"><label class="sizer-label">Risk %</label><input class="sizer-input" id="sz-risk" type="number" value="${defRisk}" step="0.1" min="0.1" max="10" onchange="calcSizer()"></div>
      <div class="sizer-input-group"><label class="sizer-label">Entry</label><input class="sizer-input" id="sz-entry" type="number" value="${r.price?.toFixed(2)||''}" step="0.01" onchange="calcSizer()"></div>
      <div class="sizer-input-group"><label class="sizer-label">Stop</label><input class="sizer-input" id="sz-stop" type="number" value="${defStop?defStop.toFixed(2):''}" step="0.01" onchange="calcSizer()"></div>
    </div>
    <div id="sz-result"></div>
  </div>`;
  const vpPos = virtualData?.positions?.[r.sym];
  const vpSharesHeld = vpPos ? vpPos.shares : 0;
  const _commNote = r.sym?.startsWith('TADAWUL:') ? '<span style="color:var(--text3);font-size:9px;margin-inline-start:4px">· 0.31% brokerage included</span>' : '<span style="color:var(--text3);font-size:9px;margin-inline-start:4px">· 0.1% commission included</span>';
  const vpSection = `<div class="vp-drawer">
    <div class="vp-drawer-title">${t('tabVirtual')}${_commNote} ${vpSharesHeld ? `<span style="color:var(--accent);margin-inline-start:4px">${vpSharesHeld} shares held @ ${fmtPrice(vpPos.avg_cost, r.sym)}</span>` : ''}</div>
    <div style="display:flex;gap:6px;align-items:center;flex-wrap:wrap">
      <input id="vp-buy-shares" class="vp-shares-input" type="number" placeholder="${t('vpShares')}" min="1" step="1">
      <button class="btn btn-success" style="font-size:11px;padding:5px 10px" onclick="virtualBuyFromDrawer()">${t('vpBuy')}</button>
      ${vpSharesHeld ? `<button class="btn btn-secondary" style="font-size:11px;padding:5px 10px;color:#ff5252" onclick="virtualSellFromDrawer()">${t('vpSell')}</button>` : ''}
    </div>
    <div id="vp-trade-status" style="font-size:10px;color:var(--text3);margin-top:4px"></div>
  </div>`;
  const tvEmbedSection='';

  // Trade Plan Card — assembled summary at the top
  const isBearPlan=['STRONG SELL','SELL','AVOID'].includes(r.bias);
  const fmtN=v=>v!=null?v.toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:2}):'—';
  const planStop=r.atr!=null?(isBearPlan?r.price+1.5*r.atr:r.price-1.5*r.atr):null;
  const planT1  =r.atr!=null?(isBearPlan?r.price-1.5*r.atr:r.price+1.5*r.atr):null;
  const planT2  =r.atr!=null?(isBearPlan?r.price-3*r.atr  :r.price+3*r.atr  ):null;
  const stopCol =isBearPlan?'var(--green)':'#ff5252';
  const tgtCol  =isBearPlan?'#ff5252':'var(--green)';
  const tradePlanCard=`<div class="trade-plan-card">
    <div class="tpc-header">Trade Plan <span style="font-size:9px;font-weight:400;color:var(--text3);letter-spacing:0">${isBearPlan?'▼▼ Short / Avoid':'▲▲ Long'} · ATR-based levels</span></div>
    <div class="tpc-levels">
      <div class="tpc-lvl"><div class="tpc-lvl-label">Entry</div><div class="tpc-lvl-val" style="color:var(--text)">${fmtN(r.price)}</div></div>
      <div class="tpc-lvl"><div class="tpc-lvl-label">Stop</div><div class="tpc-lvl-val" style="color:${stopCol}">${planStop!=null?fmtN(planStop):'—'}</div></div>
      <div class="tpc-lvl"><div class="tpc-lvl-label">T1</div><div class="tpc-lvl-val" style="color:${tgtCol}">${planT1!=null?fmtN(planT1):'—'}</div></div>
      <div class="tpc-lvl"><div class="tpc-lvl-label">T2</div><div class="tpc-lvl-val" style="color:${tgtCol}">${planT2!=null?fmtN(planT2):'—'}</div></div>
    </div>
    <div class="tpc-stats">
      <div class="tpc-stat"><div class="tpc-stat-label">Shares</div><div class="tpc-stat-val" id="tpc-shares" style="color:var(--accent)">—</div></div>
      <div class="tpc-stat"><div class="tpc-stat-label">Risk</div><div class="tpc-stat-val" id="tpc-risk" style="color:#ff5252">—</div></div>
      <div class="tpc-stat"><div class="tpc-stat-label">R:R (T1)</div><div class="tpc-stat-val" id="tpc-rr" style="color:var(--yellow)">—</div></div>
    </div>
    ${planStop!=null?`<button class="tpc-set-all-btn" id="tpc-set-all-btn" onclick="setAllAtrAlerts(${planStop.toFixed(4)},${planT1.toFixed(4)},${planT2.toFixed(4)})">Set Stop + T1 + T2 Alerts</button>`:''}
  </div>`;

  document.getElementById('dtab-trade').innerHTML=`
    ${tradePlanCard}
    <div id="kelly-sizing-panel" style="margin-top:8px">
      <div style="font-size:10px;color:var(--text3);padding:4px 0">Loading historical edge…</div>
    </div>
    <div id="drawer-live-price" class="live-price-row">
      <span style="font-size:11px;color:var(--text2)">Scan: <strong>${ccySign(r.sym)} ${fmtPrice(r.price, r.sym)}</strong></span>
      <button class="live-refresh-btn" onclick="refreshLivePrice('${r.sym}')">${t('posLivePrice')}</button>
    </div>
    ${atrHtml}${sizerHtml}${srHtml}
    ${vpSection}`;
  setTimeout(calcSizer, 0);
  loadKellySizing(r.sym);
}

async function loadKellySizing(sym) {
  const el = document.getElementById('kelly-sizing-panel');
  if (!el) return;
  try {
    const d = await fetch('/api/kelly/' + encodeURIComponent(sym)).then(r => r.json());
    if (!d.lab) {
      el.innerHTML = `<div style="font-size:10px;color:var(--text3);padding:4px 0;border:1px solid var(--border);border-radius:6px;padding:7px 10px">
        <strong style="color:var(--text2)">Historical Edge</strong><br>${d.note}
      </div>`;
      return;
    }
    const l = d.lab;
    const confCol = l.confidence === 'high' ? 'var(--green)' : l.confidence === 'moderate' ? 'var(--yellow)' : 'var(--orange)';
    const expCol  = l.expectancy >= 1 ? 'var(--green)' : l.expectancy >= 0 ? 'var(--yellow)' : '#ff5252';
    const szHtml  = d.sizing
      ? `<div style="display:flex;gap:12px;margin-top:6px;flex-wrap:wrap">
          <div><div style="font-size:9px;color:var(--text3);text-transform:uppercase;letter-spacing:.5px">Recommended</div><div style="font-size:14px;font-weight:800;color:var(--accent)">${d.sizing.recommended_shares} shares</div></div>
          <div><div style="font-size:9px;color:var(--text3);text-transform:uppercase;letter-spacing:.5px">Position Value</div><div style="font-size:14px;font-weight:800;color:var(--text)">${d.sizing.position_value_sar.toLocaleString('en-US',{maximumFractionDigits:0})} SAR</div></div>
          <div><div style="font-size:9px;color:var(--text3);text-transform:uppercase;letter-spacing:.5px">Portfolio %</div><div style="font-size:14px;font-weight:800;color:var(--yellow)">${d.sizing.position_pct}%</div></div>
          <div><div style="font-size:9px;color:var(--text3);text-transform:uppercase;letter-spacing:.5px">Risk (1R)</div><div style="font-size:14px;font-weight:800;color:#ff5252">${d.sizing.risk_per_trade_sar.toLocaleString('en-US',{maximumFractionDigits:0})} SAR</div></div>
        </div>`
      : '';
    el.innerHTML = `<div style="background:rgba(255,255,255,.025);border:1px solid var(--border);border-radius:6px;padding:9px 12px">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:6px">
        <span style="font-size:11px;font-weight:700;color:var(--text)">Historical Edge · ${d.style_tag}</span>
        <span style="font-size:10px;color:${confCol}">${l.confidence} confidence · ${l.sample} signals</span>
      </div>
      <div style="display:flex;gap:16px;flex-wrap:wrap">
        <div><div style="font-size:9px;color:var(--text3);text-transform:uppercase;letter-spacing:.5px">Win Rate</div><div style="font-size:13px;font-weight:700;color:${l.win_rate_pct>=55?'var(--green)':l.win_rate_pct>=45?'var(--yellow)':'#ff5252'}">${l.win_rate_pct}%</div></div>
        <div><div style="font-size:9px;color:var(--text3);text-transform:uppercase;letter-spacing:.5px">Avg Win</div><div style="font-size:13px;font-weight:700;color:var(--green)">${l.avg_win_r}R</div></div>
        <div><div style="font-size:9px;color:var(--text3);text-transform:uppercase;letter-spacing:.5px">Avg Loss</div><div style="font-size:13px;font-weight:700;color:#ff5252">${l.avg_loss_r}R</div></div>
        <div><div style="font-size:9px;color:var(--text3);text-transform:uppercase;letter-spacing:.5px">Expectancy</div><div style="font-size:13px;font-weight:700;color:${expCol}">${l.expectancy >= 0 ? '+' : ''}${l.expectancy}R</div></div>
        <div title="Full Kelly = mathematically optimal fraction. Half-Kelly = safer, recommended."><div style="font-size:9px;color:var(--text3);text-transform:uppercase;letter-spacing:.5px">½-Kelly</div><div style="font-size:13px;font-weight:700;color:var(--accent)">${l.kelly_half_pct}%</div></div>
      </div>
      ${szHtml}
      <div style="font-size:10px;color:var(--text3);margin-top:6px">${d.note}</div>
    </div>`;
  } catch(e) {
    const el2 = document.getElementById('kelly-sizing-panel');
    if (el2) el2.innerHTML = '';
  }
}

function buildAnalysisTab(r){
  // Content is now built inside buildSignalTab (Setup tab = dtab-analysis)
  // This function handles the backtest/seasonality which moved to buildFundamentalsTab
  // No-op: dtab-analysis content is set by buildSignalTab
}

function buildSeasonalHtml(r){
  const months=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  if(!r.seasonality) return '';
  const cells=months.map((m,i)=>{
    const val=r.seasonality[i+1];
    if(val==null) return`<div class="season-cell" style="background:var(--border2)"><div class="season-month">${m}</div><div class="season-val" style="color:var(--text3)">—</div></div>`;
    const pct=parseFloat(val.toFixed(1));
    const intensity=Math.min(Math.abs(pct)/5,1);
    const bg=pct>0?`rgba(0,230,118,${(0.08+0.3*intensity).toFixed(2)})`:
                   `rgba(255,61,113,${(0.08+0.3*intensity).toFixed(2)})`;
    return`<div class="season-cell" style="background:${bg}"><div class="season-month">${m}</div><div class="season-val" style="color:${pct>0?'var(--green)':'var(--red)'}">${pct>0?'+':''}${pct}%</div></div>`;
  }).join('');
  return `<div class="crit-section-title">Seasonality <span style="font-size:9px;font-weight:400;color:var(--text3);text-transform:none;letter-spacing:0;margin-inline-start:4px">· avg monthly return over past 5 years</span></div><div class="season-grid">${cells}</div>`;
}

function buildFundamentalsTab(r){
  const sec=sectorOf(r.sym);
  const bm=SECTOR_BENCHMARKS[sec]||SECTOR_BENCHMARKS.other;
  document.getElementById('dtab-fund').innerHTML=`
    <div id="d-value-highlights"></div>
    <div class="fund-section-title">${t('fundTitle')}</div>
    <div id="d-fund-section"><div class="fund-loading">${t('fundLoading')}</div></div>
    <div class="crit-section-title" style="margin-top:14px">${t('btTitle')}</div>
    <div id="drawer-bt"><button class="btn btn-secondary" style="width:100%;font-size:11px" onclick="runBacktestInDrawer('${r.sym}')">${t('btRun')}</button></div>
    ${buildSeasonalHtml(r)}`;
  loadFundamentals(r.sym).then(fdata=>{
    if(!fdata) return;
    renderValueHighlights(fdata, sec, bm, r);
  });
}

function renderValueHighlights(f, sec, bm, r){
  const el=document.getElementById('d-value-highlights');
  if(!el) return;
  const rate=(val,bench,lower_is_better)=>{
    if(val==null||bench==null) return null;
    const ratio=val/bench;
    if(lower_is_better) return ratio<=0.8?'cheap':ratio<=1.2?'fair':'pricey';
    return ratio>=1.2?'cheap':ratio>=0.8?'fair':'pricey';
  };
  const ratingHtml=(r)=>{
    if(!r) return`<span class="vh-rating vh-na">${t('vhNa')}</span>`;
    const cls={'cheap':'vh-cheap','fair':'vh-fair','pricey':'vh-pricey'}[r];
    const lbl={'cheap':t('vhCheap'),'fair':t('vhFair2'),'pricey':t('vhPricey')}[r];
    return`<span class="vh-rating ${cls}">${lbl}</span>`;
  };
  const barRow=(label,val,bench,lowerIsBetter)=>{
    if(val==null) return`<div class="vh-row"><span class="vh-label">${label}</span><div class="vh-bar-wrap"><div class="vh-bar-fill" style="width:0%;background:var(--border2)"></div></div><span class="vh-vals" style="color:var(--text3)">N/A</span>${ratingHtml(null)}</div>`;
    const maxVal=Math.max(val,bench||val)*1.5||1;
    const fillPct=Math.min(val/maxVal*100,100);
    const peerPct=bench?Math.min(bench/maxVal*100,100):50;
    const rt=rate(val,bench,lowerIsBetter);
    const fillCol={'cheap':'var(--green)','fair':'var(--yellow)','pricey':'#ff5252',null:'var(--border2)'}[rt];
    return`<div class="vh-row">
      <span class="vh-label">${label}</span>
      <div class="vh-bar-wrap"><div class="vh-bar-fill" style="width:${fillPct}%;background:${fillCol}"></div>${bench?`<div class="vh-peer-line" style="inset-inline-start:${peerPct}%" title="Sector avg: ${bench}"></div>`:''}</div>
      <span class="vh-vals">${val.toFixed(1)} <span style="color:var(--text3);font-size:10px">vs ${bench??'—'}</span></span>
      ${ratingHtml(rt)}
    </div>`;
  };
  // Fair value estimate
  let fairHtml='';
  if(f.epsForward!=null&&bm.pe!=null){
    const fair=+(f.epsForward*bm.pe).toFixed(2);
    const upside=r.price?+((fair-r.price)/r.price*100).toFixed(1):null;
    const uCol=upside>0?'var(--green)':upside<0?'#ff5252':'var(--text2)';
    fairHtml=`<div class="vh-fair-val"><div><div style="font-size:10px;color:var(--text3);margin-bottom:2px">${t('vhFair')} (EPS×PEbench)</div><div style="font-size:11px;color:var(--text2)">EPS(fwd) ${f.epsForward.toFixed(2)} × ${bm.pe}x</div></div><div style="text-align:end"><span class="vh-fair-price">${fmtPrice(fair,r.sym)}</span>${upside!=null?`<div style="font-size:11px;color:${uCol}">${upside>0?'+':''}${upside}% vs current</div>`:''}</div></div>`;
  }
  const sectorLabel2=SECTOR_BENCHMARKS[sec]?sec.charAt(0).toUpperCase()+sec.slice(1):'General';
  el.innerHTML=`<div class="vh-card">
    <div class="vh-header"><span>${t('vhTitle')}</span><span style="color:var(--text3);font-size:9px">${sectorLabel2} benchmarks (▏= sector avg)</span></div>
    ${barRow(t('vhPe'), f.peTrailing, bm.pe, true)}
    ${barRow(t('vhPb'), f.pb, bm.pb, true)}
    ${barRow(t('vhDe'), f.debtToEquity!=null?f.debtToEquity/100:null, bm.de, true)}
  </div>
  ${fairHtml}`;
}

async function loadFundamentals(sym){
  const el=document.getElementById('d-fund-section');
  if(!el) return null;
  try{
    const res=await fetch('/api/fundamentals?sym='+encodeURIComponent(sym));
    const json2=await res.json();
    if(!json2.success) throw new Error(json2.error||'Failed');
    el.innerHTML=buildFundamentalsSection(json2.data,json2.score);
    return json2.data;
  }catch(e){
    el.innerHTML=`<div class="crit-card fail"><div class="crit-card-header"><span class="crit-icon">⚠️</span><span class="crit-label">${t('fundError')}</span></div><div class="crit-explain" style="font-size:11px;color:var(--text3)">${e.message}</div></div>`;
    return null;
  }
}

function openDrawer(r){
  openDrawerData=r;
  openTickerParam(r.sym);
  const ticker=tickerDisplay(r.sym);
  document.getElementById('d-ticker').textContent=ticker+' · '+sectorLabel(sectorOf(r.sym));
  document.getElementById('d-name').textContent=r.name;
  document.getElementById('d-price').textContent=r.price!=null?ccySign(r.sym)+' '+fmtPrice(r.price,r.sym):'—';
  document.getElementById('d-bias-badge').innerHTML=biasBadgeHtml(r.bias);
  // Discovery price badge — shows change since stock first appeared in Top Opportunities
  const discEl = document.getElementById('d-discovery');
  if (discEl) {
    const opp = _oppCache.find(o => o.sym === r.sym);
    if (opp && opp.discovery_price && r.price) {
      const dp = opp.discovery_price;
      const delta = ((r.price - dp) / dp * 100);
      const sign = delta >= 0 ? '+' : '';
      const cls = delta >= 0 ? 'up' : 'down';
      const daysAgo = opp.detected_at ? Math.round((Date.now() - new Date(opp.detected_at).getTime()) / 86400000) : null;
      const ageStr = daysAgo != null ? ` · ${daysAgo}d ago` : '';
      discEl.innerHTML = `<span class="discovery-badge" title="Price when first discovered in Top Opportunities">Discovered @ ${ccySign(r.sym)}${fmtPrice(dp, r.sym)}${ageStr} <span class="disc-delta ${cls}">${sign}${delta.toFixed(1)}%</span></span>`;
    } else {
      discEl.innerHTML = '';
    }
  }
  // Reset to Signal tab
  document.querySelectorAll('.drawer-tab').forEach(b=>b.classList.remove('active'));
  document.querySelectorAll('.drawer-tab-panel').forEach(p=>p.classList.remove('dtab-active'));
  const firstTab=document.querySelector('.drawer-tab');
  if(firstTab) firstTab.classList.add('active');
  document.getElementById('dtab-signal').classList.add('dtab-active');
  renderTVActions(r);
  // Clear chart loaded flag so it reloads for the new symbol
  const _prevChartWrap = document.getElementById('drawer-native-chart');
  if (_prevChartWrap) delete _prevChartWrap.dataset.chartLoaded;
  // Build all tabs
  buildSignalTab(r);
  buildTradeTab(r);
  buildAnalysisTab(r);
  buildFundamentalsTab(r);
  loadDrawerNews(r.sym, r.name);
  document.getElementById('detail-overlay').classList.add('open');
  document.getElementById('detail-drawer').classList.add('open');
  fetchCalendar(r.sym).then(ev=>{
    const el=document.getElementById('drawer-cal');
    if(el) el.innerHTML=calBadgeHtml(ev);
    renderTable();
  });
}
function closeDrawer(){ openDrawerData=null; clearTickerParam(); document.getElementById('detail-overlay').classList.remove('open'); document.getElementById('detail-drawer').classList.remove('open'); }

async function runValidate(sym){
  const el=document.getElementById('drawer-validate-result');
  if(!el) return;
  el.innerHTML='<div style="font-size:11px;color:var(--text3);padding:8px 0">Checking setup…</div>';
  try{
    const res=await fetch('/api/validate/'+encodeURIComponent(sym));
    const d=await res.json();
    if(!d.ok&&d.error){el.innerHTML=`<div style="font-size:11px;color:var(--red);padding:6px">${d.error}</div>`;return;}
    const vCol=d.verdict==='STRONG GO'?'var(--green)':d.verdict==='CAUTIOUS GO'?'var(--yellow)':d.verdict==='WAIT'?'var(--orange)':'#ff5252';
    const rows=d.checks.map(c=>`<div style="display:flex;align-items:flex-start;gap:6px;padding:4px 0;border-bottom:1px solid var(--border)">
      <span style="color:${c.pass?'var(--green)':'#ff5252'};font-size:12px;flex-shrink:0;margin-top:1px">${c.pass?'✓':'✗'}</span>
      <div><div style="font-size:11px;font-weight:600;color:var(--text)">${c.name}</div><div style="font-size:10px;color:var(--text2);line-height:1.4;margin-top:1px">${c.detail}</div></div>
    </div>`).join('');
    const velArrow=d.velocity?.direction==='rising'?'<span style="color:var(--green)">↗ Rising</span>':d.velocity?.direction==='falling'?'<span style="color:#ff5252">↘ Falling</span>':'<span style="color:var(--text3)">→ Stable</span>';
    el.innerHTML=`<div style="background:rgba(255,255,255,.03);border:1px solid var(--border);border-radius:6px;padding:10px 12px;margin-top:4px">
      <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px">
        <span style="font-size:13px;font-weight:800;color:${vCol}">${d.verdict}</span>
        <span style="font-size:10px;color:var(--text3)">${d.confidence}% confidence · Momentum: ${velArrow}</span>
      </div>
      <div style="font-size:11px;color:var(--text2);margin-bottom:8px;line-height:1.5">${d.summary}</div>
      ${rows}
    </div>`;
  }catch(e){el.innerHTML=`<div style="font-size:11px;color:var(--red);padding:6px">Validate failed: ${e.message}</div>`;}
}

function buildDrawerBody(r){
  if(r.bias==='NO_DATA'||r.bias==='ERROR') return`<div class="crit-card fail"><div class="crit-card-header"><span class="crit-icon">✗</span><span class="crit-label">${t('bNoData')}</span></div><div class="crit-explain">${r.error||''}</div></div>`;
  const{ema13,ema34,ema89,ema200}=r.emas||{};
  const isBear=['STRONG SELL','SELL','AVOID'].includes(r.bias);
  const col=isBear?'#ff1744':scoreColor(r.score,r.maxScore||8);
  const pct=Math.round((r.score/(r.maxScore||8))*100);
  const verdict=(EXPL.verdicts[lang]||EXPL.verdicts.en)[r.bias];
  const verdictText=verdict?verdict(r.name):'';

  let crits;
  if(isBear){
    // ── Bearish criteria breakdown ──────────────────────────────────────────
    const stackBear=ema13<ema34&&ema34<ema89;
    const below200=r.price<ema200;
    const rsiWeak=r.rsi>22&&r.rsi<=48;
    const rsiOs=r.rsi<=22;
    const macdBear=r.macd_hist<0;
    const volOk=r.vol_ratio>=1.2;
    crits=[
      buildCrit(stackBear, t('lEmaStackBear')+' (2'+t('pts')+')',
        `EMA 13: <strong>${ema13?.toFixed(2)}</strong> | EMA 34: <strong>${ema34?.toFixed(2)}</strong> | EMA 89: <strong>${ema89?.toFixed(2)}</strong>`,
        stackBear ? EXPL.emaStackBear[lang].pass : EXPL.emaStackBear[lang].fail),
      buildCrit(below200, t('lEma200Bear')+' (2'+t('pts')+')',
        `${lang==='ar'?'السعر':'Price'}: <strong>${r.price?.toFixed(2)}</strong> | EMA 200: <strong>${ema200?.toFixed(2)}</strong>`,
        below200 ? EXPL.ema200Bear[lang].pass : EXPL.ema200Bear[lang].fail),
      buildCrit(rsiWeak&&!rsiOs, t('lRsiBear')+' (2'+t('pts')+')',
        `RSI(14): <strong>${r.rsi?.toFixed(1)}</strong>`,
        rsiOs ? EXPL.rsiOs[lang] : rsiWeak ? EXPL.rsiWeakBear[lang] : EXPL.rsiNotWeak[lang],
        rsiOs?'warn':null),
      buildCrit(macdBear, t('lMacd')+' (1'+t('pts')+')',
        `${lang==='ar'?'هيستوجرام':'Histogram'}: <strong>${r.macd_hist?.toFixed(4)}</strong>`,
        macdBear ? EXPL.macdBear[lang].pass : EXPL.macdBear[lang].fail),
      buildCrit(volOk, t('lVol')+' (1'+t('pts')+')',
        `${lang==='ar'?'الحجم':'Volume'}: <strong>${r.vol_ratio}×</strong>`,
        volOk ? EXPL.volBear[lang].pass : EXPL.volBear[lang].fail),
    ];
  } else {
    // ── Bullish criteria breakdown (existing) ───────────────────────────────
    const stack=ema13>ema34&&ema34>ema89;
    const above200=r.price>ema200;
    const rsiOk=r.rsi>=52&&r.rsi<78;
    const rsiOb=r.rsi>=78;
    const macdOk=r.macd_hist>0;
    const volOk=r.vol_ratio>=1.2;
    crits=[
      buildCrit(stack, t('lEmaStack')+' (2'+t('pts')+')',
        `EMA 13: <strong>${ema13?.toFixed(2)}</strong> | EMA 34: <strong>${ema34?.toFixed(2)}</strong> | EMA 89: <strong>${ema89?.toFixed(2)}</strong>`,
        stack ? EXPL.emaStack[lang].pass : EXPL.emaStack[lang].fail),
      buildCrit(above200, t('lEma200')+' (2'+t('pts')+')',
        `${lang==='ar'?'السعر':'Price'}: <strong>${r.price?.toFixed(2)}</strong> | EMA 200: <strong>${ema200?.toFixed(2)}</strong>`,
        above200 ? EXPL.ema200[lang].pass : EXPL.ema200[lang].fail),
      buildCrit(rsiOk&&!rsiOb, t('lRsi')+' (2'+t('pts')+')',
        `RSI(14): <strong>${r.rsi?.toFixed(1)}</strong>`,
        rsiOb ? EXPL.rsiOb[lang] : rsiOk ? EXPL.rsiOk[lang] : EXPL.rsiWeak[lang],
        rsiOb?'warn':null),
      buildCrit(macdOk, t('lMacd')+' (1'+t('pts')+')',
        `${lang==='ar'?'هيستوجرام':'Histogram'}: <strong>${r.macd_hist>0?'+':''}${r.macd_hist?.toFixed(4)}</strong>`,
        macdOk ? EXPL.macd[lang].pass : EXPL.macd[lang].fail),
      buildCrit(volOk, t('lVol')+' (1'+t('pts')+')',
        `${lang==='ar'?'الحجم':'Volume'}: <strong>${r.vol_ratio}×</strong> ${lang==='ar'?'(يلزم 1.2×)':'(need 1.2×)'}`,
        volOk ? EXPL.vol[lang].pass : EXPL.vol[lang].fail),
    ];
  }

  const shd=shariaMap[r.sym];
  const shCard=shd?`<div class="crit-section-title">${t('shariaTitle')}</div>
    <div class="crit-card ${'compliant'===shd.status?'pass':'non_compliant'===shd.status?'fail':'warn'}">
      <div class="crit-card-header">
        <span class="crit-icon">${'compliant'===shd.status?'✅':'non_compliant'===shd.status?'❌':'⚠️'}</span>
        <span class="crit-label">${t('shariaTitle')}</span>
        <span class="crit-value" style="color:${'compliant'===shd.status?'var(--green)':'non_compliant'===shd.status?'var(--red)':'var(--yellow)'}">${{'compliant':t('sHalal'),'non_compliant':t('sNonHalal'),'review':t('sReview')}[shd.status]||t('sUnknown')}</span>
      </div>
      <div class="crit-explain">${shd.basis}</div>
      <div class="crit-explain" style="margin-top:5px;font-size:11px;color:var(--text3)">${t('shariaDisc')}</div>
    </div>`:'';

  let actionHtml='';
  if(r.bias==='STRONG BUY'||r.bias==='BUY'){
    actionHtml=`<div class="entry-box"><div class="entry-box-title">${t('entryGuidanceTitle')}</div><p>${EXPL.entryGuide[lang](ema34?.toFixed(2),ema89?.toFixed(2))}</p></div>`;
  } else if(r.bias==='WATCH'){
    actionHtml=`<div class="entry-box"><div class="entry-box-title">${t('watchTitle')}</div><p>${EXPL.watchGuide[lang](r.warnings||[],ema34?.toFixed(2))}</p></div>`;
  } else if(r.bias==='STRONG SELL'||r.bias==='SELL'){
    actionHtml=`<div class="entry-box" style="background:rgba(255,23,68,.06);border-color:rgba(255,23,68,.25)"><div class="entry-box-title" style="color:#ff1744">${t('sellGuidanceTitle')}</div><p>${EXPL.sellGuide[lang](ema34?.toFixed(2),ema89?.toFixed(2))}</p></div>`;
  } else if(r.bias==='AVOID'){
    actionHtml=`<div class="entry-box" style="background:rgba(255,145,0,.06);border-color:rgba(255,145,0,.25)"><div class="entry-box-title" style="color:var(--orange)">${t('avoidTitle')}</div><p>${EXPL.avoidGuide[lang](r.warnings||[],ema34?.toFixed(2))}</p></div>`;
  }

  // ── ATR trade levels ─────────────────────────────────────────────────────
  let atrHtml='';
  if(r.atr!=null){
    const isBear=['STRONG SELL','SELL','AVOID'].includes(r.bias);
    const stop =isBear?r.price+1.5*r.atr:r.price-1.5*r.atr;
    const tgt1 =isBear?r.price-1.5*r.atr:r.price+1.5*r.atr;
    const tgt2 =isBear?r.price-3*r.atr   :r.price+3*r.atr;
    const fmt  =v=>v.toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:2});
    const stopCol=isBear?'var(--green)':'#ff5252';
    const tgtCol =isBear?'#ff5252':'var(--green)';
    atrHtml=`<div class="crit-section-title">${t('atrTitle')} <span style="font-size:9px;font-weight:400;color:var(--text3);text-transform:none;letter-spacing:0;margin-inline-start:4px">· volatility-based · see Signal tab for structure stop (EMA 89)</span></div>
    <div class="atr-panel">
      <div class="atr-row"><span class="atr-label">ATR(14) <span style="font-size:10px;color:var(--text3);font-weight:400">daily volatility unit</span></span><span class="atr-val" style="color:var(--text2)">${fmt(r.atr)}</span></div>
      <div class="atr-row"><span class="atr-label">${t('atrStop')} <span style="font-size:10px;color:var(--text3);font-weight:400">1.5× ATR</span></span><span class="atr-val" style="color:${stopCol}">${fmt(stop)}</span><button class="alert-btn" onclick="createAlertFromDrawer(${stop.toFixed(4)},'${t('atrStop')}')">${t('setAlert')}</button></div>
      <div class="atr-row"><span class="atr-label">${t('atrT1')} <span style="font-size:10px;color:var(--text3);font-weight:400">1.5× · 1:1 R:R · partial exit</span></span><span class="atr-val" style="color:${tgtCol}">${fmt(tgt1)}</span><button class="alert-btn" onclick="createAlertFromDrawer(${tgt1.toFixed(4)},'T1')">${t('setAlert')}</button></div>
      <div class="atr-row"><span class="atr-label">${t('atrT2')} <span style="font-size:10px;color:var(--text3);font-weight:400">3× · 2:1 R:R · main target</span></span><span class="atr-val" style="color:${tgtCol}">${fmt(tgt2)}</span><button class="alert-btn" onclick="createAlertFromDrawer(${tgt2.toFixed(4)},'T2')">${t('setAlert')}</button></div>
    </div>`;
  }

  // ── Relative Strength ────────────────────────────────────────────────────
  let rsCard='';
  if(r.rs_score!=null){
    const isLead=r.rs_score>2, isLag=r.rs_score<-2;
    const rsCol=isLead?'var(--green)':isLag?'#ff5252':'var(--yellow)';
    const rsLbl=isLead?t('rsLeader'):isLag?t('rsLaggard'):'Neutral';
    const sign=r.rs_score>0?'+':'';
    rsCard=`<div class="crit-section-title">${t('rsTitle')}</div>
    <div class="crit-card ${isLead?'pass':isLag?'fail':'warn'}">
      <div class="crit-card-header">
        <span class="crit-icon">${isLead?'📈':isLag?'📉':'➡️'}</span>
        <span class="crit-label">${t('rsTitle')} vs index</span>
        <span class="crit-value" style="color:${rsCol}">${sign}${r.rs_score.toFixed(1)}% — ${rsLbl}</span>
      </div>
      <div class="crit-explain">${isLead?`This stock has outperformed its market index by <strong>${sign}${r.rs_score.toFixed(1)}%</strong> over the past 20 sessions — a sign of relative institutional strength.`:isLag?`This stock has underperformed its market index by <strong>${r.rs_score.toFixed(1)}%</strong> over the past 20 sessions — money is rotating away from it.`:'Performing roughly in line with its market index over the past 20 sessions.'}</div>
    </div>`;
  }

  // ── Weekly alignment (invest mode) ──────────────────────────────────────
  let weeklyCard='';
  if(scanMode==='position'&&r.weekly){
    const{ema_stack,above200,score}=r.weekly;
    weeklyCard=`<div class="crit-section-title">${t('weeklyTitle')}</div>
    <div class="crit-card ${score===4?'pass':score===0?'fail':'warn'}">
      <div class="crit-card-header">
        <span class="crit-icon">${score===4?'✅':score===0?'❌':'⚠️'}</span>
        <span class="crit-label">${t('weeklyTitle')}</span>
        <span class="crit-value" style="color:${score===4?'var(--green)':score===0?'var(--red)':'var(--yellow)'}">${weeklyBadgeHtml(r)}</span>
      </div>
      <div class="crit-nums">${t('wEmaStack')}: ${ema_stack?'✓':'✗'} | ${t('wAbove200')}: ${above200===null?'N/A':above200?'✓':'✗'}</div>
      <div class="crit-explain">${score===4?'Weekly timeframe fully aligned — higher conviction for longer holds.':score===0?'Weekly trend is against the daily signal — consider shorter holding period or wait for weekly alignment.':'Partially aligned on weekly — monitor for full confirmation before sizing up.'}</div>
    </div>`;
  }

  return`
    <div class="drawer-score-row">
      <div class="drawer-score-num" style="color:${col}">${r.score}<span style="font-size:16px;color:var(--text3)">/${r.maxScore||8}</span></div>
      <div style="flex:1">
        <div style="display:flex;align-items:center;gap:8px">
          <div style="font-size:11px;color:var(--text2)">${biasBadgeHtml(r.bias)}</div>
          ${r.conviction_score!=null?`<span style="font-size:10px;color:var(--text3)" title="Conviction score: multi-factor blend of technical (40%), smart money (20%), RS (20%), OBV (10%), regime (10%) + pattern bonus. Higher = more confirming evidence across all dimensions.">⬦ ${r.conviction_score} conviction</span>`:''}
        </div>
        <div class="drawer-score-bar-track"><div class="drawer-score-bar-fill" style="width:${pct}%;background:${col}"></div></div>
        <div class="drawer-verdict">${verdictText}</div>
      </div>
    </div>
    ${(r.patterns||[]).length?`<div style="display:flex;flex-wrap:wrap;gap:4px;margin-top:4px">${(r.patterns||[]).map(p=>{const pc=p.bullish?'#00e5aa':'#ff5252';return`<span style="font-size:10px;font-weight:700;padding:2px 8px;border-radius:4px;background:${pc}15;color:${pc};border:1px solid ${pc}33" title="${p.desc}">⬦ ${p.name}</span>`;}).join('')}</div>`:''}
    ${(r.style_tags||[]).length?`<div style="display:flex;flex-wrap:wrap;gap:4px;margin-top:4px">${(r.style_tags||[]).map(s=>{const sc={'Momentum':'#5ba3ff','Trend':'#00e676','Breakout':'#ffd740','Recovery':'#3d8bff','Pullback':'#33d1e5'}[s]||'var(--text3)';return`<span style="font-size:10px;font-weight:700;padding:2px 8px;border-radius:10px;background:${sc}22;color:${sc};border:1px solid ${sc}44">${s}</span>`;}).join('')}</div>`:''}

    <div style="display:flex;align-items:center;gap:6px;margin-top:6px">
      <button class="btn btn-secondary" style="font-size:11px;padding:4px 10px;flex:1" onclick="runValidate('${r.sym}')">✓ Validate Setup</button>
    </div>
    <div id="drawer-validate-result" style="margin-top:6px"></div>
    <div style="margin-top:4px">
      <div id="drawer-live-price" class="live-price-row">
        <span style="font-size:11px;color:var(--text2)">Scan: <strong>${r.price?.toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:2})||'—'}</strong></span>
        <button class="live-refresh-btn" onclick="refreshLivePrice('${r.sym}')">${t('posLivePrice')}</button>
      </div>
    </div>
    ${shCard}
    ${rsCard}
    ${weeklyCard}
    <div class="crit-section-title">${t('critBreakdown')}</div>
    ${crits.join('')}
    ${actionHtml}
    ${atrHtml}
    <div class="crit-section-title">${t('btTitle')}</div>
    <div id="drawer-bt">
      <button class="btn btn-secondary" style="width:100%;font-size:11px" onclick="runBacktestInDrawer('${r.sym}')">${t('btRun')}</button>
    </div>
    <div class="fund-section-title">${t('fundTitle')}</div>
    <div id="d-fund-section"><div class="fund-loading">${t('fundLoading')}</div></div>`;
}

// Renders a "how close to flipping" bar below a failing criterion
function buildProximityBar(key, pass, r) {
  if (pass) return ''; // only show for failing criteria
  const p = r.proximity;
  if (!p) return '';
  const isBear = ['STRONG SELL','SELL','AVOID'].includes(r.bias);

  let pct = 0, label = '', approaching = false;

  switch(key) {
    case 'emaStack': {
      // gap between EMA13 and EMA34 in %; closer to 0 = near crossover
      const gap = p.emaStack ?? 0;
      const threshold = 3; // ±3% is "approaching"
      approaching = !isBear ? (gap > -threshold && gap < 0) : (gap < threshold && gap > 0);
      pct = Math.max(0, Math.min(100, 50 + (gap / threshold * 50)));
      label = gap > 0
        ? `EMA 13 is ${Math.abs(gap).toFixed(1)}% above EMA 34 — bullish stack forming`
        : `EMA 13 is ${Math.abs(gap).toFixed(1)}% below EMA 34 — ${Math.abs(gap)<1?'very close to crossover':'gap narrowing helps'}`;
      break;
    }
    case 'ema200': {
      const pctFromEma = p.ema200 ?? 0;
      const threshold = 5;
      approaching = !isBear ? (pctFromEma > -threshold && pctFromEma < 0) : (pctFromEma < threshold && pctFromEma > 0);
      pct = Math.max(0, Math.min(100, 50 + (pctFromEma / threshold * 50)));
      label = pctFromEma > 0
        ? `Price is ${pctFromEma.toFixed(1)}% above EMA 200 — criterion already met`
        : `Price is ${Math.abs(pctFromEma).toFixed(1)}% below EMA 200${approaching?' — within striking distance':''}`;
      break;
    }
    case 'rsi': {
      const rsiVal = r.rsi ?? 50;
      if (!isBear) {
        // Bullish: needs RSI ≥ 52
        approaching = rsiVal >= 44 && rsiVal < 52;
        pct = Math.max(0, Math.min(100, (rsiVal / 78) * 100));
        label = `RSI at ${rsiVal.toFixed(1)} — needs ${Math.max(0,(52-rsiVal)).toFixed(1)} more pts to enter momentum zone (52–78)`;
      } else {
        // Bearish: needs RSI ≤ 48
        approaching = rsiVal > 48 && rsiVal <= 56;
        pct = Math.max(0, Math.min(100, 100 - ((rsiVal - 22) / 56 * 100)));
        label = `RSI at ${rsiVal.toFixed(1)} — needs to fall ${Math.max(0,(rsiVal-48)).toFixed(1)} pts to enter weak zone (22–48)`;
      }
      break;
    }
    case 'macd': {
      const hist = p.macd ?? 0;
      approaching = Math.abs(hist) < 0.005;
      pct = approaching ? 80 : Math.abs(hist) < 0.02 ? 60 : Math.abs(hist) < 0.05 ? 35 : 15;
      const direction = !isBear ? 'positive' : 'negative';
      label = approaching
        ? `MACD histogram at ${hist.toFixed(4)} — very close to ${direction} crossover`
        : `MACD histogram at ${hist.toFixed(4)} — needs to turn ${direction}`;
      break;
    }
    default: return '';
  }

  if (!approaching && pct < 40) return ''; // too far away — don't clutter
  const col = approaching ? 'var(--yellow)' : 'var(--text3)';
  return `<div class="prox-bar-wrap">
    <div class="prox-bar-track"><div class="prox-bar-fill" style="width:${pct}%;background:${col}"></div></div>
    <div class="prox-label"><span>${label}</span>${approaching?`<span class="prox-approaching prox-app-near">⚡ Approaching</span>`:''}</div>
  </div>`;
}

function buildCrit(pass,label,valueHtml,explain,override=null,proximityHtml=''){
  const cls=override||(pass?'pass':'fail');
  const icon=cls==='pass'?'✅':cls==='warn'?'⚠️':'❌';
  const passLabel=pass?t('pass'):t('fail');
  const passColor=cls==='pass'?'var(--green)':cls==='warn'?'var(--yellow)':'var(--red)';
  return`<div class="crit-card ${cls}">
    <div class="crit-card-header">
      <span class="crit-icon">${icon}</span>
      <span class="crit-label">${label}</span>
      <span class="crit-value" style="color:${passColor}">${passLabel}</span>
    </div>
    <div class="crit-nums">${valueHtml}</div>
    <div class="crit-explain">${explain}</div>
    ${proximityHtml}
  </div>`;
}

// ────────────────────────────────────────────────────────────────────────────
// Scoring rules grid
// ────────────────────────────────────────────────────────────────────────────
function renderScoringRules(){
  const rules=[
    {label:'EMA '+t('lEmaStack').split(' ')[0], pts:'2', descKey:'srEmaStack'},
    {label:'EMA 200', pts:'2', descKey:'srEma200'},
    {label:'RSI 52–78', pts:'2', descKey:'srRsi'},
    {label:'MACD Hist', pts:'1', descKey:'srMacd'},
    {label:t('lVol'), pts:'1', descKey:'srVol'},
  ];
  const rulesHtml=rules.map(r=>`
    <div class="scoring-rule">
      <div class="sr-label">${r.label}</div>
      <div class="sr-pts">${r.pts} ${t('pts')}</div>
      <div class="sr-desc">${t(r.descKey)}</div>
    </div>`).join('');
  // Render into both possible containers (Settings tab uses -settings suffix)
  const g1=document.getElementById('scoring-rules-grid'); if(g1) g1.innerHTML=rulesHtml;
  const g2=document.getElementById('scoring-rules-grid-settings'); if(g2) g2.innerHTML=rulesHtml;
  document.querySelectorAll('.scoring-card-header h3').forEach(el=>{ if(el.dataset.i18n==='scoringTitle'||el.textContent.includes('scored')) el.textContent=t('scoringTitle'); });
  document.querySelector('.scoring-card-header span').textContent=t('scoringSubtitle');
}

// ────────────────────────────────────────────────────────────────────────────
// Criteria editor
// ────────────────────────────────────────────────────────────────────────────
async function loadCriteriaEditor(){
  const grid=document.getElementById('criteria-grid');
  grid.innerHTML=`<div style="padding:20px;color:var(--text3);font-size:12px">${t('loading')}</div>`;
  try{
    const res=await fetch('/api/rules');
    rulesData=await res.json();
    renderCriteriaEditor();
  }catch(e){ grid.innerHTML=`<div style="padding:20px;color:var(--red);font-size:12px">${e.message}</div>`; }
}

function renderCriteriaEditor(){
  if(!rulesData) return;
  const bc=rulesData.bias_criteria||{};
  const rr=rulesData.risk_rules||[];
  document.getElementById('criteria-grid').innerHTML=[
    renderCriteriaCard('bullish',t('crBullish'),bc.bullish||[],'bias_criteria.bullish'),
    renderCriteriaCard('bearish',t('crBearish'),bc.bearish||[],'bias_criteria.bearish'),
    renderCriteriaCard('neutral',t('crNeutral'),bc.neutral||[],'bias_criteria.neutral'),
    renderCriteriaCard('risk',   t('crRisk'),   rr,            'risk_rules'),
  ].join('');
  document.querySelectorAll('.criteria-text').forEach(ta=>{
    ta.addEventListener('input',()=>markDirty(ta.closest('[data-section]').dataset.section));
    ta.style.height=ta.scrollHeight+'px';
    ta.addEventListener('input',function(){ this.style.height='auto'; this.style.height=this.scrollHeight+'px'; });
  });
}

function renderCriteriaCard(id,title,items,section){
  const itemsHtml=items.map((item,i)=>`
    <div class="criteria-item"><textarea class="criteria-text" rows="1" data-index="${i}">${escHtml(item)}</textarea>
    <button class="criteria-del" onclick="removeCriterion('${section}',${i})">✕</button></div>`).join('');
  return`<div class="criteria-card" data-section="${section}">
    <div class="criteria-card-header"><h3>${title}</h3><span id="save-notice-${id}" class="save-notice">${t('unsaved')}</span></div>
    <div class="criteria-body" id="crit-body-${id}">${itemsHtml}
      <div class="add-criteria-row">
        <input type="text" class="add-criteria-input" id="add-input-${id}" placeholder="${t('addPlaceholder')}" onkeydown="if(event.key==='Enter'){addCriterion('${section}','${id}');event.preventDefault();}">
        <button class="btn btn-secondary" style="font-size:11px;padding:5px 10px" onclick="addCriterion('${section}','${id}')">${t('addBtn')}</button>
      </div>
    </div>
    <div class="criteria-save-bar">
      <span style="font-size:11px;color:var(--text3)">${t('editHint')}</span>
      <button class="btn btn-primary" style="margin-inline-start:auto;font-size:11px;padding:5px 12px" onclick="saveSection('${section}','${id}')">${t('saveBtn')}</button>
    </div>
  </div>`;
}

function escHtml(s){ return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }
function markDirty(section){ const el=document.getElementById('save-notice-'+sectionToId(section)); if(el){el.textContent=t('unsaved');el.classList.add('visible');} }
function sectionToId(s){ const m={'bias_criteria.bullish':'bullish','bias_criteria.bearish':'bearish','bias_criteria.neutral':'neutral','risk_rules':'risk'}; return m[s]||s; }
function getItemsFromCard(section){ const card=document.querySelector(`[data-section="${section}"]`); if(!card)return[]; return[...card.querySelectorAll('.criteria-text')].map(ta=>ta.value.trim()).filter(Boolean); }
function updateSection(section,items){ if(!rulesData)return; if(section==='risk_rules'){rulesData.risk_rules=items;return;} const key=section.replace('bias_criteria.',''); if(!rulesData.bias_criteria)rulesData.bias_criteria={}; rulesData.bias_criteria[key]=items; }
function addCriterion(section,id){ const inp=document.getElementById('add-input-'+id); const val=inp.value.trim(); if(!val)return; const items=getItemsFromCard(section); items.push(val); updateSection(section,items); inp.value=''; renderCriteriaEditor(); markDirty(section); }
function removeCriterion(section,idx){ const items=getItemsFromCard(section); items.splice(idx,1); updateSection(section,items); renderCriteriaEditor(); markDirty(section); }

async function saveSection(section,id){
  const items=getItemsFromCard(section); updateSection(section,items);
  try{
    const res=await fetch('/api/rules',{method:'PUT',headers:{'Content-Type':'application/json'},body:JSON.stringify({bias_criteria:rulesData.bias_criteria,risk_rules:rulesData.risk_rules})});
    const r=await res.json();
    if(r.ok){ const el=document.getElementById('save-notice-'+id); if(el){el.textContent=t('saved');el.style.color='var(--green)';setTimeout(()=>{el.classList.remove('visible');el.style.color='';},2000);} }
    else alert(r.error||'Save failed');
  }catch(e){ alert(e.message); }
}

// ────────────────────────────────────────────────────────────────────────────
// Fundamentals
// ────────────────────────────────────────────────────────────────────────────
function fmtNum(v,dec=2){ return v!=null?v.toFixed(dec):t('fundNone'); }
function fmtPct(v){ return v!=null?v.toFixed(1)+'%':t('fundNone'); }
function fmtBig(v){
  if(v==null) return t('fundNone');
  if(Math.abs(v)>=1e12) return (v/1e12).toFixed(2)+'T';
  if(Math.abs(v)>=1e9)  return (v/1e9).toFixed(2)+'B';
  if(Math.abs(v)>=1e6)  return (v/1e6).toFixed(2)+'M';
  return v.toLocaleString();
}
function metricColor(val,goodThresh,badThresh,higherIsBetter){
  if(val==null) return'fv-dim';
  if(higherIsBetter) return val>=goodThresh?'fv-green':val>=badThresh?'fv-yellow':'fv-red';
  return val<=goodThresh?'fv-green':val<=badThresh?'fv-yellow':'fv-red';
}
function fundRow(label,valHtml){ return`<div class="fund-row"><span class="fund-row-label">${label}</span><span class="fund-row-val">${valHtml}</span></div>`; }

function buildFundamentalsSection(f,scoreObj){
  const sc=scoreObj||{};
  const sig=sc.signal||'N/A';
  const score=sc.score;
  const sigCls=sig==='UNDERVALUED'?'fund-undervalued':sig==='FAIR VALUE'?'fund-fair':'fund-overvalued';
  const sigLabel=sig==='UNDERVALUED'?t('sigUndervalued'):sig==='FAIR VALUE'?t('sigFair'):sig==='OVERVALUED'?t('sigOvervalued'):t('na');
  const scoreCol=score>=70?'var(--green)':score>=45?'var(--yellow)':'var(--red)';

  // Signal row
  const signalHtml=`<div class="fund-signal-row">
    <div>
      <div class="fund-score-num" style="color:${scoreCol}">${score!=null?score:'—'}</div>
      <div style="font-size:11px;color:var(--text2);margin-top:2px">${t('fundScore')}</div>
      <div class="fund-score-bar-track" style="min-width:80px">
        <div class="fund-score-bar-fill" style="width:${score||0}%;background:${scoreCol}"></div>
      </div>
    </div>
    <div style="flex:1;display:flex;flex-direction:column;align-items:flex-end;gap:6px">
      <span class="fund-signal-badge ${sigCls}">${sigLabel}</span>
      ${f.marketCap?`<span style="font-size:11px;color:var(--text3)">${t('lMarketCap')}: <strong style="color:var(--text)">${fmtBig(f.marketCap)} ${f.currency||'SAR'}</strong></span>`:''}
    </div>
  </div>`;

  // Valuation panel
  const valRows=[
    fundRow(t('lPE'),    `<span class="${metricColor(f.peTrailing,12,20,false)}">${fmtNum(f.peTrailing,1)}</span>`),
    fundRow(t('lFPE'),   `<span class="${metricColor(f.peForward,10,18,false)}">${fmtNum(f.peForward,1)}</span>`),
    fundRow(t('lPB'),    `<span class="${metricColor(f.pb,1.5,3,false)}">${fmtNum(f.pb,2)}</span>`),
    fundRow(t('lEVEbitda'),`<span class="${metricColor(f.evEbitda,8,15,false)}">${fmtNum(f.evEbitda,1)}</span>`),
    fundRow('EPS',       `<span class="fv-dim">${fmtNum(f.eps,2)}</span>`),
    fundRow('EPS (Fwd)', `<span class="fv-dim">${fmtNum(f.epsForward,2)}</span>`),
  ].join('');

  // Dividends panel
  const divRows=[
    fundRow(t('lDivYield'),   `<span class="${metricColor(f.divYield,5,2,true)}">${fmtPct(f.divYield)}</span>`),
    fundRow(t('lDivRate'),    `<span class="fv-dim">${f.divRate!=null?f.divRate.toFixed(2)+' '+(f.currency||'SAR'):t('fundNone')}</span>`),
    fundRow(t('lPayoutRatio'),`<span class="${metricColor(f.payoutRatio,60,85,false)}">${fmtPct(f.payoutRatio)}</span>`),
    ...(f.exDivDate?[fundRow(t('lExDiv'),`<span class="fv-dim">${f.exDivDate}</span>`)]:[]),
  ].join('');

  // Profitability panel
  const profRows=[
    fundRow(t('lROE'),        `<span class="${metricColor(f.roe,15,10,true)}">${fmtPct(f.roe)}</span>`),
    fundRow(t('lNetMargin'),  `<span class="${metricColor(f.netMargin,15,8,true)}">${fmtPct(f.netMargin)}</span>`),
    fundRow(t('lOpMargin'),   `<span class="${metricColor(f.opMargin,20,12,true)}">${fmtPct(f.opMargin)}</span>`),
    fundRow(t('lEbitdaMargin'),`<span class="fv-dim">${fmtPct(f.ebitdaMargin)}</span>`),
  ].join('');

  // Health panel
  const healthRows=[
    fundRow(t('lDE'),         `<span class="${metricColor(f.debtToEquity,50,150,false)}">${f.debtToEquity!=null?f.debtToEquity.toFixed(1):t('fundNone')}</span>`),
    fundRow(t('lCurrentRatio'),`<span class="${metricColor(f.currentRatio,2,1,true)}">${fmtNum(f.currentRatio,2)}</span>`),
    fundRow(t('lFreeCF'),     `<span class="fv-dim">${fmtBig(f.freeCashflow)}</span>`),
    fundRow(t('lBeta'),       `<span class="fv-dim">${fmtNum(f.beta,2)}</span>`),
    ...(f.insiderPct!=null?[fundRow(t('lInsider'),`<span class="fv-dim">${fmtPct(f.insiderPct)}</span>`)]:[]),
    ...(f.institutionPct!=null?[fundRow(t('lInstitution'),`<span class="fv-dim">${fmtPct(f.institutionPct)}</span>`)]:[]),
  ].join('');

  // 52-week range bar
  let rangeHtml='';
  if(f.high52w!=null&&f.low52w!=null&&f.price!=null){
    const range=f.high52w-f.low52w;
    const pos=range>0?Math.max(0,Math.min(100,((f.price-f.low52w)/range)*100)):50;
    rangeHtml=`<div class="fund-52w-wrap">
      <div class="fund-section-title" style="margin-bottom:8px">${t('s52w')}</div>
      <div class="fund-52w-header">
        <span>${fmtNum(f.low52w,2)}</span>
        <span style="color:var(--text)">${fmtNum(f.price,2)} (${pos.toFixed(0)}%)</span>
        <span>${fmtNum(f.high52w,2)}</span>
      </div>
      <div class="fund-52w-track">
        <div class="fund-52w-fill" style="width:100%"></div>
        <div class="fund-52w-cursor" style="inset-inline-start:${pos}%"></div>
      </div>
      ${f.ma50!=null?`<div style="display:flex;gap:16px;margin-top:8px;font-size:11px;color:var(--text3)"><span>MA50: <strong style="color:var(--text)">${fmtNum(f.ma50,2)}</strong></span><span>MA200: <strong style="color:var(--text)">${fmtNum(f.ma200,2)}</strong></span></div>`:''}
    </div>`;
  }

  return`${signalHtml}
    ${rangeHtml}
    <div class="fund-panel"><div class="fund-panel-header">${t('sValuation')}</div><div class="fund-rows">${valRows}</div></div>
    <div class="fund-panel"><div class="fund-panel-header">${t('sDividends')}</div><div class="fund-rows">${divRows}</div></div>
    <div class="fund-panel"><div class="fund-panel-header">${t('sProfitability')}</div><div class="fund-rows">${profRows}</div></div>
    <div class="fund-panel"><div class="fund-panel-header">${t('sHealth')}</div><div class="fund-rows">${healthRows}</div></div>`;
}

// ────────────────────────────────────────────────────────────────────────────
// API / polling
// ────────────────────────────────────────────────────────────────────────────
async function startScan(){
  const btn=document.getElementById('btn-scan'); btn.disabled=true; btn.innerHTML='<span class="spin">⟳</span> Scanning…';
  const mkt=activeMarket==='all'?'tasi':activeMarket;
  await fetch('/api/scan/start',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({market:mkt,mode:scanMode})});
  startPolling();
}
async function startQuickScan(){
  if(!scanData.length){
    alert('Run a full scan first — Quick Scan only refreshes stocks from the previous scan.');
    return;
  }
  const btn=document.getElementById('btn-quick'); btn.disabled=true; btn.innerHTML='<span class="spin">⚡</span> Scanning…';
  const mkt=activeMarket==='all'?'tasi':activeMarket;
  const r=await fetch('/api/scan/quick',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({market:mkt})}).then(x=>x.json());
  if(!r.ok){ btn.disabled=false; btn.innerHTML='⚡ Quick'; alert(r.message||'Quick scan failed'); return; }
  // Show how many stocks are being re-scanned
  btn.innerHTML=`<span class="spin">⚡</span> ${r.scanning}/${r.full}`;
  startPolling();
}
function startPolling(){ if(pollTimer)return; pollTimer=setInterval(poll,2000); poll(); }

async function poll(){
  try{
    const[st,sr]=await Promise.all([fetch('/api/status').then(r=>r.json()),fetch('/api/scan/results').then(r=>r.json())]);
    document.getElementById('status-dot').className='status-dot '+(st.scan.running?'running':'ok');
    const prog=document.getElementById('scan-progress');
    if(st.scan.running){
      prog.style.display='block';
      const pct=st.scan.total>0?Math.round((st.scan.progress/st.scan.total)*100):0;
      document.getElementById('prog-fill').style.width=pct+'%';
      document.getElementById('scan-progress-text').textContent=t('scanning')+` ${st.scan.progress}/${st.scan.total} (${pct}%)`;
    } else prog.style.display='none';
    if(sr.results&&sr.results.length&&!archiveViewing){ scanData=sr.results; renderTable(); }
    if(sr.scanned_at){
      const d=new Date(sr.scanned_at);
      const ts=document.getElementById('last-run-text');
      if(ts) ts.textContent=t('lastScan')+' '+d.toLocaleString();
      document.getElementById('scan-time').textContent=t('lastScan')+' '+d.toLocaleTimeString();
      showFreshness(sr.scanned_at);
    }
    if(!st.scan.running){ const b=document.getElementById('btn-scan'); b.disabled=false; b.innerHTML='⟳ Full Scan'; const bq=document.getElementById('btn-quick'); if(bq){bq.disabled=false;bq.innerHTML='⚡ Quick';} const bs=document.getElementById('btn-scan-selected'); if(bs){bs.disabled=false;bs.innerHTML='⟳ '+t('scanSelected');} }
    if(!st.scan.running){
      clearInterval(pollTimer); pollTimer=null;
      try{
        const dl=await fetch('/api/scan/delta').then(r=>r.json()); deltaData=(dl?.delta)||[]; updateMovers();
        fetch('/api/score-history').then(r=>r.json()).then(h=>{scoreHistory=h;if(!archiveViewing)renderTable();}).catch(()=>{});
        saveArchiveSnapshot();
        checkPriceAlerts();
        batchFetchCalendars();
      }catch(_){}
    }
  }catch(_){}
}

// ────────────────────────────────────────────────────────────────────────────
// Init
// ────────────────────────────────────────────────────────────────────────────
async function init(){
  // Apply saved language first
  setLang(lang);
  initViewMode();
  renderScoringRules();
  renderSectorFilter();
  // Apply currency state immediately (before data loads)
  applyCurrencyUI();
  try{
    const[sr,sh,uv,dl,pos,cfg,vp,sh2]=await Promise.all([
      fetch('/api/scan/results').then(r=>r.json()),
      fetch('/api/sharia').then(r=>r.json()),
      fetch('/api/universe').then(r=>r.json()),
      fetch('/api/scan/delta').then(r=>r.json()),
      fetch('/api/positions').then(r=>r.json()),
      fetch('/api/settings').then(r=>r.json()).catch(()=>({})),
      fetch('/api/virtual').then(r=>r.json()).catch(()=>({})),
      fetch('/api/score-history').then(r=>r.json()).catch(()=>({})),
    ]);
    shariaMap=sh||{};
    universeData=uv||{};
    deltaData=(dl?.delta)||[];
    positionsData=pos||{};
    settingsData=cfg||{};
    virtualData=vp||{};
    scoreHistory=sh2||{};
    applyCurrencyUI();
    applyModeUI();
    connectSSE();
    // Initialize archive button if history exists
    if(Object.keys(localStorage).some(k=>k.startsWith(ARCHIVE_PFX))){ const btn=document.getElementById('archive-btn'); if(btn) btn.style.display=''; }
    renderArchiveDropdown();
    fetch('/api/live/status').then(r=>r.json()).then(s=>{ if(s.active){liveActive=true;liveIntervalVal=s.interval;updateLiveBtn();} }).catch(()=>{});
    loadAutoScanStatus();
    if(sr.results&&sr.results.length){
      scanData=sr.results; renderTable();
      if(sr.scanned_at){
        const d=new Date(sr.scanned_at);
        document.getElementById('scan-time').textContent=t('lastScan')+' '+d.toLocaleTimeString();
        const ts=document.getElementById('last-run-text'); if(ts) ts.textContent=t('lastScan')+' '+d.toLocaleString();
        showFreshness(sr.scanned_at);
      }
      setTimeout(batchFetchCalendars,500);
      // Open drawer if URL has ?ticker= param
      setTimeout(openFromUrl, 200);
    }
    document.getElementById('status-dot').className='status-dot ok';
  }catch(_){}
  try{ const st=await fetch('/api/status').then(r=>r.json()); if(st.scan.running)startPolling(); }catch(_){}
}
// Escape key closes drawer + any open popover
document.addEventListener('keydown',e=>{
  if(e.key==='Escape'){
    if(openDrawerData) closeDrawer();
    document.getElementById('col-popover')?.classList.remove('open');
    document.getElementById('archive-dropdown-menu')?.classList.remove('open');
  }
});

// ── Auto-scan status pill ────────────────────────────────────────────────────
async function loadAutoScanStatus() {
  try {
    const s = await fetch('/api/auto-scan/status').then(r=>r.json());
    const pill = document.getElementById('auto-scan-pill');
    const txt  = document.getElementById('auto-scan-pill-text');
    if (!pill || !txt) return;

    // Only show pill on trading days (Sun=0…Thu=4)
    const nowKSA = new Date(Date.now() + 3 * 3600 * 1000);
    const day = nowKSA.getUTCDay();
    const hKSA = nowKSA.getUTCHours();
    const isTrading = day >= 0 && day <= 4;

    if (!isTrading) { pill.style.display = 'none'; return; }
    pill.style.display = 'inline-flex';

    const todayStr = nowKSA.toISOString().slice(0, 10);
    const done = s.log?.[todayStr] || [];
    const slotNames = ['morning', 'midday', 'afternoon'];

    if (s.next && s.next.msUntil != null) {
      const minUntil = Math.round(s.next.msUntil / 60000);
      const timeStr = `${String(s.next.h).padStart(2,'0')}:${String(s.next.m).padStart(2,'0')}`;
      pill.classList.remove('as-fired');
      txt.textContent = `Next auto-scan ${timeStr} KSA (${minUntil}m)`;
    } else if (done.length === slotNames.length) {
      pill.classList.add('as-fired');
      txt.textContent = `Auto-scans done ✓ (${done.length}/3 today)`;
    } else if (hKSA >= 16) {
      pill.classList.remove('as-fired');
      txt.textContent = `Market closed — ${done.length}/3 scans ran`;
    } else {
      pill.classList.remove('as-fired');
      txt.textContent = `Auto-scan: ${done.length}/3 today`;
    }
  } catch (_) {}
}

setInterval(loadAutoScanStatus, 60 * 1000); // refresh every minute

// ── Macro Calendar ────────────────────────────────────────────────────────────
const TYPE_LABELS = { fed:'Fed', sama:'SAMA', opec:'OPEC+', cpi:'CPI', nfp:'Jobs', earnings:'Earnings', holiday:'Holiday', macro:'Saudi Macro' };

function dayLabel(dateStr) {
  const todayKSA = new Date(Date.now() + 3*3600*1000).toISOString().slice(0,10);
  if (dateStr === todayKSA) return 'Today';
  const diff = Math.round((new Date(dateStr) - new Date(todayKSA)) / 86400000);
  if (diff === 1) return 'Tomorrow';
  if (diff <= 6) {
    const names = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
    return names[new Date(dateStr + 'T12:00:00Z').getUTCDay()];
  }
  return new Date(dateStr + 'T12:00:00Z').toLocaleDateString('en-GB',{day:'numeric',month:'short'});
}

async function loadMacroPanel(force=false) {
  const scroll = document.getElementById('macro-cal-scroll');
  const countEl = document.getElementById('macro-event-count');
  if (!scroll) return;
  try {
    const d = await fetch('/api/macro/events?days=21').then(r=>r.json());
    const events = d.events || [];
    if (countEl) countEl.textContent = events.length ? `(${events.length})` : '';
    if (!events.length) {
      scroll.innerHTML = '<div class="macro-empty">No major events in the next 21 days.</div>';
    } else {
      const todayKSA = new Date(Date.now() + 3*3600*1000).toISOString().slice(0,10);
      scroll.innerHTML = events.map(e => {
        const isToday = e.date === todayKSA;
        const tasiTag = e.tasiImpact
          ? `<span class="macro-evt-tasi ${e.tasiImpact}">${e.tasiImpact === 'closed' ? '🔒 TASI Closed' : e.tasiImpact === 'bullish' ? '↑ Bullish' : e.tasiImpact === 'bearish' ? '↓ Bearish' : '→ Neutral'}</span>`
          : '';
        return `<div class="macro-evt ${e.impact}${isToday?' today':''}" title="${e.detail}">
          <div class="macro-evt-type ${e.type}">${TYPE_LABELS[e.type]||e.type}</div>
          <div class="macro-evt-label">${e.label}</div>
          <div class="macro-evt-date">${dayLabel(e.date)} · ${e.date.slice(5).replace('-','/')}</div>
          <div class="macro-evt-detail">${e.detail.slice(0,60)}${e.detail.length>60?'…':''}</div>
          ${tasiTag}
        </div>`;
      }).join('');
    }
  } catch(e) {
    scroll.innerHTML = `<div class="macro-empty">Error loading events: ${e.message}</div>`;
  }
}

// ── Whale Watch ──────────────────────────────────────────────────────────────
async function loadWhaleTab(force=false) {
  await loadBlockDeals(force);
}

async function loadSectorBreadth(){
  const el=document.getElementById('sector-breadth-panel');
  if(!el) return;
  el.innerHTML='<div style="color:var(--text3);font-size:12px;padding:8px 0">Loading…</div>';
  try{
    const d=await fetch('/api/sectors/breadth').then(r=>r.json());
    if(!d.sectors||!d.sectors.length){el.innerHTML='<div style="color:var(--text3);font-size:12px;padding:8px 0">No scan data. Run a scan first.</div>';return;}
    const rows=d.sectors.map(s=>{
      const mCol=s.momentum==='strong'?'var(--green)':s.momentum==='weak'?'#ff5252':'var(--yellow)';
      const barW=s.bull_pct+'%';
      return`<div style="display:flex;align-items:center;gap:8px;padding:5px 0;border-bottom:1px solid var(--border)">
        <div style="font-size:11px;font-weight:600;color:var(--text);width:130px;flex-shrink:0">${s.sector}</div>
        <div style="flex:1;background:rgba(255,255,255,.05);border-radius:3px;height:6px;overflow:hidden"><div style="height:100%;width:${barW};background:${mCol};border-radius:3px;transition:width .4s"></div></div>
        <div style="font-size:10px;color:${mCol};font-weight:700;width:32px;text-align:end">${s.bull_pct}%</div>
        <div style="font-size:10px;color:var(--text3);width:60px">${s.count_buy}↑ ${s.count_sell}↓ ${s.count_watch}◎</div>
        <div style="font-size:10px;color:var(--text3);width:60px">${s.avg_rs!=null?(s.avg_rs>0?'+':'')+s.avg_rs+'% RS':'—'}</div>
      </div>`;
    }).join('');
    el.innerHTML=`<div style="display:flex;gap:8px;padding:4px 0 8px;font-size:10px;color:var(--text3)">
        <span>${d.total_stocks} stocks · ${d.sectors.length} sectors</span>
        <span style="margin-inline-start:auto">${d.scanned_at?new Date(d.scanned_at).toLocaleTimeString():''}</span>
      </div>${rows}`;
  }catch(e){el.innerHTML=`<div style="color:var(--red);font-size:12px;padding:8px 0">Error: ${e.message}</div>`;}
}

async function loadExitCheck(){
  const el=document.getElementById('exit-check-panel');
  if(!el) return;
  el.innerHTML='<div style="color:var(--text3);font-size:12px;padding:8px 0">Checking positions…</div>';
  try{
    const d=await fetch('/api/positions/exit-check').then(r=>r.json());
    if(!d.checks||!d.checks.length){el.innerHTML='<div style="color:var(--text3);font-size:12px;padding:8px 0">No open positions to check.</div>';return;}
    const actionColor={'EXIT':'#ff5252','REDUCE':'var(--orange)','WATCH':'var(--yellow)','HOLD':'var(--green)','DATA_MISSING':'var(--text3)'};
    const rows=d.checks.map(c=>{
      const col=actionColor[c.action]||'var(--text2)';
      const vel=c.velocity?.direction==='rising'?'<span style="color:var(--green)">↗</span>':c.velocity?.direction==='falling'?'<span style="color:#ff5252">↘</span>':'<span style="color:var(--text3)">→</span>';
      const exits=c.exit_signals?.length?`<div style="font-size:10px;color:#ff5252;margin-top:3px">${c.exit_signals.map(s=>'✗ '+s).join('<br>')}</div>`:'';
      const holds=c.hold_signals?.length?`<div style="font-size:10px;color:var(--green);margin-top:2px">${c.hold_signals.map(s=>'✓ '+s).join('<br>')}</div>`:'';
      const pl=c.pl_pct!=null?`<span style="font-size:10px;color:${c.pl_pct>=0?'var(--green)':'#ff5252'}">${c.pl_pct>=0?'+':''}${c.pl_pct}%</span>`:'';
      return`<div style="background:rgba(255,255,255,.025);border:1px solid var(--border);border-radius:6px;padding:9px 12px;margin-bottom:6px">
        <div style="display:flex;align-items:center;gap:8px">
          <span style="font-size:12px;font-weight:700;color:var(--text)">${c.name||c.sym}</span>
          ${vel}
          ${pl}
          <span style="margin-inline-start:auto;font-size:11px;font-weight:800;color:${col};padding:2px 8px;background:${col}22;border-radius:10px">${c.action}</span>
        </div>
        ${exits}${holds}
        ${c.note?`<div style="font-size:10px;color:var(--text3);margin-top:3px">${c.note}</div>`:''}
      </div>`;
    }).join('');
    const sum=d.summary||{};
    el.innerHTML=`<div style="display:flex;gap:10px;padding:4px 0 8px;font-size:10px">
      <span style="color:#ff5252">${sum.exit||0} EXIT</span><span style="color:var(--orange)">${sum.reduce||0} REDUCE</span>
      <span style="color:var(--yellow)">${sum.watch||0} WATCH</span><span style="color:var(--green)">${sum.hold||0} HOLD</span>
    </div>${rows}`;
  }catch(e){el.innerHTML=`<div style="color:var(--red);font-size:12px;padding:8px 0">Error: ${e.message}</div>`;}
}

async function loadCorrelationMatrix() {
  const el = document.getElementById('correlation-panel');
  if (!el) return;
  const syms = Object.keys(positionsData || {});
  if (syms.length < 2) {
    el.innerHTML = '<div style="color:var(--text3);font-size:12px;padding:8px 0">Need at least 2 open positions to compute correlation.</div>';
    return;
  }
  el.innerHTML = '<div style="color:var(--text3);font-size:12px;padding:8px 0">Computing…</div>';
  try {
    const d = await fetch('/api/correlation', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ syms }) }).then(r=>r.json());
    if (!d.matrix || !d.matrix.length) { el.innerHTML = '<div style="color:var(--text3);font-size:12px;padding:8px 0">Not enough scan data for these positions — run a scan first.</div>'; return; }
    const names = d.names || d.syms;
    const n = d.syms.length;
    // Find high-correlation pairs (>0.7, excluding diagonal)
    const warnings = [];
    for (let i = 0; i < n; i++) for (let j = i+1; j < n; j++) {
      if (d.matrix[i][j] != null && d.matrix[i][j] >= 0.7) warnings.push(`${tickerDisplay(d.syms[i])} ↔ ${tickerDisplay(d.syms[j])}: ${d.matrix[i][j].toFixed(2)}`);
    }
    // Color mapping
    function corrColor(v) {
      if (v == null) return 'var(--bg2)';
      if (v >= 0.7)  return 'rgba(255,82,82,.25)';
      if (v >= 0.3)  return 'rgba(255,160,0,.18)';
      if (v <= -0.3) return 'rgba(0,229,170,.18)';
      return 'rgba(255,255,255,.04)';
    }
    function corrText(v) {
      if (v == null) return '—';
      if (v === 1)   return '—';
      return (v >= 0 ? '+' : '') + v.toFixed(2);
    }
    // Build grid
    const labelRow = `<div></div>${d.syms.map(s=>`<div style="font-size:9px;font-weight:700;color:var(--text3);text-align:center;padding:2px 0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${tickerDisplay(s)}</div>`).join('')}`;
    const rows = d.syms.map((rs, i) =>
      `<div style="font-size:9px;font-weight:700;color:var(--text3);display:flex;align-items:center;padding-inline-end:4px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${tickerDisplay(rs)}</div>` +
      d.syms.map((_, j) => {
        const v = d.matrix[i][j];
        const bg = i === j ? 'rgba(255,255,255,.08)' : corrColor(v);
        const txt = i === j ? '●' : corrText(v);
        const color = i === j ? 'var(--text3)' : v != null && v >= 0.7 ? '#ff5252' : v != null && v <= -0.3 ? 'var(--green)' : 'var(--text2)';
        return `<div style="background:${bg};border-radius:4px;padding:5px 3px;text-align:center;font-size:10px;font-weight:700;color:${color}">${txt}</div>`;
      }).join('')
    ).map(r => `<div style="display:contents">${r}</div>`).join('');
    const warnHtml = warnings.length
      ? `<div style="margin-bottom:8px;padding:7px 10px;background:rgba(255,82,82,.08);border:1px solid rgba(255,82,82,.25);border-radius:6px;font-size:11px;color:#ff5252">⚠ Highly correlated pairs (≥0.70): ${warnings.join(' · ')}</div>`
      : `<div style="margin-bottom:8px;font-size:11px;color:var(--green)">✓ No highly correlated pairs — portfolio is well diversified</div>`;
    const legend = `<div style="display:flex;gap:10px;font-size:10px;color:var(--text3);margin-top:8px">
      <span><span style="display:inline-block;width:10px;height:10px;border-radius:2px;background:rgba(255,82,82,.25);vertical-align:middle;margin-inline-end:3px"></span>High ≥0.70</span>
      <span><span style="display:inline-block;width:10px;height:10px;border-radius:2px;background:rgba(255,160,0,.18);vertical-align:middle;margin-inline-end:3px"></span>Moderate 0.30–0.70</span>
      <span><span style="display:inline-block;width:10px;height:10px;border-radius:2px;background:rgba(0,229,170,.18);vertical-align:middle;margin-inline-end:3px"></span>Negative (good)</span>
    </div>`;
    el.innerHTML = warnHtml +
      `<div style="display:grid;grid-template-columns:60px ${d.syms.map(()=>'1fr').join(' ')};gap:3px;align-items:center">${labelRow}${rows}</div>` +
      legend;
  } catch(e) { el.innerHTML = `<div style="color:var(--red);font-size:12px;padding:8px 0">Error: ${e.message}</div>`; }
}

function whaleEmoji(score) {
  if (score >= 8) return '🐋🐋🐋';
  if (score >= 5) return '🐋🐋';
  if (score >= 3) return '🐋';
  return '◦';
}

function whaleDirection(r) {
  const bear = ['STRONG SELL','SELL','AVOID'].includes(r.bias);
  const mfi  = r.mfi;
  if (!mfi) return { cls:'wdir-neu', label:'Unknown' };
  if (!bear && mfi > 65) return { cls:'wdir-acc', label:'📈 Accumulation' };
  if ( bear && mfi < 35) return { cls:'wdir-dist', label:'📉 Distribution' };
  if (!bear && r.obv_trend==='rising') return { cls:'wdir-acc', label:'↑ Buying' };
  if ( bear && r.obv_trend==='falling') return { cls:'wdir-dist', label:'↓ Selling' };
  return { cls:'wdir-neu', label:'Neutral' };
}

// renderWhaleActivity removed Phase 4 — whale_score has no edge (Volume Activity UI cut Phase 1, /api/whale/activity removed).

async function addBlockDeal() {
  const sym   = document.getElementById('bd-sym')?.value.trim();
  const price = parseFloat(document.getElementById('bd-price')?.value);
  const qty   = parseInt(document.getElementById('bd-qty')?.value);
  const note  = document.getElementById('bd-note')?.value.trim()||'';
  if (!sym || !price || !qty) { alert('Symbol, price, and quantity are required.'); return; }
  const name = scanData.find(r=>tickerDisplay(r.sym)===sym||r.sym===`TADAWUL:${sym}`)?.name||'';
  await fetch('/api/whale/block-deals/add',{method:'POST',headers:{'Content-Type':'application/json'},
    body:JSON.stringify({sym,price,qty,note,name,time:new Date().toISOString()})});
  ['bd-sym','bd-price','bd-qty','bd-note'].forEach(id=>{const el=document.getElementById(id);if(el)el.value='';});
  loadBlockDeals(true);
}

async function deleteBlockDeal(sym, time) {
  await fetch('/api/whale/block-deals/delete',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({sym,time})});
  loadBlockDeals(true);
}

async function loadBlockDeals(force=false) {
  const listEl = document.getElementById('block-deals-list');
  if (!listEl) return;
  try {
    const d = await fetch('/api/whale/block-deals').then(r=>r.json());
    if (!d.deals?.length) {
      listEl.innerHTML = `<div class="whale-empty">No block deals found today. Argaam is checked automatically — or enter deals manually above.</div>
        ${d.error?`<div class="whale-error">ℹ️ ${d.error}</div>`:''}`;
      return;
    }
    // Cache for drawer Overview tab
    blockDealsCache = d.deals;
    // If drawer is open, refresh the block-deals section in the Overview tab
    if(openDrawerData) renderDrawerBlockDeals(openDrawerData.sym);

    const autoCount = d.deals.filter(x=>x.source==='Argaam').length;
    const manCount  = d.deals.filter(x=>x.source==='Manual').length;
    const srcLine   = [autoCount?`${autoCount} from Argaam`:'', manCount?`${manCount} manual`:''].filter(Boolean).join(' · ');
    // Remove any previous source info div to avoid accumulation on refresh
    listEl.parentElement?.querySelectorAll('.bd-src-info').forEach(el=>el.remove());
    if (srcLine) {
      const info = document.createElement('div');
      info.className = 'bd-src-info';
      info.style.cssText = 'font-size:11px;color:var(--text3);padding:4px 0 8px;';
      info.textContent = `Sources: ${srcLine}` + (d.error ? ` · ⚠️ ${d.error}` : '');
      listEl.parentElement?.insertBefore(info, listEl);
    }
    const fmt = v => v>=1e9?(v/1e9).toFixed(2)+'B SAR':v>=1e6?(v/1e6).toFixed(1)+'M SAR':(v/1e3).toFixed(0)+'K SAR';

    // Significance relative to each stock's ADTV (falls back to absolute if ADTV unknown)
    function dealSignificance(sarValue, sym){
      const s = dealSignificanceVsADTV(sarValue, sym);
      const adtv = getADTV(sym);
      const bg = s.col==='#ff5252'?'rgba(255,23,68,.12)':s.col==='var(--orange)'?'rgba(255,145,0,.1)':
                 s.col==='var(--yellow)'?'rgba(255,215,64,.1)':'rgba(255,255,255,.04)';
      const pctLabel = adtv ? ` · ${s.pct.toFixed(0)}% of ADTV` : '';
      return { ...s, bg, pctLabel };
    }
    // Max deal value in this batch — used to size bars relatively
    const maxVal = Math.max(...d.deals.map(x=>x.value||x.price*x.qty||0), 1);

    listEl.innerHTML = d.deals.map((deal) => {
      const sarValue = deal.value||deal.price*deal.qty||0;
      const scanRow  = scanData.find(r=>r.sym===deal.sym);
      const bias     = scanRow ? biasBadgeHtml(scanRow.bias) : '';
      const whale    = scanRow?.whale_score>=5 ? `<span title="Whale score ${scanRow.whale_score}/10">🐋</span>` : '';
      const time     = deal.time ? new Date(deal.time).toLocaleTimeString('en-SA',{hour:'2-digit',minute:'2-digit'}) : '';
      const val      = fmt(sarValue);
      const sarDisp  = sarValue.toLocaleString('en-SA',{maximumFractionDigits:0});
      const isManual = deal.source === 'Manual';
      const sig      = dealSignificance(sarValue, deal.sym);
      // Relative bar: this deal vs largest deal today
      const relPct   = Math.round((sarValue / maxVal) * 100);
      // Vol context: if stock was scanned, show vol_ratio as note
      const volCtx   = scanRow?.vol_ratio!=null
        ? `<span style="font-size:9px;color:${scanRow.vol_ratio>=1.5?'var(--green)':scanRow.vol_ratio>=1.2?'var(--yellow)':'var(--text3)'}">Vol ${scanRow.vol_ratio}× avg</span>`
        : '';
      const freq = d.frequency?.[deal.sym];
      const freqBadge = freq?.label ? `<span style="font-size:9px;background:rgba(255,215,64,.12);color:var(--yellow);border:1px solid rgba(255,215,64,.2);border-radius:10px;padding:1px 6px;margin-left:4px">${freq.label}</span>` : '';
      const srcBadge = `<span class="bd-source-tag" style="background:${isManual?'var(--bg3)':'#1a3a5c'};color:${isManual?'var(--text3)':'#5aabff'}">${deal.source||'Auto'}</span>`;
      const arabicHint = (!isManual && deal.arabicCompany) ? `<span style="font-size:10px;color:var(--text3);margin-left:4px" dir="rtl">${deal.arabicCompany}</span>` : '';
      const delBtn   = isManual
        ? `<button class="bd-del-btn" onclick="deleteBlockDeal('${deal.sym}','${deal.time}')" title="Remove">✕</button>`
        : `<span title="Argaam auto-fetched" style="color:var(--text3);padding:0 6px;font-size:11px">🔒</span>`;
      const cmaBadge = cmaBadgeForDeal(deal, deal.time ? deal.time.slice(0,10) : null);
      return `<div class="bd-row">
        <div style="flex:1;cursor:pointer" onclick="onRowClick(event,'${deal.sym}')">
          <div class="bd-header">
            <span>${whale}<span class="bd-ticker">${tickerDisplay(deal.sym)}</span>${freqBadge} ${srcBadge} ${bias}</span>
            <div style="display:flex;align-items:center;gap:6px">
              <span class="bd-sig-badge" style="font-size:9px;font-weight:700;padding:1px 7px;border-radius:10px;background:${sig.bg};color:${sig.col};border:1px solid ${sig.col}33">${sig.label}${sig.pctLabel}</span>
              <span class="bd-value">${val}</span>
            </div>
          </div>
          ${cmaBadge ? `<div style="margin-top:4px">${cmaBadge}</div>` : ''}
          <!-- Relative size bar -->
          <div style="margin:5px 0 4px;height:4px;background:rgba(255,255,255,.06);border-radius:2px;overflow:hidden">
            <div style="height:100%;width:${relPct}%;background:${sig.col};border-radius:2px;transition:width .4s"></div>
          </div>
          <div style="font-size:11px;color:var(--text2)">${deal.name}${arabicHint}${deal.note?' · <em>'+deal.note+'</em>':''}</div>
          <div class="bd-detail">
            <span>@ <strong>${deal.price.toFixed(2)}</strong></span>
            <span><strong>${deal.qty.toLocaleString()}</strong> shares</span>
            <span>= SAR ${sarDisp}</span>
            ${time?`<span>${time}</span>`:''}
            ${volCtx}
          </div>
        </div>
        ${delBtn}
      </div>`;
    }).join('');
  } catch(e) {
    listEl.innerHTML = `<div class="whale-empty">Error loading deals: ${e.message}</div>`;
  }
}

// Insider Buys functions removed Phase 4 — UI cut Phase 1, /api/insider-buys routes removed, tables empty.

init();

// ── Glossary ─────────────────────────────────────────────────────────────────
const GLOSSARY = [
  { section: 'Signals' },
  { term:'STRONG BUY / BUY', def:'The stock passes most or all of the checklist. Indicators suggest an upward move is likely. This is when traders consider entering.' },
  { term:'WATCH',            def:'The stock shows some positive signs but hasn\'t fully confirmed. Monitor it daily — a volume surge or breakout could be the trigger.' },
  { term:'SKIP',             def:'No clear direction either way. There are better opportunities elsewhere. Ignore for now.' },
  { term:'AVOID',            def:'The stock has warning signs — maybe it\'s in a downtrend, or momentum is weak. Higher risk than reward.' },
  { term:'SELL / STRONG SELL',def:'Existing holders should consider exiting. Multiple signs point to weakness or a continued decline.' },

  { section: 'Score (0–8 pts)' },
  { term:'Score',            def:'A number from 0 to 8 based on how many technical criteria pass. Think of it like a scorecard: 7–8 = almost perfect setup, 0–2 = most criteria failing.' },
  { term:'Strong (7–8)',     def:'Nearly all criteria are met — the best quality setups.' },
  { term:'Good (5–6)',       def:'More criteria pass than fail. A reasonable setup worth watching.' },
  { term:'Fair (3–4)',       def:'Mixed signals. Half the criteria pass, half don\'t.' },
  { term:'Weak (0–2)',       def:'Most criteria are failing. Low probability of a successful trade.' },

  { section: 'Trend Indicators' },
  { term:'EMA (Exponential Moving Average)', def:'A smoothed average of recent prices. "EMA 13" means the average of the last 13 days, weighted toward more recent prices. When short-term EMA > long-term EMA, the stock is trending up.' },
  { term:'EMA Stack (13 > 34 > 89)',  def:'When the 13-day average is above the 34-day, which is above the 89-day, all three timeframes agree the stock is rising. Like traffic lights all turning green at once.' },
  { term:'Above EMA 200',    def:'The stock\'s price is above its 200-day moving average — the gold standard for "this stock is in a long-term uptrend." Most professional investors require this before buying.' },

  { section: 'Momentum Indicators' },
  { term:'RSI (Relative Strength Index)', def:'A 0–100 score measuring how fast a stock has been rising or falling. 52–78 = healthy upward momentum. Above 78 = potentially overbought (may pull back). Below 40 = weak momentum.' },
  { term:'MACD (Moving Average Convergence Divergence)', def:'Compares two moving averages to measure momentum direction. When MACD is positive (histogram above zero), buying pressure is building. When negative, selling pressure is building.' },
  { term:'Divergence',       def:'When price makes a new low but RSI doesn\'t — or vice versa. This mismatch often signals a reversal is coming before it happens.' },

  { section: 'Volume & Risk' },
  { term:'Volume (1.2× average)', def:'The number of shares traded. When volume is higher than usual (1.2× or more), it confirms that the price move is backed by real buying interest — not just noise.' },
  { term:'ATR (Average True Range)', def:'Measures how much a stock typically moves per day. Used to set stop-losses and profit targets. A high ATR means the stock is volatile; a low ATR means it moves slowly.' },
  { term:'Stop Loss',        def:'The price at which you exit a trade to limit your loss if it goes wrong. Typically set 1.5× ATR below your entry price.' },
  { term:'Target 1 / Target 2', def:'Expected profit levels based on the ATR. T1 = 1.5× ATR above entry (conservative). T2 = 3× ATR above entry (optimistic).' },
  { term:'RS (Relative Strength vs Index)', def:'How the stock is performing compared to its market index over the last 20 days. +3% means it\'s outperforming the index by 3%. Positive RS = market leader.' },

  { section: 'Chart Terms' },
  { term:'Support Level',    def:'A price where the stock has bounced back up multiple times in the past. Think of it as a floor — buyers step in at this price.' },
  { term:'Resistance Level', def:'A price where the stock has been turned back down multiple times. Think of it as a ceiling — sellers step in at this price.' },
  { term:'Halal / Sharia Compliant', def:'Stocks screened against Islamic finance principles — no interest-based businesses, no gambling, no alcohol/tobacco, debt ratio below acceptable levels.' },
];

function openGlossary(){
  let html=GLOSSARY.map(g=>{
    if(g.section) return`<div class="glossary-section">${g.section}</div>`;
    return`<div class="glossary-term"><dl><dt>${g.term}</dt><dd>${g.def}</dd></dl></div>`;
  }).join('');
  document.getElementById('glossary-content').innerHTML=html;
  document.getElementById('glossary-overlay').classList.add('open');
}
function closeGlossary(){ document.getElementById('glossary-overlay').classList.remove('open'); }

// ════════════════════════════════════════════════════════════
// CMA FILING MONITOR
// ════════════════════════════════════════════════════════════
let cmaFilingsCache = [];   // all CMA filings loaded from server

async function loadCMAFilings(force = false) {
  try {
    if (!force && cmaFilingsCache.length) return cmaFilingsCache;
    const d = await fetch('/api/cma/filings').then(r => r.json());
    cmaFilingsCache = d.filings || [];
    renderCMAFilings();
    // Re-render block deal rows so CMA badges appear
    if (openDrawerData) renderDrawerBlockDeals(openDrawerData.sym);
    return cmaFilingsCache;
  } catch (e) {
    console.warn('CMA filings load failed:', e.message);
    return [];
  }
}

function cmaForSym(sym, refDate = null, windowDays = 5) {
  const ticker = sym.replace('TADAWUL:','');
  return cmaFilingsCache.filter(f => {
    const fs = (f.sym||'').replace('TADAWUL:','');
    const symMatch = fs === ticker || f.sym === sym;
    if (!symMatch) return false;
    if (!refDate) return true;
    const diff = Math.abs(new Date(f.filing_date) - new Date(refDate)) / 86400000;
    return diff <= windowDays;
  });
}

function renderCMAFilings() {
  const el = document.getElementById('cma-filings-list');
  if (!el) return;
  if (!cmaFilingsCache.length) {
    el.innerHTML = `<div class="whale-empty">No CMA filings loaded. Click ⟳ Refresh or add manually above.</div>`;
    return;
  }
  const fmt = v => v != null ? v.toFixed(1)+'%' : '—';
  el.innerHTML = cmaFilingsCache.map(f => {
    const dirCls  = f.direction === 'buy' ? 'cma-buy' : f.direction === 'sell' ? 'cma-sell' : 'cma-unknown';
    const dirLbl  = f.direction === 'buy' ? '↑ Bought' : f.direction === 'sell' ? '↓ Sold' : '? Unknown';
    const verifBadge = f.verified
      ? `<span class="cma-verified">✓ CMA Confirmed</span>`
      : `<span class="cma-inferred">~ Inferred</span>`;
    const delta = f.prev_pct != null && f.new_pct != null
      ? `${fmt(f.prev_pct)} → ${fmt(f.new_pct)} <span style="color:${f.direction==='buy'?'var(--green)':'#ff5252'}">(${f.direction==='buy'?'+':''}${(f.new_pct-f.prev_pct).toFixed(1)}%)</span>`
      : f.new_pct != null ? `Stake: ${fmt(f.new_pct)}` : '';
    const scanRow = scanData.find(r => r.sym === f.sym);
    const ticker  = (f.sym||'').replace('TADAWUL:','');
    const name    = f.company || scanRow?.name || ticker;
    return `<div class="cma-row">
      <span class="cma-dir-badge ${dirCls}">${dirLbl}</span>
      <div style="flex:1;min-width:0">
        <div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap;margin-bottom:2px">
          <span class="td-ticker" style="font-size:11px">${ticker}</span>
          <span style="font-size:11px;color:var(--text2)">${name}</span>
          ${verifBadge}
          <span style="font-size:10px;color:var(--text3);margin-inline-start:auto">${f.filing_date}</span>
        </div>
        <div class="cma-inst">${f.institution||'Unknown'}</div>
        ${f.institution_en ? `<div class="cma-inst-en">${f.institution_en}</div>` : ''}
        ${delta ? `<div class="cma-pct-change" style="margin-top:2px">${delta}</div>` : ''}
        ${f.source_url ? `<div style="margin-top:3px"><a href="${f.source_url}" target="_blank" style="font-size:9px;color:var(--accent)">Source →</a></div>` : ''}
      </div>
      <button class="cma-del-btn" onclick="deleteCMAFiling(${f.id})" title="Remove">✕</button>
    </div>`;
  }).join('');
}

async function addCMAFiling() {
  const sym  = document.getElementById('cma-sym')?.value.trim();
  const inst = document.getElementById('cma-inst')?.value.trim();
  const dir  = document.getElementById('cma-dir')?.value;
  const prev = document.getElementById('cma-prev')?.value;
  const nw   = document.getElementById('cma-new')?.value;
  const date = document.getElementById('cma-date')?.value;
  const url  = document.getElementById('cma-url')?.value.trim();
  const statusEl = document.getElementById('cma-add-status');

  if (!sym || !inst || !date) {
    if (statusEl) { statusEl.textContent = 'Stock code, institution and date are required'; statusEl.style.color='var(--red)'; }
    return;
  }

  try {
    const r = await fetch('/api/cma/filings/add', {
      method:'POST', headers:{'Content-Type':'application/json'},
      body: JSON.stringify({ sym, institution: inst, direction: dir,
        prev_pct: prev||null, new_pct: nw||null, filing_date: date, source_url: url||null })
    }).then(x => x.json());

    if (r.ok) {
      if (statusEl) { statusEl.textContent = '✓ Filing added'; statusEl.style.color='var(--green)'; }
      ['cma-sym','cma-inst','cma-prev','cma-new','cma-url'].forEach(id => { const el=document.getElementById(id); if(el) el.value=''; });
      await loadCMAFilings(true);
    } else {
      if (statusEl) { statusEl.textContent = r.error || 'Add failed'; statusEl.style.color='var(--red)'; }
    }
  } catch (e) {
    if (statusEl) { statusEl.textContent = e.message; statusEl.style.color='var(--red)'; }
  }
}

async function deleteCMAFiling(id) {
  await fetch('/api/cma/filings/delete', {
    method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify({id})
  });
  await loadCMAFilings(true);
}

async function refreshCMAFilings() {
  const btn = document.getElementById('cma-refresh-btn');
  if (btn) { btn.disabled = true; btn.innerHTML = '<span class="spin">⟳</span> Fetching…'; }
  try {
    const r = await fetch('/api/cma/refresh', { method:'POST' }).then(x => x.json());
    await loadCMAFilings(true);
    if (btn) {
      btn.innerHTML = r.new_filings > 0
        ? `✓ ${r.new_filings} new filing${r.new_filings>1?'s':''}`
        : (r.skipped ? '⟳ Refresh (cached)' : '⟳ None found');
      setTimeout(() => { btn.innerHTML = '⟳ Refresh'; btn.disabled = false; }, 3000);
    }
  } catch (e) {
    if (btn) { btn.innerHTML = '⟳ Refresh'; btn.disabled = false; }
  }
}

// Called from loadWhaleTab — now also loads CMA filings
const _origLoadWhaleTab = loadWhaleTab;
async function loadWhaleTab(force=false) {
  await loadBlockDeals(force);
  await loadCMAFilings(force);
}

// Helper: get CMA badge HTML for a block deal row
function cmaBadgeForDeal(deal, dealDate) {
  const filings = cmaForSym(deal.sym, dealDate, 5);
  if (!filings.length) return '';
  const f = filings[0];
  if (f.direction === 'buy')
    return `<span class="bd-cma-badge bd-cma-buy">✓ CMA: ${f.institution_en||f.institution||'Institution'} Bought</span>`;
  if (f.direction === 'sell')
    return `<span class="bd-cma-badge bd-cma-sell">✓ CMA: ${f.institution_en||f.institution||'Institution'} Sold</span>`;
  return `<span class="bd-cma-badge" style="background:rgba(255,255,255,.05);color:var(--text2);border:1px solid var(--border)">CMA Filing Exists</span>`;
}

// ════════════════════════════════════════════════════════════
// BLOCK DEALS IN DRAWER OVERVIEW
// ════════════════════════════════════════════════════════════
function renderDrawerBlockDeals(sym){
  const el=document.getElementById('drawer-block-deals'); if(!el) return;
  if(!blockDealsCache.length){ el.style.display='none'; return; }
  // Match by sym — TradingView format (TADAWUL:1234) vs plain (1234)
  const ticker=tickerDisplay(sym).replace('TADAWUL:','');
  const deals=blockDealsCache.filter(d=>{
    const ds=d.sym?.replace('TADAWUL:','');
    return ds===ticker||d.sym===sym||tickerDisplay(d.sym)===ticker;
  });
  if(!deals.length){ el.style.display='none'; return; }
  const fmtV=v=>v>=1e6?(v/1e6).toFixed(1)+'M SAR':v>=1e3?(v/1e3).toFixed(0)+'K SAR':v.toLocaleString()+' SAR';
  const maxV=Math.max(...deals.map(x=>x.value||x.price*x.qty||0),1);
  function sig(v,sym){ const s=dealSignificanceVsADTV(v,sym); return s; }
  el.innerHTML=`<div class="crit-section-title" style="margin-top:10px">Block Deals Today <span style="font-size:9px;font-weight:400;color:var(--text3);text-transform:none;letter-spacing:0;margin-inline-start:4px">${deals.length} deal${deals.length>1?'s':''} · confirms volume story</span></div>
  <div style="display:flex;flex-direction:column;gap:6px">
  ${deals.map(deal=>{
    const sarV=deal.value||deal.price*deal.qty||0;
    const s=sig(sarV);
    const relPct=Math.round(sarV/maxV*100);
    const t=deal.time?new Date(deal.time).toLocaleTimeString('en-SA',{hour:'2-digit',minute:'2-digit'}):'';
    return`<div style="background:rgba(255,255,255,.025);border:1px solid rgba(255,255,255,.06);border-inline-start:3px solid ${s.col};border-radius:10px;padding:10px 12px">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px">
        <span style="font-size:9px;font-weight:700;color:${s.col}">${s.label}</span>
        <span style="font-size:13px;font-weight:800;font-family:'JetBrains Mono',monospace;color:${s.col}">${fmtV(sarV)}</span>
      </div>
      <div style="height:4px;background:rgba(255,255,255,.06);border-radius:2px;overflow:hidden;margin-bottom:6px">
        <div style="height:100%;width:${relPct}%;background:${s.col};border-radius:2px"></div>
      </div>
      <div style="font-size:11px;color:var(--text2)">${deal.qty.toLocaleString()} shares @ ${deal.price.toFixed(2)}${t?' · '+t:''}</div>
    </div>`;
  }).join('')}
  </div>`;
  el.style.display='block';
}

// ════════════════════════════════════════════════════════════
// MARKET STATUS — TASI / US / BTC pills in header
// ════════════════════════════════════════════════════════════
function updateMarketStatus(){
  const el=document.getElementById('market-status'); if(!el) return;
  const now=new Date();
  const utcH=now.getUTCHours(), utcM=now.getUTCMinutes(), utcDay=now.getUTCDay(); // 0=Sun
  const utcMins=utcH*60+utcM;

  // TASI: Sun–Thu 07:00–12:00 UTC (10:00–15:00 AST UTC+3)
  const tasiOpen=(utcDay>=0&&utcDay<=4)&&(utcMins>=420&&utcMins<720);

  // US: determine ET offset (EDT UTC-4 Mar 2nd Sun → Nov 1st Sun; EST UTC-5 otherwise)
  function isEDT(d){ const yr=d.getUTCFullYear(); function nthSun(m,n){const t=new Date(Date.UTC(yr,m,1));const diff=(7-t.getUTCDay())%7;return new Date(Date.UTC(yr,m,1+diff+(n-1)*7));} const start=nthSun(2,2),end=nthSun(10,1); return d>=start&&d<end; }
  const etOffset=isEDT(now)?-4:-5;
  const etMins=((utcH+etOffset+24)%24)*60+utcM;
  const etDay=(utcDay+(utcH+etOffset<0?-1:utcH+etOffset>=24?1:0)+7)%7;
  // Regular session Mon–Fri 09:30–16:00 ET
  const usOpen=(etDay>=1&&etDay<=5)&&(etMins>=570&&etMins<960);

  function pill(label,isOpen,always){
    const cls=always?'mkt-always':isOpen?'mkt-open':'mkt-closed';
    return`<span class="mkt-pill ${cls}"><span class="mk-dot"></span>${label}</span>`;
  }
  el.innerHTML=pill('TASI',tasiOpen)+pill('US',usOpen)+pill('BTC',false,true);
}
setInterval(updateMarketStatus,30000); updateMarketStatus();

// ════════════════════════════════════════════════════════════
// SET ALL ATR ALERTS — one-click batch
// ════════════════════════════════════════════════════════════
async function setAllAtrAlerts(stop,tgt1,tgt2){
  const btn=document.getElementById('tpc-set-all-btn'); if(btn){btn.disabled=true;btn.textContent='Setting alerts…';}
  const sym=openDrawerData?.sym; if(!sym) return;
  const fmt=v=>parseFloat(v).toFixed(2);
  const calls=[
    fetch('/api/alert/create',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({sym,price:stop,   message:`${tickerDisplay(sym)} Stop @ ${fmt(stop)}`})}),
    fetch('/api/alert/create',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({sym,price:tgt1,   message:`${tickerDisplay(sym)} T1 @ ${fmt(tgt1)}`})}),
    fetch('/api/alert/create',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({sym,price:tgt2,   message:`${tickerDisplay(sym)} T2 @ ${fmt(tgt2)}`})}),
  ];
  try{
    const results=await Promise.all(calls.map(p=>p.then(r=>r.json()).catch(()=>({success:false}))));
    const ok=results.filter(r=>r.success).length;
    if(btn){btn.textContent=`✓ ${ok}/3 alerts set`;btn.style.color='var(--green)';setTimeout(()=>{if(btn){btn.textContent='Set Stop + T1 + T2 Alerts';btn.disabled=false;btn.style.color='';}},2500);}
  }catch(e){if(btn){btn.textContent='Error';setTimeout(()=>{if(btn){btn.textContent='Set Stop + T1 + T2 Alerts';btn.disabled=false;}},2000);}}
}

// ════════════════════════════════════════════════════════════
// SECTOR ROTATION — score delta between scans
// ════════════════════════════════════════════════════════════
function updateSectorRotation(){
  const wrap=document.getElementById('sector-rotation-wrap'); if(!wrap||!scanData.length){if(wrap)wrap.style.display='none';return;}
  // Compute current sector averages
  const sd={};
  scanData.filter(r=>r.bias!=='ERROR'&&r.bias!=='NO_DATA').forEach(r=>{
    const sec=sectorOf(r.sym);
    if(!sd[sec]) sd[sec]={sum:0,n:0};
    sd[sec].sum+=r.score; sd[sec].n++;
  });
  const curr={};
  Object.entries(sd).forEach(([sec,d])=>{ curr[sec]=Math.round(d.sum/d.n*10)/10; });
  // Load previous
  let prev={};
  try{ prev=JSON.parse(localStorage.getItem('mawjah_sector_prev')||'{}'); }catch(_){}
  // Save current for next scan
  localStorage.setItem('mawjah_sector_prev',JSON.stringify(curr));
  // Render only if we have prev data
  const hasPrev=Object.keys(prev).length>0;
  const _rotMaxS = scanData.find(r=>r.maxScore>8)?.maxScore || 9;
  const entries=Object.entries(curr).sort((a,b)=>b[1]-a[1]);
  const tiles=entries.map(([sec,avg])=>{
    const col=avg>=(_rotMaxS*7/9)?'var(--green)':avg>=(_rotMaxS*4/9)?'var(--yellow)':'#ff5252';
    const pct=Math.round(avg/_rotMaxS*100);
    const delta=hasPrev&&prev[sec]!=null?Math.round((avg-prev[sec])*10)/10:null;
    const dHtml=delta!=null&&delta!==0?`<span class="srot-delta ${delta>0?'up':'dn'}">${delta>0?'+':''}${delta}</span>`:'';
    return`<div class="srot-tile" onclick="filterSector('${sec}',document.querySelector('[onclick*=filterSector][onclick*=${sec}]')||{classList:{add:()=>{},remove:()=>{}}})">
      <div class="srot-name">${sectorLabel(sec)}</div>
      <div><span class="srot-score" style="color:${col}">${avg}</span>${dHtml}</div>
      <div class="srot-bar"><div class="srot-fill" style="width:${pct}%;background:${col}"></div></div>
    </div>`;
  }).join('');
  wrap.innerHTML=`<div class="sector-rot-panel">
    <div class="sector-rot-header">Sector Scores <span style="font-size:9px;font-weight:400;color:var(--text3);margin-inline-start:4px">avg score/${_rotMaxS} · click to filter · delta vs last scan</span></div>
    <div class="sector-rot-grid">${tiles}</div>
  </div>`;
  wrap.style.display='block';
}

// ════════════════════════════════════════════════════════════
// TRADE CHECKLIST MODAL
// ════════════════════════════════════════════════════════════
let _checklistCallback=null;
function showTradeChecklist(r, onConfirm){
  const overlay=document.getElementById('cl-overlay'); if(!overlay) return;
  const isBear=['STRONG SELL','SELL','AVOID'].includes(r?.bias);
  // Build checklist items
  const items=[];
  // 1. Score
  const score=r?.score??0; const maxScore=r?.maxScore??8;
  const scoreOk=score>=(isBear?6:5);
  items.push({cls:scoreOk?'cl-pass':'cl-fail',icon:scoreOk?'✓':'✗',label:`Score: ${score}/${maxScore}`,detail:scoreOk?`${isBear?'Bear':'Bull'} criteria met`:`Below minimum — ${isBear?6:5}/${maxScore} needed for high-conviction entry`});
  // 2. Volume
  const volOk=(r?.vol_ratio??0)>=1.2;
  items.push({cls:volOk?'cl-pass':'cl-warn',icon:volOk?'✓':'⚠',label:`Volume: ${r?.vol_ratio??'—'}×`,detail:volOk?'Above 1.2× average — confirms institutional participation':'Below 1.2× — thin volume, entry may not have conviction'});
  // 3. R:R
  const rrEl=document.getElementById('tpc-rr');
  const rrVal=rrEl?parseFloat(rrEl.textContent):null;
  const rrOk=rrVal!=null&&rrVal>=1.5;
  items.push({cls:rrOk?'cl-pass':rrVal!=null?'cl-fail':'cl-warn',icon:rrOk?'✓':'✗',label:`R:R: ${rrVal!=null?rrVal+':1':'—'}`,detail:rrOk?`${rrVal}:1 reward-to-risk — acceptable trade`:'Minimum 1.5:1 R:R needed for a positive-expectancy trade'});
  // 4. Market regime
  const regTrend=document.getElementById('rg-trend')?.textContent??'';
  const regOk=!regTrend.toLowerCase().includes('bear')||isBear;
  items.push({cls:regOk?'cl-pass':'cl-warn',icon:regOk?'✓':'⚠',label:`Market regime: ${regTrend||'—'}`,detail:regOk?'Regime supports this direction':'Counter-trend trade — use tighter stops and smaller size'});
  // 5. Sector
  const sec=sectorOf(r?.sym??'');
  const secAvgData=scanData.filter(x=>sectorOf(x.sym)===sec&&x.bias!=='ERROR');
  const secAvg=secAvgData.length?secAvgData.reduce((a,b)=>a+(b.score??0),0)/secAvgData.length:null;
  const secOk=secAvg!=null&&(isBear?secAvg<=4:secAvg>=4);
  items.push({cls:secOk?'cl-pass':'cl-warn',icon:secOk?'✓':'⚠',label:`Sector: ${sectorLabel(sec)} avg ${secAvg!=null?secAvg.toFixed(1):'—'}/8`,detail:secOk?'Sector score supports this trade direction':'Sector not fully aligned — consider if thesis is stock-specific'});

  const passCount=items.filter(i=>i.cls==='cl-pass').length;
  const failCount=items.filter(i=>i.cls==='cl-fail').length;
  document.getElementById('cl-subtitle').textContent=`${passCount}/5 checks pass · ${failCount>0?failCount+' critical issues':'No blockers'} · ${r?.name??r?.sym??''}`;
  document.getElementById('cl-items').innerHTML=items.map(i=>`<div class="cl-item ${i.cls}"><div class="cl-icon">${i.icon}</div><div><div class="cl-label">${i.label}</div><div class="cl-detail">${i.detail}</div></div></div>`).join('');
  const confirmBtn=document.getElementById('cl-confirm-btn');
  if(confirmBtn){
    confirmBtn.textContent=failCount>0?'Proceed anyway ('+failCount+' issue'+(failCount>1?'s':'')+')':'Proceed — Execute Trade';
    confirmBtn.style.background=failCount>0?'rgba(255,61,113,.6)':'';
    confirmBtn.onclick=()=>{ closeChecklist(); onConfirm(); };
  }
  _checklistCallback=onConfirm;
  overlay.classList.add('cl-open');
}
function closeChecklist(){ document.getElementById('cl-overlay')?.classList.remove('cl-open'); _checklistCallback=null; }


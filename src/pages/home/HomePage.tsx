import {t} from "i18next";
import {FiSettings, FiUser, FiArrowDownCircle, FiArrowUpCircle, FiRefreshCcw, FiCreditCard} from "react-icons/fi";
import TIcon from "../../shared/components/t-icon/TIcon.tsx";
import IconTop from "../../shared/components/cards/IconTop.tsx";
import {IconColorEnum} from "../../models/IconColors.ts";

export default function HomePage() {
    return (
        <>
            <div className="flex justify-between">
                <div>
                    <TIcon Icon={FiUser}/>
                </div>

                <div>
                    <div>
                        {t('balance.total')}
                    </div>

                    <div className="mt-3 text-2xl font-bold">$ 4,506</div>
                </div>

                <div>
                    <TIcon Icon={FiSettings}/>
                </div>
            </div>

            <div className="flex justify-between gap-2 mt-6">
                <div className="w-1/4">
                    <IconTop title={t('money.add')} Icon={FiArrowDownCircle}/>
                </div>

                <div className="w-1/4">
                    <IconTop title={t('pay')} Icon={FiArrowUpCircle}/>
                </div>

                <div className="w-1/4">
                    <IconTop title={t('exchange')} Icon={FiRefreshCcw}/>
                </div>

                <div className="w-1/4">
                    <IconTop title={t('cards')} Icon={FiCreditCard}/>
                </div>
            </div>

            {/* Assets */}
            <div className="mt-10">
                <div className="text-gray-500 font-medium flex justify-between">
                    <div className="flex items-center gap-3">
                        <img className="border" width="50px" src="./flags/eu.png"/>
                        <label>EUR</label>
                    </div>

                    <div className="font-bold">
                        € 1,356
                    </div>
                </div>

                <div className="h-[1px] bg-gray-100 w-4/5 mx-auto my-4"></div>

                <div className="text-gray-500 font-medium flex justify-between">
                    <div className="flex items-center gap-3">
                        <img className="border" width="50px" src="./flags/us.png"/>
                        <label>USD</label>
                    </div>

                    <div className="font-bold">
                        $ 5,201
                    </div>
                </div>

                <div className="h-[1px] bg-gray-100 w-4/5 mx-auto my-4"></div>

                <div className="text-gray-500 font-medium flex justify-between">
                    <div className="flex items-center gap-3">
                        <img className="border" width="50px" src="./flags/gb.png"/>
                        <label>GBP</label>
                    </div>

                    <div className="font-bold">
                        £ 6,854
                    </div>
                </div>

                <div className="h-[1px] bg-gray-100 w-4/5 mx-auto my-4"></div>

                <div className="text-gray-500 font-medium flex justify-between">
                    <div className="flex items-center gap-3">
                        <img className="border" width="50px" src="./flags/jp.png"/>
                        <label>YEN</label>
                    </div>

                    <div className="font-bold">
                        ¥ 12,625
                    </div>
                </div>
            </div>
            {/* End of Assets */}

            {/* Transactions */}
            <div className="flex justify-between mt-8">
                <label className="font-bold">{t('transaction.recent')}</label>
                <label className="text-primary font-medium">{t('see.all')}</label>
            </div>

            <div className="flex justify-between items-center mt-3">
                <div className="flex items-center gap-2">
                    <div className="rounded-full bg-gray-200 w-12 h-12 flex justify-center items-center">
                        <TIcon Icon={FiUser} color={IconColorEnum.LIGHT3}/>
                    </div>

                    <label>Jagger White</label>
                </div>

                <div className="flex flex-col text-end">
                    <label className="font-medium">- ¥1,000</label>
                    <label className="text-gray-400 text-xs">04/05/2024 18:25:36</label>
                </div>
            </div>

            <div className="flex justify-between items-center mt-3">
                <div className="flex items-center gap-2">
                    <div className="rounded-full bg-gray-200 w-12 h-12 flex justify-center items-center">
                        <TIcon Icon={FiUser} color={IconColorEnum.LIGHT3}/>
                    </div>

                    <label>Alaia Valencia</label>
                </div>

                <div className="flex flex-col text-end ">
                    <label className="font-medium">+ £2,300</label>
                    <label className="text-gray-400 text-xs">04/05/2024 18:25:36</label>
                </div>
            </div>

            <div className="flex justify-between items-center mt-3">
                <div className="flex items-center gap-2">
                    <div className="rounded-full bg-gray-200 w-12 h-12 flex justify-center items-center">
                        <TIcon Icon={FiUser} color={IconColorEnum.LIGHT3}/>
                    </div>

                    <label>Nala Stanley</label>
                </div>

                <div className="flex flex-col text-end">
                    <label className="font-medium">- £500</label>
                    <label className="text-gray-400 text-xs">04/05/2024 18:25:36</label>
                </div>
            </div>

            <div className="flex justify-between items-center mt-3">
                <div className="flex items-center gap-2">
                    <div className="rounded-full bg-gray-200 w-12 h-12 flex justify-center items-center">
                        <TIcon Icon={FiUser} color={IconColorEnum.LIGHT3}/>
                    </div>

                    <label>Remington Wiggins</label>
                </div>

                <div className="flex flex-col text-end">
                    <label className="font-medium">+ $3,750</label>
                    <label className="text-gray-400 text-xs">04/05/2024 18:25:36</label>
                </div>
            </div>

        </>
    )
}

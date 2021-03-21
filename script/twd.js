let twdAma = `
TKT-0573325039259-260    RCI-                     1A  LOC-J4YE53
 OD-CAICAI  SI-      FCPI-0   POI-PAR  DOI-14MAR20  IOI-20266002
   1.REZK/ABDELHALIM MR        ADT            ST
 1 OCAI AZ 895   O 15MAR0430 OK NLSOEG        F   15MAR15MAR 1PC
 2 XFCO AF9748AZ N 15MAR0910 OK NLSOEG        F   15MAR15MAR 1PC
 3 OLAX AF  77   N 03MAR2100 OK NLSOEG        O   03MAR03MAR 1PC
 4 XCDG AF1088   L 04MAR1900 OK NLSOEG        O   04MAR04MAR 1PC
 5 XOTP RO 101   N 07MAR0030 OK NLSOEG        O I 05MAR05MAR 1PC
    CAI
FARE   F EGP      5349.00
EQUIV    EUR       304.00       BSR     0.056834
TOTALTAX EUR       262.72
TOTAL    EUR       566.72 
/FC CAI AZ X/ROM AF LAX M168.93AF X/PAR AF X/BUH RO CAI M168.93N
UC337.86END ROE15.832000 XF LAX4.5
FE NON ENDO -BG AF
FP CASH
FOR TAX/FEE DETAILS USE TWD/TAX
SAC-MULTI/USE TWH
>
twd/tax
TOTALTAX   EUR    262.72                                                        
TX01 EUR    106.88YR  TX02 EUR     15.00YR  TX03 EUR      4.68FR                
TX04 EUR     11.47QX  TX05 EUR      0.89O9  TX06 EUR      2.85JK                
TX07 EUR     22.27QH  TX08 EUR      8.53XK  TX09 EUR      1.79EQ                
TX10 EUR      0.86O2  TX11 EUR      8.53EG  TX12 EUR      7.50HB                
TX13 EUR      9.60IT  TX14 EUR      0.99MJ  TX15 EUR      3.18VT                
TX16 EUR      3.53XA  TX17 EUR      6.24XY  TX18 EUR      5.25YC                
TX19 EUR     16.84US  TX20 EUR     16.84US  TX21 EUR      4.99AY                
TX22 EUR      4.01XF
`

const twdAmaFQQ = `
  LAST TKT DTE 01SEP20 - DATE OF ORIGIN
  ------------------------<NEGO>------------------------------
      AL FLGT  BK T DATE  TIME  FARE BASIS      NVB  NVA   BG
  IST
  XPAR KL  2353 L  L 01SEP 0425  RL0TI0NB        01SEP01SEP 1P
  NYC KL  6184 R  R 01SEP 1030  RL0TI0NB        01SEP01SEP 1P

  USD   141.00      01SEP20IST KL X/E/PAR KL NYC Q18.90 M
  EUR   119.00      122.55NUC141.45END ROE1.000000
  EUR    11.76-YQ   XT EUR 4.68-FR EUR 19.64-QX EUR 3.00-M6
  EUR   100.73-YR   EUR 20.00-TR EUR 3.33-XA EUR 5.88
  EUR    61.48-XT   EUR -XY 4.95-YC
  EUR   292.97
  RATE USED 1USD=0.839365EUR
  BAG/SEAT/SERVICES AT A CHARGE MAY BE AVAILABLE-ENTER FXK
  PRICING OVERRIDE USED *V*
  CAT35 NEGOTIATED FARES
`

const twdAmaFWT = `
  FWT                                                                        
  TAX  /CNTRY:         TOTAL                                                    
  TAX BREAKDOWN                      POS     /       LOC                
  YQI        :         23.52 EUR                                                
  KL*SGT 1-2       SEQ 9961022     11.76 EUR /     14.00 USD                
  KL*SGT 3-4       SEQ 9961022     11.76 EUR /     14.00 USD            
  YRI        :        100.73 EUR                                                
  KL*SGT 2         SEQ 2044915    100.73 EUR /    120.00 USD            
  YRI        :         97.79 EUR                                                
  KL*SGT 3         SEQ 2044863     97.79 EUR /    116.50 USD           
  TOTAL AMOUNT:        222.04 EUR
`

let twdSabre = `
    ELECTRONIC TICKET RECORD                          CRS CODE:7906
    INV:                  CUST:                          PNR:      
    TKT:0063660475289     ISSUED:04JUN19   PCC:286221 IATA:72323834
    NAME:KASPERCHYK/MYKYTA MR                                      
    FORM OF PAYMENT                        FCI: 0                  
    1    CASH                               AMOUNT:          146   
    2    CA5100930400052789*0321 /601154 S  AMOUNT:        15614   
    CPN  A/L  FLT  CLS DATE   BRDOFF  TIME  ST F/B             STAT
    1    AF   1653  X  16SEP  KBPCDG 0600   OK XL12X6M2        USED
                                    NVB:16SEP   NVA:16SEP   BAG:1PC
    2    AF   386   X  16SEP  CDGYYZ 1700   OK XL12X6M2        USED
                                    NVB:16SEP   NVA:16SEP   BAG:1PC
    3    AZ   651   S  19APR  YYZFCO 2130   OK SLSXRU          OPEN
                                    NVB:19APR   NVA:19APR   BAG:1PC
    4    AZ   590   S  20APR  FCOIEV 2235   OK SLSXRU          OPEN
                                    NVB:20APR   NVA:20APR   BAG:1PC
    FARE      USD218.00                                            
    TOTAL       UAH15760     EQUIVALENT FARE PAID           UAH5856¥
    FARE CALCULATION                                               
    IEV DL X/PAR DL YTO M126.50AZ X/ROM AZ IEV91.50NUC218.00END ROE2.123000                                                       
    TAX BREAKDOWN                                                  
    TAX      6954YR TAX       108YR TAX        54UD TAX       350YK
    TAX       580QX TAX       141FR TAX       515CA TAX        65RC
    TAX       497SQ TAX       225HB TAX       290IT TAX        29MJ
    TAX        96VT                                                
    ENDORSEMENT                                                    
    CONDITIONS APPLY NON ENDORSEABLE-AZ ONLY -BG DL
    BSR423.81 YQ`

import os
import io

# import pdb


source_directory ="C:\\Users\\AKSHATA MANDLOI\\Desktop\\amazon"

# pdb.set_trace()
 
for root, dirs, files in os.walk(source_directory):
    for file in files:
        if file.endswith('.txt'):
            new_path = os.path.join(root,file)
            # print(new_path)
            with open("data_transfer\\sample.txt",'rt') as f1:
               
                with open(new_path,"wt") as f2:
                    content=f1.read()
                    print(content)
                    f2.write(content)
                   
                
            
        if file.endswith('.pdf'):
            new_path = os.path.join(root,file)
            with open("data_transfer\\sample.pdf",'r') as fileone:
                with open(new_path,"wt") as filetwo:
                    content=fileone.read()
                    filetwo.write(content)
            

        elif file.endswith('.ppt'):
            new_path = os.path.join(root,file)
            with open("data_transfer\\sample.ppt",'r') as file1:
                with open(new_path,"wt") as file2:
                    content=file1.read()
                    file2.write(content)
        
        else:
            pass

       

 